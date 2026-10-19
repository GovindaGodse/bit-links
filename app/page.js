import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-centered flex-col gap-12 grow lg:flex-row">
        <div className="flex w-full max-w-xl flex-col items-start justify-center gap-5">
          <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm tracking-wide text-emerald-300">
            FAST · PRIVATE · FREE
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            The best URL shortener in the{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              market.
            </span>
          </h2>
          <p className="text-lg leading-8 text-gray-400">
            We are the most straightfoward URL Shortener in the world. Most of
            the url shorteners will track you or ask you to give your details
            for login. We understand your needs and hence we have created this
            URL shortener
          </p>
          <div className="flex items-center gap-4 pt-2">
            <Link href="/try">
              <button className="app-button px-6 py-3 rounded-xl font-semibold hover:cursor-pointer">
                Try now
              </button>
            </Link>
            <Link href="/github">
              <button className="rounded-xl border border-indigo-400/40 px-6 py-3 font-semibold text-gray-200 transition-colors hover:bg-indigo-400/10 hover:cursor-pointer">
                GitHub
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-indigo-400/20 shadow-[0_0_80px_rgba(99,102,241,0.12)]">
          <Image
            className="h-auto w-full"
            width={720}
            height={300}
            src="/shorten-url.svg"
            alt="A long link shrinks into a short link"
            priority
            draggable={false}
          />
        </div>
    </main>
  );
}
