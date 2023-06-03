import { useState } from "react";

import { Link } from "react-router-dom";

import logoNav from "../assets/logoNav.png";
import { HiMenu, HiMenuAlt3 } from "react-icons/hi";

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
  const [isAciveMenu, setIsAciveMenu] = useState(false);

  return (
    <header>
      <nav className="mx-auto w-2/3 p-3">
        <div className="flex items-center justify-between">
          <Link to="/">
            <img src={logoNav} alt="logo" className="w-2/3" />
          </Link>
          <div
            onClick={() => setIsAciveMenu((prev) => !prev)}
            className="text-3xl"
          >
            {isAciveMenu ? <HiMenuAlt3 /> : <HiMenu />}
          </div>
        </div>
        <ul className={isAciveMenu ? "menu-visable" : "menu-hide"}>
          {PagesList.map((page) => (
            <li key={page.id}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
