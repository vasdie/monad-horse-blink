# Blink Starter for Monad

A Next.js-based starter template demonstrating how to integrate [Blinks](https://dialect.to/) with the Monad blockchain. This project showcases a simple donation application that allows users to send MON (Monad's native currency) to a specified wallet address.

## Guide 🔥🔥🔥

Learn how to build this Blink from scratch with our extensive guide:
https://dialectlabs.notion.site/Donate-MON-with-a-Blink-17b478e30ab08072bbf1c21f760cf79d

## Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- A wallet with some MON tokens (for testing donations)

## Environment Setup

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Configure the following environment variables:

- `NEXT_PUBLIC_CHAIN_ID`: Monad chain ID
- `NEXT_PUBLIC_RPC_URL`: Monad RPC URL
- `DONATION_WALLET`: The wallet address to receive donations

## Getting Started

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `src/app/` - Next.js application routes and pages
- `src/app/api/actions/` - API routes for handling donations
- `src/monad.ts` - Monad blockchain configuration
- `src/provider.tsx` - React providers setup
- `src/config.ts` - Application configuration

## License

MIT
