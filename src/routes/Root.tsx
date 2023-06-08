import { Outlet } from "react-router-dom";

import MainNavigation from "../layouts/MainNavigation";
import Footer from "../layouts/Footer";

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
