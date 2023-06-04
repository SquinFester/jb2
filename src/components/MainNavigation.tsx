import { useState } from "react";

import { Link } from "react-router-dom";

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
      className={` lg:flex lg:items-center lg:justify-around lg:shadow-md ${
        isAciveMenu ? "" : "shadow-md"
      }`}
    >
      <nav className="relative z-50 flex items-center justify-between bg-primary px-14 py-3 lg:mx-0 lg:w-fit">
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
          className={`fixed  w-screen origin-top bg-primary px-14 text-xl shadow-md lg:static lg:flex lg:w-fit lg:translate-y-0 lg:justify-between lg:gap-7 lg:px-0 lg:text-base lg:shadow-none ${
            isAciveMenu
              ? "z-10 animate-open-menu"
              : `-translate-y-[150%] ${
                  isAnimationStart ? "animate-close-menu" : ""
                }`
          } `}
        >
          {PagesList.map((page) => (
            <li
              key={page.id}
              className="my-4 border-b pb-1 lg:my-0 lg:border-b-0 lg:px-1 lg:py-2 lg:hover:bg-[#474747]"
            >
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
