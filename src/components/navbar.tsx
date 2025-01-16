import Image from "next/image";
import Link from "next/link";

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

      {/* X (Twitter) Follow Link */}
      <Link
        href="https://x.com/saydialect"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition-colors"
      >
        Follow on X
      </Link>
    </nav>
  );
}
