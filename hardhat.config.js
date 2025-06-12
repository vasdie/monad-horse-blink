require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    monadTestnet: {
      url: "https://warmhearted-methodical-darkness.monad-testnet.quiknode.pro/7838ebcf841b3ce7814c55b3fe37c85136349abb/",
      accounts: ["fdad0292df8884dd6e0f8b097cf06d92270485d5e6eebe492036238894ec5fe4"],
      chainId: 10143
    }
  }
};








