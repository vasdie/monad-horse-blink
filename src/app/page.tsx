"use client";

import {
  Blink,
  useAction,
  useActionsRegistryInterval,
} from "@dialectlabs/blinks";

import "@dialectlabs/blinks/index.css";

import { useEvmWagmiAdapter } from "@dialectlabs/blinks/hooks/evm";

import { useModal } from "connectkit";

import { StepCard } from "@/components/step-card";

// Text for the steps on the left side of the page for the user to follow
const steps = [
  {
    headline: "Interact with the Blink ",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    headline: "Change the URL in the source code",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    headline: "Change the image or test in the local blink",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    headline: "Once your blink is redy, take it to dial.to",
    text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
];

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
    <main className="grid grid-cols-[2fr_3fr] h-[calc(100vh-64px)]">
      <div className="col-span-1 p-8 pr-16 overflow-y-auto">
        <h1 className="text-4xl mb-2 font-bold">GMonad!</h1>
        <h2 className="text-2xl">
          Welcome to the Monad Blink Starter Tutorial!
        </h2>
        {steps.map((step, i) => (
          <StepCard
            key={i}
            step={`Step ${++i}`}
            headline={step.headline}
            text={step.text}
          />
        ))}
      </div>

      <div className=" flex items-center justify-center border border-gray-600 rounded-[10px] m-4">
        {isLoading || !action ? (
          <span>Loading</span>
        ) : (
          <div className="w-full max-w-lg">
            <Blink
              action={action}
              adapter={adapter}
              securityLevel="all"
              stylePreset="x-dark"
            />
          </div>
        )}
      </div>
    </main>
  );
}
