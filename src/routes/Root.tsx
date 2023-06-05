import { Outlet } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main className="main-height">{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Root;
