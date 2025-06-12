async function main() {
  console.log("Deploying Open Edition NFT...");
  
  const OpenEditionNFT = await ethers.getContractFactory("OpenEditionNFT");
  const nft = await OpenEditionNFT.deploy(
    "Monad Horse",  // Name
    "HORSE",        // Symbol  
    "https://ipfs.io/ipfs/bafkreigv7th7nsuawgiz3fod3eoc22wqqyuvmz72fqlgvkznepsxi67r7e"
  );
  
  await nft.waitForDeployment();
  
  console.log("✅ NFT Contract deployed to:", nft.target);
  console.log("🎯 Copy this address for your Blink!");
  console.log("💰 Mint price: 0.5 MON");
  console.log("🐴 Collection: Monad Horse");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
