import { createPortal } from "react-dom";
import { selectOverlay, overlayToggle } from "../data/overlaySlice";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../components/Modal";
import { selectCurrentImg } from "../data/showImgSlice";

const portalElement = document.getElementById("overlay") as Element;

const Overlay = () => {
  const imgIsReady = useSelector(selectCurrentImg);

  console.log(imgIsReady);

  const dispatch = useDispatch();

  const isOverlayActive = useSelector(selectOverlay);

  if (isOverlayActive) {
    document.querySelector("body")?.classList.add("overflow-hidden");
  } else {
    document.querySelector("body")?.classList.remove("overflow-hidden");
  }

  return (
    <>
      {isOverlayActive && imgIsReady && createPortal(<Modal />, portalElement)}
      {isOverlayActive &&
        imgIsReady &&
        createPortal(
          <div
            className="fixed top-0 h-full w-full bg-black/50"
            onClick={() => dispatch(overlayToggle())}
          ></div>,
          portalElement
        )}
    </>
  );
};

export default Overlay;
