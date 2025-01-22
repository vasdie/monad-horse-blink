import { http, createConfig } from "wagmi";
import { monad } from "@/monad";

// Wagmi config: only Monad
export const config = createConfig({
  chains: [monad],
  transports: {
    [monad.id]: http(),
  },
});
