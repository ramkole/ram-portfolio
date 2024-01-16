"use client";

import { links } from "@/lib/constData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  return (
    <nav className="flex space-x-6 border-b border-dotted border-orange-400 mb-5 h-14 items-center">
      <Link className="px-3" href="/">
        <Image
          className="border-2 border-opacity-50 border-orange-400"
          src="https://avatars.githubusercontent.com/u/56620810?v=4"
          width={40}
          height={40}
          alt="hero"
        />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              className={`${
                link.href === currentPath ? "text-zinc-900" : "text-zinc-500"
              } hover:text-zinc-900 transition-colrs`}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
