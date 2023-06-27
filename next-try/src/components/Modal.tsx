import Image from "next/image";

const Modal = ({
  src,
  prevImg,
  nextImg,
}: {
  src: string;
  prevImg: () => void;
  nextImg: () => void;
}) => {
  return (
    <>
      <button onClick={() => prevImg()}>prev</button>
      <button onClick={() => nextImg()}>next</button>
      <Image src={src} alt="" width={300} height={300} />
    </>
  );
};
export default Modal;
