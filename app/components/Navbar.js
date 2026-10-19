import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="app-navbar flex justify-between items-center px-4 py-2">
      <h1 className="text-xl font-bold">
        <span className="text-indigo-400">Bit</span> Links
      </h1>
      <ul className="flex-centered gap-6">
        <Link href="/">
          <li className="app-link transition-colors">Home</li>
        </Link>
        <Link href="/about">
          <li className="app-link transition-colors">About</li>
        </Link>
        <Link href="/shorten">
          <li className="app-link transition-colors">Shorten</li>
        </Link>
        <Link href="/contact">
          <li className="app-link transition-colors">Contact Us</li>
        </Link>
        <li className="flex gap-2">
          <Link href="/try">
            <button className="app-button px-4 py-2 rounded-xl hover:cursor-pointer">
              Try now
            </button>
          </Link>
          <Link href="https://github.com/GovindaGodse/bit-links">
            <button className="border border-indigo-400/50 px-4 py-2 rounded-xl hover:bg-indigo-400/10 hover:cursor-pointer transition-colors">
              GitHub
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
