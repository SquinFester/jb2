import { useState } from "react";

import { Link, NavLink } from "react-router-dom";

import logoNav2 from "../assets/logoNav2.png";

import HamburgerMenu from "../layouts/HamburgerMenu";

import { pageList } from "../data/pagesList";

const MainNavigation = () => {
  const [isAciveMenu, setIsAciveMenu] = useState<boolean>(false);

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
          className={`fixed z-10 w-screen origin-top bg-primary px-14 text-xl shadow-md duration-500 ease-out 
          
          lg:static lg:flex lg:w-fit lg:translate-y-0 lg:justify-between lg:gap-7 lg:px-0 lg:text-base lg:shadow-none 
          lg:duration-0
          ${isAciveMenu ? "" : "-translate-y-[150%]"} `}
        >
          {pageList.map((page) => (
            <NavLink
              to={page.path}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500"
                  : "focus:text-neutral-400 active:text-neutral-400"
              }
              key={page.id}
              onClick={hideHandler}
            >
              <li
                className="my-4 border-b pb-1 [word-spacing:0.3rem] 
              focus:bg-neutral-400 active:bg-neutral-400 lg:my-0 lg:border-b-0 lg:px-1
              lg:py-2 lg:hover:bg-[#474747]
              "
              >
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
