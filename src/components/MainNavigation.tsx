import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import logoNav from "../assets/logoNav.png";
import HamburgerMenu from "./HamburgerMenu";

const PagesList = [
  {
    id: "p2",
    path: "/renowacje-fabryczne",
    name: "RENOWACJE FABRYCZNE",
  },
  {
    id: "p3",
    path: "/aerograf",
    name: "AEROGRAF",
  },
  {
    id: "p4",
    path: "/zabytkowe-motory",
    name: "ZABYTKOWE MOTORY",
  },
  {
    id: "p5",
    path: "/kontakt",
    name: "KOTNAKT",
  },
];

const MainNavigation = () => {
  const [isAciveMenu, setIsAciveMenu] = useState<boolean>(false);
  const [isAnimationStart, setIsAnimationStart] = useState<boolean>(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-primary lg:flex lg:items-center lg:justify-around lg:shadow-md ${
        isAciveMenu ? "" : "shadow-md"
      }`}
    >
      <nav className="relative z-50 flex w-full items-center justify-between bg-primary px-14 py-3 lg:mx-0 lg:w-fit">
        <Link to="/">
          <img src={logoNav} alt="logo" className="w-2/3" />
        </Link>
        <menu
          onClick={() =>
            setIsAciveMenu((prev) => {
              setIsAnimationStart(() => true);
              return !prev;
            })
          }
          className="cursor-pointer text-3xl lg:hidden"
        >
          <HamburgerMenu hide={isAciveMenu} />
        </menu>
      </nav>
      <nav>
        <ul
          className={`fixed z-10 w-screen origin-top bg-primary px-14 text-xl shadow-md lg:static lg:flex lg:w-fit lg:translate-y-0 lg:justify-between lg:gap-7 lg:px-0 lg:text-base lg:shadow-none ${
            isAciveMenu
              ? "animate-open-menu"
              : `-translate-y-[150%] ${
                  isAnimationStart ? "animate-close-menu" : ""
                }`
          } `}
        >
          {PagesList.map((page) => (
            <li
              key={page.id}
              className="my-4 border-b pb-1 [word-spacing:0.3rem] lg:my-0 lg:border-b-0 lg:px-1 lg:py-2 lg:hover:bg-[#474747]"
            >
              <NavLink
                to={page.path}
                className={({ isActive }) => (isActive ? "text-red-500" : "")}
              >
                {page.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
