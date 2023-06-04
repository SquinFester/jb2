import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

type Error = {
  statusText: string;
  message: string;
};

const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <>
      <MainNavigation />
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </>
  );
};

export default ErrorPage;