import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import RenowacjeFabryczne from "./routes/RenowacjeFabryczne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "renowacje-fabryczne",
        element: <RenowacjeFabryczne />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
