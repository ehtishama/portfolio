import { pacifico } from "@/app/lib/fonts";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="">
      <div className="h-[57px] max-w-6xl px-4 mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h2 className={`font-semibold ${pacifico.className}`}>shaam.dev</h2>
        </Link>

        <ul className="flex space-x-4">
          <li>
            <Link href={""}>Projects</Link>
          </li>
          <li>
            <Link href={""}>About</Link>
          </li>
          <li>
            <Link href={""}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
