import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <Link href="/products" className="px-4 py-2 rounded bg-black text-white">acessar a loja</Link>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link
          href="https://ewertondias.com"
          target="_blank"
          className="text-gray-500 hover:text-gray-700 transition-colors" 
        >
          ewertondias.com
        </Link>
      </footer>
    </div>
  );
}
