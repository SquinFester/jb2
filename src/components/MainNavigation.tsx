import { useState } from "react";

import { Link } from "react-router-dom";

import logoNav from "../assets/logoNav.png";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";
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

  return (
    <header className={isAciveMenu ? "" : "shadow-md"}>
      <nav className="mx-auto flex w-2/3 items-center justify-between p-3">
        <Link to="/">
          <img src={logoNav} alt="logo" className="w-2/3" />
        </Link>
        <div
          onClick={() => setIsAciveMenu((prev) => !prev)}
          className="cursor-pointer text-3xl"
        >
          <HamburgerMenu hide={isAciveMenu} />
        </div>
      </nav>
      <nav>
        <ul
          className={`fixed z-50 w-screen origin-top bg-primary px-14 text-xl shadow-md ${
            isAciveMenu
              ? "translate-y-0 animate-open-menu"
              : " -translate-y-[150%] animate-close-menu"
          } `}
        >
          {PagesList.map((page) => (
            <li key={page.id} className="my-4">
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
