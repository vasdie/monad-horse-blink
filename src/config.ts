import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { monad } from "@/monad";

// Wagmi config
export const config = createConfig({
  chains: [mainnet, sepolia, monad],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [monad.id]: http(),
  },
});
