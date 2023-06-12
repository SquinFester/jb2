import { useLoaderData } from "react-router-dom";
import Container from "../layouts/Container";
import ImagesList from "../components/ImagesList";

const ZabytkoweMotory = () => {
  const { urls } = useLoaderData() as { urls: string[] };

  return (
    <Container title="Zabytkowe Motory">
      <ImagesList urls={urls} />
    </Container>
  );
};

export default ZabytkoweMotory;
