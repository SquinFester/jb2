import { fetchapp } from "../data/firebase";
import Container from "../layouts/Container";

const RenowacjeFabryczne = () => {
  const a = [];

  const urls = fetchapp().then((url) => a.push(url));

  return <Container title="renowacje fabryczne">re</Container>;
};

export default RenowacjeFabryczne;
