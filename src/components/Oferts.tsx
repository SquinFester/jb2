import HomeInfoSections from "./HomeInfoSections";

import bgPattern from "../assets/pattern1.jpg";
import Heading from "./Heading";

import rf from "../assets/oferts/rem.png";
import sm from "../assets/oferts/smoto.png";
import spray from "../assets/oferts/spray.png";
import OfertCard from "./OfertCard";

const OfertsList = [
  {
    id: "o1",
    title: "RENOWACJE FABRYCZNE",
    path: "/renowacje-fabryczne",
    image: rf,
  },
  {
    id: "o2",
    title: "AEROGRAF",
    path: "/aerograf",
    image: spray,
  },
  {
    id: "o3",
    title: "ZABYTKOWE MOTORY",
    path: "/zabytkowe-motory",
    image: sm,
  },
];

const Oferts = () => {
  return (
    <HomeInfoSections bgImg={bgPattern}>
      <section className="mx-auto max-w-6xl">
        <Heading title="Oferty" />
        <ul className="flex flex-col items-center justify-around gap-10 md:flex-row md:flex-wrap md:justify-start lg:flex-row lg:flex-nowrap lg:justify-center">
          {OfertsList.map((ofert) => (
            <li key={ofert.id}>
              <OfertCard {...ofert} />
            </li>
          ))}
        </ul>
      </section>
    </HomeInfoSections>
  );
};

export default Oferts;
