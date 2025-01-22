"use client";

import Image from "next/image";
import Link from "next/link";
import { ConnectKitButton } from "connectkit";

export function Navbar() {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center border-b border-gray-800 dark:border-gray-800">
      {/* Dialect Logo */}
      <Link
        href="https://www.dialect.to/"
        className="flex items-center relative h-[30px] w-[120px]"
      >
        <Image
          src="/dialect-logo-black.png"
          alt="Dialect Logo"
          width={120}
          height={30}
          className="object-contain absolute dark:opacity-0"
        />
        <Image
          src="/dialect-logo-white.png"
          alt="Dialect Logo"
          width={120}
          height={30}
          className="object-contain absolute opacity-0 dark:opacity-100"
        />
      </Link>

      {/* Social Links and Connect Button */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            href="https://x.com/saydialect"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Follow on X"
          >
            <Image
              src="/icon-x.svg"
              alt="X (Twitter)"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </Link>
          <Link
            href="https://github.com/dialectlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="View on GitHub"
          >
            <Image
              src="/icon-github.svg"
              alt="GitHub"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          </Link>
        </div>
        <ConnectKitButton />
      </div>
    </nav>
  );
}
