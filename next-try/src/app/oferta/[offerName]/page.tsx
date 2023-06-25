import Container from "@/components/Container";
import Heading from "@/components/Heading";
import pagesInfo from "@/lib/pagesInfo";

export async function generateStaticParams() {
  const offers = pagesInfo.filter((o) => o.offer);

  return offers.map((offer) => ({
    offerName: offer.title.replace(" ", "-"),
  }));
}

type Params = {
  params: { offerName: string };
};

export default function Offer({ params: { offerName } }: Params) {
  return (
    <article className="pt-10">
      <Heading>{offerName.toUpperCase().replace("-", " ")}</Heading>
      <Container>
        <p>ad</p>
      </Container>
    </article>
  );
}
