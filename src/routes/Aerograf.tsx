import { useLoaderData } from "react-router-dom";
import Container from "../layouts/Container";
import ImagesList from "../components/ImagesList";

const Aerograf = () => {
  const { urls } = useLoaderData() as { urls: string[] };

  return (
    <Container title="Aerograf">
      <ImagesList urls={urls} />
    </Container>
  );
};

export default Aerograf;
