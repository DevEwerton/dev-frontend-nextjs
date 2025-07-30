import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="mx-auto max-w-6xl p-4 bg-white">
        <Link
          href="/"
          className="flex items-center gap-2 cursor-pointer select-none"
          aria-label="Ir para products"
        >
          <Image src="/bag.png" alt="logo" width={40} height={40} priority />
          <span className={`${dancing.className} text-2xl`}>Dragon&apos;s Store</span>
        </Link>
      </div>
    </header>
  );
}
