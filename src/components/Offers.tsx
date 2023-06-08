import HomeInfoSections from "./HomeInfoSections";

import bgPattern from "../assets/pattern1.jpg";
import Heading from "../layouts/Heading";

import OfferCard from "./OfferCard";

import { pageList } from "../data/pagesList";

const offers = () => {
  return (
    <HomeInfoSections bgImg={bgPattern}>
      <section className="mx-auto max-w-6xl">
        <Heading title="offery" />
        <ul className="flex flex-col items-center justify-around gap-10 md:flex-row md:flex-wrap md:justify-start lg:flex-row lg:flex-nowrap lg:justify-center">
          {pageList.map(
            (offer) =>
              offer.offer && (
                <li key={offer.id}>
                  <OfferCard {...offer} />
                </li>
              )
          )}
        </ul>
      </section>
    </HomeInfoSections>
  );
};

export default offers;
