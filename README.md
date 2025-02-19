# Blink Starter for Monad

A Next.js-based starter template demonstrating how to integrate [Blinks](https://dialect.to/) with the Monad blockchain. This project showcases a simple donation application that allows users to send MON (Monad's native currency) to a specified wallet address.

## Guide 🔥🔥🔥

Learn how to build this Blink from scratch with our extensive guide:
https://docs.dialect.to/documentation/actions/guides/monad-starter-guides

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

- `NEXT_PUBLIC_RPC_URL`: Monad RPC URL
- `DONATION_WALLET`: The wallet address to receive donations

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## License

MIT
