import { createPortal } from "react-dom";
import { selectOverlay, overlayToggle } from "../data/overlaySlice";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentImg,
  selectIndex,
  currentImg,
  selectImgList,
} from "../data/showImgSlice";

const portalElement = document.getElementById("overlays") as Element;

const Modal = () => {
  const dispatch = useDispatch();

  const isOverlayActive = useSelector(selectOverlay);
  const imgSrc = useSelector(selectCurrentImg);
  const currentIndex = useSelector(selectIndex);
  const imgList = useSelector(selectImgList);

  const nextImg = () => {
    if (currentIndex === imgList.length - 1) {
      return;
    }
    dispatch(currentImg(currentIndex + 1));
  };

  const prevtImg = () => {
    if (currentIndex === 0) {
      return;
    }
    dispatch(currentImg(currentIndex - 1));
  };

  return (
    <>
      {isOverlayActive &&
        createPortal(
          <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <img src={imgSrc} />
            <button onClick={() => prevtImg()} disabled={currentIndex === 0}>
              prev
            </button>
            <button
              onClick={() => nextImg()}
              disabled={currentIndex === imgList.length - 1}
            >
              next
            </button>
          </div>,
          portalElement
        )}
      {isOverlayActive &&
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

export default Modal;
