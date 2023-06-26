import pagesInfo from "@/lib/pagesInfo";
import Container from "./Container";
import Heading from "./Heading";
import OfferCard from "./OfferCard";

const OffersSection = () => {
  return (
    <section className="bg-[url('/images/pattern1.jpg')] bg-cover bg-fixed bg-center pb-20 pt-10  text-center">
      <Container styles="lg:w-full ">
        <Heading>Oferty</Heading>
        <ul className="grid place-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 ">
          {pagesInfo.map(
            (offer) =>
              offer.offer && (
                <li key={offer.id}>
                  <OfferCard {...offer} />
                </li>
              )
          )}
        </ul>
      </Container>
    </section>
  );
};
export default OffersSection;
