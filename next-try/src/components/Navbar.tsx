"use client";

import pagesInfo from "@/lib/pagesInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-around">
      <Link href="/">Logo</Link>
      <nav className="flex flex-col md:flex-row">
        {pagesInfo.map((nav) => {
          const isActive = pathname.endsWith(nav.path);
          return (
            <Link
              key={nav.id}
              href={nav.path}
              className={isActive ? "text-blue-500" : "text-red-500"}
            >
              {nav.title}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
export default Navbar;
