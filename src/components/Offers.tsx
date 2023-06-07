import HomeInfoSections from "./HomeInfoSections";

import bgPattern from "../assets/pattern1.jpg";
import Heading from "./Heading";

import rf from "../assets/offers/rem.png";
import sm from "../assets/offers/smoto.png";
import spray from "../assets/offers/spray.png";
import OfferCard from "./OfferCard";

const OffersList = [
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

const offers = () => {
  return (
    <HomeInfoSections bgImg={bgPattern}>
      <section className="mx-auto max-w-6xl">
        <Heading title="offery" />
        <ul className="flex flex-col items-center justify-around gap-10 md:flex-row md:flex-wrap md:justify-start lg:flex-row lg:flex-nowrap lg:justify-center">
          {OffersList.map((offer) => (
            <li key={offer.id}>
              <OfferCard {...offer} />
            </li>
          ))}
        </ul>
      </section>
    </HomeInfoSections>
  );
};

export default offers;
