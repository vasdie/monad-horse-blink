import { defineChain } from "viem";

// Monad chain definition
export const monad = /*#__PURE__*/ defineChain({
  id: 20143,
  name: "Monad Devnet",
  nativeCurrency: { name: "Monad", symbol: "DMON", decimals: 18 },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_RPC_URL as string],
    },
  },
  testnet: true,
});
