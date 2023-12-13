import { pacifico } from "@/app/lib/fonts";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="">
      <div className="max-w-screen-lg h-[57px] container mx-auto flex justify-between items-center">
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
