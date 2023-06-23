"use client";

import pagesInfo from "@/lib/pagesInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setShowMenu(() => false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="mx-auto w-2/3 lg:flex lg:items-center lg:justify-between">
        <div className=" relative z-50 flex w-full justify-between bg-primary py-4 lg:w-fit">
          <Link href="/">Logo</Link>
          <HamburgerMenu
            visable={showMenu}
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        <nav
          className={`fixed left-0 z-10 w-screen origin-top bg-primary text-xl shadow-md lg:w-fit
       lg:flex-row lg:shadow-none ${
         showMenu ? "" : "-translate-y-[150%] shadow-none"
       } duration-500 ease-out lg:static lg:translate-y-0 `}
        >
          <ul className="mx-auto flex w-2/3 flex-col gap-5 lg:flex-row ">
            {pagesInfo.map((nav) => {
              const isActive = pathname.endsWith(nav.path);
              return (
                <li key={nav.id} className="whitespace-nowrap">
                  <Link
                    href={nav.path}
                    className={`${isActive ? "text-blue-500" : "text-red-500"}`}
                    onClick={() => setShowMenu(() => false)}
                  >
                    {nav.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
