import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import RenowacjeFabryczne from "./routes/RenowacjeFabryczne";
import ContactPage from "./routes/ContactPage";
import Aerograf from "./routes/Aerograf";
import ZabytkoweMotory from "./routes/ZabytkoweMotory";

import { fetchapp } from "./data/firebase";

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
        loader: async () =>
          defer({
            urls: await fetchapp("renowacje"),
          }),
      },
      {
        path: "aerograf",
        element: <Aerograf />,
        loader: async () =>
          defer({
            urls: await fetchapp("aerograf"),
          }),
      },
      {
        path: "zabytkowe-motory",
        element: <ZabytkoweMotory />,
        loader: async () =>
          defer({
            urls: await fetchapp("motory"),
          }),
      },
      {
        path: "kontakt",
        element: <ContactPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
