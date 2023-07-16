import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Modal = ({
  src,
  prevImg,
  nextImg,
  closeModal,
  nextPageController,
  index,
}: {
  src: string;
  prevImg: () => void;
  nextImg: () => void;
  closeModal: () => void;
  nextPageController: boolean;
  index: number;
}) => {
  return (
    <div className="fixed flex h-screen w-full items-center justify-center  ">
      <div
        className="fixed left-0 top-0 h-screen w-full bg-black/50"
        onClick={() => closeModal()}
      ></div>
      <div className="fixed top-[20%] z-20 flex flex-col">
        <button
          onClick={() => closeModal()}
          className="absolute -right-2 -top-2 z-40"
        >
          <ImCancelCircle className="text-white" size={20} />
        </button>
        <Image src={src} alt="" width={300} height={300} />
        <div className="flex w-full justify-around">
          {index !== 0 && (
            <button onClick={() => prevImg()}>
              <BsArrowLeft
                size={30}
                className="hover:text-neutral-400 focus:text-neutral-400 active:text-neutral-400"
              />
            </button>
          )}
          {!nextPageController && (
            <button onClick={() => nextImg()}>
              <BsArrowRight
                size={30}
                className="hover:text-neutral-400 focus:text-neutral-400 active:text-neutral-400"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Modal;
