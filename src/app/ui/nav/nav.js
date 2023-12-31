import { pacifico } from "@/app/lib/fonts";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="border-b sticky top-0 bg-white/70 backdrop-blur-md z-50">
      <div className="h-[70px] max-w-6xl px-4 mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h2 className={`font-semibold ${pacifico.className}`}>shaam.dev</h2>
        </Link>

        <ul className="flex items-center space-x-8 font-medium text-gray-700">
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
    </nav>
  );
}
