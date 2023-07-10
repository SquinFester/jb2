"use client";

import pagesInfo from "@/lib/pagesInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./HamburgerMenu";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState<boolean>(true);
  const [startAnimations, setStartAnimations] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(() => false);
  }, [pathname]);

  const isActiveHandler = (path: string) => {
    return pathname.endsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md lg:flex lg:items-center lg:justify-around">
      <div className=" relative z-50 flex w-full justify-between bg-primary px-20 py-6 lg:w-fit lg:px-0">
        <Link href="/">
          <Image
            src={"/images/logoNav.png"}
            alt="logo"
            width={130}
            height={100}
          />
        </Link>
        <HamburgerMenu
          visable={isActive}
          onClick={() => {
            setIsActive((prev) => !prev);
            setStartAnimations(() => true);
          }}
          start={startAnimations}
        />
      </div>

      <nav
        className={` fixed left-0 z-10 w-screen origin-top bg-primary text-xl shadow-md duration-500
       ease-out lg:static  lg:w-fit lg:translate-y-0 lg:flex-row lg:text-base lg:shadow-none lg:duration-0
       ${isActive && startAnimations ? "" : " -translate-y-[150%] shadow-none"}
       `}
      >
        <ul className="mx-auto flex w-2/3 flex-col gap-5 py-4 lg:m-0 lg:flex-row lg:gap-10">
          <li
            className="mb-2 whitespace-nowrap border-b-2 border-white  pb-1 uppercase [word-spacing:0.3rem] lg:m-0 lg:hidden lg:border-none lg:pb-0"
            key={"pg1"}
          >
            <Link
              href={"/"}
              className={`${isActiveHandler("/") ? "text-red-500" : ""} `}
              onClick={() => {
                setIsActive(() => false);
                setStartAnimations(() => false);
              }}
            >
              STRONA GŁÓWNA
            </Link>
          </li>

          {pagesInfo.map((nav) => {
            return (
              <li
                key={nav.id}
                className="mb-2 whitespace-nowrap border-b-2 border-white  pb-1 uppercase [word-spacing:0.3rem] lg:m-0 lg:border-none lg:pb-0 "
              >
                <Link
                  href={nav.path}
                  className={`${
                    isActiveHandler(nav.path) ? "text-red-500" : ""
                  }`}
                  onClick={() => {
                    setIsActive(() => false);
                    setStartAnimations(() => false);
                  }}
                >
                  {nav.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
