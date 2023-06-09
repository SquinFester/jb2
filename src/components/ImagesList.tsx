import { Suspense } from "react";
import { Await } from "react-router-dom";

const ImagesList = ({ urls }: { urls: string[] }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={urls}>
        {(loadedUrls) => (
          <section className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {loadedUrls.map((loadedUrl: string) => (
              <img key={loadedUrl} src={loadedUrl} />
            ))}
          </section>
        )}
      </Await>
    </Suspense>
  );
};

export default ImagesList;
