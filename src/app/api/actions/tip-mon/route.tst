import { ActionGetResponse, ActionPostResponse } from "@solana/actions";
import { serialize } from "wagmi";
import { parseEther, encodeFunctionData } from "viem";

// CAIP-2 format for Monad
const blockchain = "eip155:10143";

// Your deployed Monad Horse NFT contract (updated with Pinata gateway)
const nftContractAddress = "0x07D8aB191308AeC587EAefeb613e124f25b23705";
const mintPrice = "0.5"; // 0.5 MON

// NFT contract ABI for mint function
const nftAbi = [
  {
    inputs: [],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

// Create headers with CAIP blockchain ID
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "Content-Type, x-blockchain-ids, x-action-version",
  "Access-Control-Expose-Headers": "x-blockchain-ids, x-action-version",
  "Content-Type": "application/json",
  "x-blockchain-ids": blockchain,
  "x-action-version": "2.4",
};

// OPTIONS endpoint is required for CORS preflight requests
export const OPTIONS = async () => {
  return new Response(null, { headers });
};

// GET endpoint returns the Blink metadata (JSON) and UI configuration
export const GET = async (req: Request) => {
  const response: ActionGetResponse = {
    type: "action",
    icon: `${new URL("/tip-mon.png", req.url).toString()}`,
    label: "Mint Monad Horse",
    title: "🐴 Mint Your Monad Horse NFT",
    description:
      "Mint your exclusive Monad Horse NFT! Open edition collection on Monad blockchain. Only 0.5 MON per mint.",
    links: {
      actions: [
        {
          type: "transaction",
          label: "🐴 Mint Monad Horse (0.5 MON)",
          href: `/api/actions/tip-mon`,
        },
      ],
    },
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers,
  });
};

// POST endpoint handles the actual transaction creation
export const POST = async (req: Request) => {
  try {
    // Encode the mint function call
    const data = encodeFunctionData({
      abi: nftAbi,
      functionName: "mint",
      args: [],
    });

    // Build the transaction to call the NFT contract
    const transaction = {
      to: nftContractAddress,
      value: parseEther(mintPrice).toString(),
      data: data,
      chainId: "10143",
    };

    const transactionJson = serialize(transaction);

    const response: ActionPostResponse = {
      type: "transaction",
      transaction: transactionJson,
      message: "🐴 Your Monad Horse NFT has been minted! Check your wallet! 🎉",
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers,
    });
  }
};
