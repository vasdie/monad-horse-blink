import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Free Mint Monad Horse NFT',
  description: 'Mint your free Monad Horse NFT',
  openGraph: {
    title: 'Free Mint Monad Horse NFT',
    description: 'Mint your free Monad Horse NFT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Mint Monad Horse NFT',
    description: 'Mint your free Monad Horse NFT',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
