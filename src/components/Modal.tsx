import { createPortal } from "react-dom";
import { selectOverlay } from "../data/overlaySlice";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentImg,
  selectIndex,
  currentImg,
} from "../data/showImgSlice";

const portalElement = document.getElementById("overlays") as Element;

const Modal = () => {
  const dispatch = useDispatch();

  const isOverlayActive = useSelector(selectOverlay);
  const imgSrc = useSelector(selectCurrentImg);
  const currentIndex = useSelector(selectIndex);
  console.log(currentIndex);

  return (
    <>
      {isOverlayActive &&
        createPortal(
          <div className="fixed top-0 h-full w-full bg-black/50">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <img src={imgSrc} />
              <button onClick={() => dispatch(currentImg(currentIndex - 1))}>
                prev
              </button>
              <button onClick={() => dispatch(currentImg(currentIndex + 1))}>
                next
              </button>
            </div>
          </div>,
          portalElement
        )}
    </>
  );
};

export default Modal;
