"use client";

import { pacifico } from "@/app/lib/fonts";
import { clsx } from "clsx";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="border-b sticky top-0 bg-white/70 dark:bg-gray-800 dark:border-gray-600 backdrop-blur-md z-50">
      <div className="h-[70px] max-w-6xl px-4 mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h2 className={`font-semibold ${pacifico.className}`}>shaam.dev</h2>
        </Link>

        {/* links for desktop */}
        <ul className="hidden lg:flex items-center space-x-8 font-medium ">
          <li>
            <Link href={"#hero"}>About</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>
            <Link
              href={"/#footer"}
              className="btn bg-black rounded px-6 py-3 text-white hover:shadow-lg transform hover:scale-125 transition-all"
            >
              Get in Touch
            </Link>
          </li>
        </ul>

        {/* links for mobile */}
        <button
          className="lg:hidden border p-1 rounded hover:shadow"
          onClick={() => setNavOpen(true)}
        >
          <MdMenu size={32} />
        </button>

        <div
          className={`${clsx(
            !navOpen && "-right-96",
            navOpen && "right-0"
          )} absolute top-0 min-h-screen w-96 bg-white p-4 shadow transition-all `}
        >
          <div className="flex justify-end pb-4">
            <button
              aria-label="Close Navigation menu button"
              className=" border rounded p-1 hover:shadow"
              onClick={() => setNavOpen(false)}
            >
              <MdClose size={32} />
            </button>
          </div>
          <ul className="flex flex-col gap-8 items-center justify-center font-medium text-gray-700">
            <li>
              <Link href={"#hero"}>About</Link>
            </li>
            <li>
              <Link href={"#projects"}>Projects</Link>
            </li>
            <li>
              <Link
                href={"/#footer"}
                className="btn bg-black rounded px-6 py-3 text-white hover:shadow-lg transition-all"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
