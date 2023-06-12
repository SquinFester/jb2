import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, defer } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";

import { fetchapp } from "./data/firebase";

const HomePage = lazy(() => import("./routes/HomePage"));
const RenowacjeFabryczne = lazy(() => import("./routes/RenowacjeFabryczne"));
const ContactPage = lazy(() => import("./routes/ContactPage"));
const Aerograf = lazy(() => import("./routes/Aerograf"));
const ZabytkoweMotory = lazy(() => import("./routes/ZabytkoweMotory"));
const Overlay = lazy(() => import("./layouts/Overlay"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "renowacje-fabryczne",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <RenowacjeFabryczne />
          </Suspense>
        ),
        loader: async () =>
          defer({
            urls: await fetchapp("renowacje"),
          }),
      },
      {
        path: "aerograf",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Aerograf />
          </Suspense>
        ),
        loader: async () =>
          defer({
            urls: await fetchapp("aerograf"),
          }),
      },
      {
        path: "zabytkowe-motory",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ZabytkoweMotory />
          </Suspense>
        ),
        loader: async () =>
          defer({
            urls: await fetchapp("motory"),
          }),
      },
      {
        path: "kontakt",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Suspense fallback={<p>Loading...</p>}>
        <Overlay />
      </Suspense>
    </>
  );
}

export default App;
