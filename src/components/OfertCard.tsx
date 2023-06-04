import { Link } from "react-router-dom";

type Ofert = {
  title: string;
  path: string;
  image: string;
};

const OfertCard = ({ title, path, image }: Ofert) => {
  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className=" grid h-[30rem] w-[18rem] items-center border-2 border-white  bg-cover bg-center "
    >
      <h1 className="w-full bg-black/50 py-2 text-3xl ">{title}</h1>
      <div className="flex h-full items-end justify-center overflow-hidden ">
        <Link
          to={path}
          className="
        w-full bg-red-500 py-1 text-xl 
      "
        >
          <p className="transition hover:translate-x-2 focus:translate-x-2 active:translate-x-2">{`SPRAWDŹ >>>`}</p>
        </Link>
      </div>
    </section>
  );
};

export default OfertCard;
