import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainNavigation from "../layouts/MainNavigation";
import Footer from "../layouts/Footer";
import { setDefault } from "../data/showImgSlice";
import { switchOff } from "../data/overlaySlice";

const Root = () => {
  // clear and switch off img slider
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(setDefault());
    dispatch(switchOff());
  }, [location]);

  return (
    <>
      <MainNavigation />
      <main className="main-height">{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Root;
