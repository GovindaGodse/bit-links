import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <header>
      <nav className="app-navbar flex justify-evenly items-center py-3">
        <h2 className="flex items-center gap-2 text-xl font-bold">
          <Image
            src="/short-links-logo.svg"
            alt=""
            width={25}
            height={25}
            className="shrink-0"
          />
          Short Links
        </h2>
        <ul className="flex-centered gap-2 text-sm">
          <Link href="/">
            <li className="app-link transition-colors">Home</li>
          </Link>
          <Link href="/contact">
            <li className="app-link transition-colors">Contact</li>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/GovindaGodse/bit-links"
          >
            <li className="app-link transition-colors">GitHub</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
