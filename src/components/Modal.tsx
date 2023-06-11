import { overlayToggle } from "../data/overlaySlice";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCurrentImg,
  selectIndex,
  currentImg,
  selectImgList,
} from "../data/showImgSlice";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { HiOutlineX } from "react-icons/hi";

const Modal = () => {
  const dispatch = useDispatch();

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
      <HiOutlineX
        onClick={() => dispatch(overlayToggle())}
        className="absolute right-1 top-[12.5%] z-50 -translate-y-[12.5%] cursor-pointer text-2xl hover:text-neutral-400 focus:text-neutral-400 active:text-neutral-400 md:right-2 lg:right-3"
      />
      <div className="absolute top-1/2 z-30 flex w-screen -translate-y-1/2 justify-between">
        <div className="flex items-center px-2 md:px-4 lg:px-6">
          <button onClick={() => prevtImg()} disabled={currentIndex === 0}>
            <BsFillArrowLeftCircleFill className="text-3xl transition hover:text-neutral-400 focus:text-neutral-400 active:text-neutral-400" />
          </button>
        </div>
        <div>
          <img src={imgSrc} />
        </div>
        <div className="flex items-center px-2 md:px-4 lg:px-6">
          <button
            onClick={() => nextImg()}
            disabled={currentIndex === imgList.length - 1}
          >
            <BsFillArrowRightCircleFill className="text-3xl transition hover:text-neutral-400 focus:text-neutral-400 active:text-neutral-400" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
