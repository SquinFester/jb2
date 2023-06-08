import { fetchapp } from "../data/firebase";
import Container from "../layouts/Container";

const RenowacjeFabryczne = () => {
  const urls = [];
  fetchapp().then((url) => urls.push(url));

  console.log(urls);

  return <Container title="renowacje fabryczne">re</Container>;
};

export default RenowacjeFabryczne;
