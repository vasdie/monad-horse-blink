"use client";

import {
  Blink,
  useAction,
  useActionsRegistryInterval,
} from "@dialectlabs/blinks";

import "@dialectlabs/blinks/index.css";

import { useEvmWagmiAdapter } from "@dialectlabs/blinks/hooks/evm";

import { useModal } from "connectkit";

export default function Home() {
  // Actions registry interval
  useActionsRegistryInterval();

  // ConnectKit modal
  const { setOpen } = useModal();

  // Wagmi adapter, used to connect to the wallet
  const { adapter } = useEvmWagmiAdapter({
    onConnectWalletRequest: async () => {
      setOpen(true);
    },
  });

  // Action we want to execute in the Blink
  const { action, isLoading } = useAction({
    url: "evm-action:http://localhost:3000/api/actions/donate-mon",
  });

  return (
    <main className="flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-8">
        {isLoading || !action ? (
          <span>Loading</span>
        ) : (
          // Blink component, used to execute the action
          <Blink action={action} adapter={adapter} securityLevel="all" />
        )}
      </div>
    </main>
  );
}
