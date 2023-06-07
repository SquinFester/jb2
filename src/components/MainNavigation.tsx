import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import logoNav2 from "../assets/logoNav2.png";

import HamburgerMenu from "../UI/HamburgerMenu";

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

  const hideHandler = () => {
    setIsAciveMenu(() => false);
  };

  return (
    <header
      className={
        "sticky top-0 z-50  w-full bg-primary shadow-md lg:flex lg:items-center lg:justify-around"
      }
    >
      <nav className="relative z-50 flex w-full items-center justify-between bg-primary px-14 py-5 lg:mx-0 lg:w-fit">
        <Link to="/" onClick={hideHandler}>
          <img src={logoNav2} alt="logo" className="w-full" />
        </Link>
        <menu
          onClick={() =>
            setIsAciveMenu((prev) => {
              !isAnimationStart && setIsAnimationStart(() => true);
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
          className={`fixed z-10 w-screen bg-primary px-14 text-xl shadow-md duration-500 ease-out 
          
          lg:static lg:flex lg:w-fit lg:translate-y-0 lg:justify-between lg:gap-7 lg:px-0 lg:text-base lg:shadow-none lg:duration-0 ${
            isAciveMenu ? "" : "-translate-y-[150%] "
          } `}
        >
          {PagesList.map((page) => (
            <NavLink
              to={page.path}
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
              key={page.id}
              onClick={hideHandler}
            >
              <li className="my-4 border-b pb-1 [word-spacing:0.3rem] lg:my-0 lg:border-b-0 lg:px-1 lg:py-2 lg:hover:bg-[#474747]">
                {page.name}
              </li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
