import HomeInfoSections from "./HomeInfoSections";

import bgPattern from "../assets/pattern1.jpg";
import Heading from "../layouts/Heading";

import OfferCard from "./OfferCard";

import { pageList } from "../data/pagesList";

// flex flex-col items-center justify-around gap-10 md:flex-row md:flex-wrap md:justify-start lg:flex-row lg:flex-nowrap lg:justify-center"

const offers = () => {
  return (
    <HomeInfoSections bgImg={bgPattern}>
      <section className="mx-auto md:max-w-2xl lg:max-w-6xl">
        <Heading title="offery" />
        <ul className="grid items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
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
