import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-centered flex-col gap-12 grow lg:flex-row">
      <section className="flex w-full max-w-xl flex-col items-start justify-center gap-5">
        <span className="eyebrow">A simpler way to share</span>
        <h1 className="hero-title">
          Make every character <span>count.</span>
        </h1>
        <p className="hero-description">
          Make long URLs easier to share. Paste a link, get a shorter one, and
          share it wherever you need.
        </p>

        <div className="hero-actions">
          <Link href="/generate" className="primary-button">
            <button>Shorten a link</button>
          </Link>
          <Link
            href="https://github.com/GovindaGodse/bit-links"
            className="tertiary-button"
            target="_blank"
            rel="noreferrer"
          >
            <button>Source Code</button>
          </Link>
        </div>
        <p className="hero-note">No account required</p>
      </section>
      <section className="w-full max-w-2xl overflow-hidden rounded-3xl border border-[rgb(255_255_255_/_9%)]">
        <Image
          className="h-auto w-full"
          width={720}
          height={300}
          src="/short-links.svg"
          alt="A long link shrinks into a short link"
          priority
          draggable={false}
        />
      </section>
    </main>
  );
}
