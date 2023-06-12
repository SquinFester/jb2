import { useLoaderData } from "react-router-dom";
import Container from "../layouts/Container";
import ImagesList from "../components/ImagesList";

const RenowacjeFabryczne = () => {
  const { urls } = useLoaderData() as { urls: string[] };

  return (
    <Container title="renowacje fabryczne">
      <ImagesList urls={urls} />
    </Container>
  );
};

export default RenowacjeFabryczne;
