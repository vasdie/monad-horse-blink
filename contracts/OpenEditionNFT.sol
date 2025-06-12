// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract OpenEditionNFT is ERC721, Ownable {
    uint256 private _tokenIdCounter = 1;
    uint256 public constant MINT_PRICE = 0 ether; // FREE MINT!
    
    string private _baseTokenURI;
    bool public mintingEnabled = true;
    
    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) ERC721(name, symbol) Ownable(msg.sender) {
        _baseTokenURI = baseURI;
    }
    
    function mint() public payable {
        require(mintingEnabled, "Minting is disabled");
        require(msg.value >= MINT_PRICE, "Insufficient payment");
        
        uint256 tokenId = _tokenIdCounter;
        _tokenIdCounter += 1;
        
        _safeMint(msg.sender, tokenId);
    }
    
    function mintMultiple(uint256 quantity) public payable {
        require(mintingEnabled, "Minting is disabled");
        require(quantity > 0 && quantity <= 10, "Invalid quantity");
        require(msg.value >= MINT_PRICE * quantity, "Insufficient payment");
        
        for (uint256 i = 0; i < quantity; i++) {
            uint256 tokenId = _tokenIdCounter;
            _tokenIdCounter += 1;
            _safeMint(msg.sender, tokenId);
        }
    }
    
    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter - 1;
    }
    
    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }
    
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(tokenId > 0 && tokenId < _tokenIdCounter, "Token does not exist");
        return _baseTokenURI;
    }
    
    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
    
    function toggleMinting() public onlyOwner {
        mintingEnabled = !mintingEnabled;
    }
    
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        payable(owner()).transfer(balance);
    }
}
