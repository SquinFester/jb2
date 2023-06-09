import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Container from "../layouts/Container";

const RenowacjeFabryczne = () => {
  const { urls } = useLoaderData();
  console.log(urls);

  return (
    <Container title="renowacje fabryczne">
      <Suspense fallback={<p>loading...</p>}>
        <Await resolve={urls}>
          {(loadedUrls) => <h1 key={loadedUrls}>{loadedUrls}</h1>}
        </Await>
      </Suspense>
    </Container>
  );
};

export default RenowacjeFabryczne;
