import { Suspense } from "react";
import { Await } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { overlayToggle } from "../data/overlaySlice";
import { currentImg, setList, selectImgList } from "../data/showImgSlice";

const ImagesList = ({ urls }: { urls: string[] }) => {
  const dispatch = useDispatch();
  const imgList = useSelector(selectImgList);

  const setImgList = (array: string[], index: number) => {
    dispatch(setList(array));
    setCurrentImg(index);
  };

  const setCurrentImg = (index: number) => {
    dispatch(currentImg(index));
  };

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={urls}>
        {(loadedUrls) => (
          <section className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {loadedUrls.map((loadedUrl: string, index: number) => (
              <img
                key={loadedUrl}
                src={loadedUrl}
                className="cursor-pointer"
                onClick={() => {
                  dispatch(overlayToggle());
                  imgList.length === 0
                    ? setImgList(loadedUrls, index)
                    : setCurrentImg(index);
                }}
              />
            ))}
          </section>
        )}
      </Await>
    </Suspense>
  );
};

export default ImagesList;
