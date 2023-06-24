import Image from "next/image";
import Link from "next/link";

const OfferCard = (props: PagesInfo) => {
  return (
    <div
      className="
  relative grid h-[30rem] w-[18rem] items-center border-2 border-white uppercase
  "
    >
      <div className="absolute inset-0">
        {props.img && (
          <Image
            src={props.img}
            alt={props.title}
            loading="lazy"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        )}
      </div>
      <div className="relative w-full bg-black/50 py-2 text-3xl ">
        {props.title}
      </div>
      <div className="flex h-full items-end justify-center overflow-hidden ">
        <Link
          href={props.path}
          className="relative w-full bg-red-500 py-1 text-xl  "
        >
          <h1 className="transition hover:translate-x-2 focus:translate-x-2 active:translate-x-2 ">
            SPRAWDŹ &gt;&gt;&gt;
          </h1>
        </Link>
      </div>
    </div>
  );
};
export default OfferCard;
