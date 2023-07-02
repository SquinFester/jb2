"use client";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Modal from "@/components/Modal";
import { fetchapp } from "@/lib/getImages";
import pagesInfo from "@/lib/pagesInfo";
import { nanoid } from "nanoid";
import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export async function generateStaticParams() {
  const offers = pagesInfo.filter((o) => o.offer);

  return offers.map((offer) => ({
    offerName: offer.title.replace(" ", "-"),
  }));
}

type Params = {
  params: { offerName: string };
};
type CurrentImgType = {
  src: string;
  index: number;
};

export default function Offer({ params: { offerName } }: Params) {
  const [imgsList, setImgsList] = useState<string[]>([]);
  const [pageToken, setPageToken] = useState<string | undefined>("");
  const [currentImg, setCurrentImg] = useState<CurrentImgType>({
    src: "",
    index: 0,
  });

  const getImg = async (limit: number = 5) => {
    const res = await fetchapp(offerName, pageToken, limit);
    if (res !== undefined) {
      setImgsList((prev) => prev.concat(res.urlList));
      setPageToken(() => res.nextPage);
      return res.urlList;
    }
  };

  useEffect(() => {
    const pageHeight = window.innerHeight;
    const pageWidth = +window.innerWidth;

    let columns: number;
    if (pageWidth <= 640) {
      columns = 2;
    } else if (pageWidth <= 768) {
      columns = 3;
    } else if (pageWidth <= 1024) {
      columns = 4;
    }

    const imgPerPage = +((pageHeight / 150) * columns).toFixed(0);

    getImg(imgPerPage);
  }, []);

  const prevImg = () => {
    if (currentImg.index === 0) {
      return;
    }

    const prevImg = imgsList.filter(
      (src, index) => index === currentImg.index - 1
    );
    const prevIndex = currentImg.index - 1;

    setCurrentImg(() => ({ src: prevImg[0], index: prevIndex }));
  };

  const nextImg = async () => {
    const nextIndex = currentImg.index + 1;

    if (currentImg.index === imgsList.length - 1) {
      const nextImgUrl = await getImg(1);
      if (nextImgUrl !== undefined) {
        setCurrentImg(() => ({ src: nextImgUrl[0], index: nextIndex }));
      }
    } else {
      const nextImg = imgsList.filter(
        (src, index) => index === currentImg.index + 1
      );
      setCurrentImg(() => ({ src: nextImg[0], index: nextIndex }));
    }
  };

  return (
    <section className="pt-10">
      <Heading>{offerName.toUpperCase().replace("-", " ")}</Heading>
      <Container styles="h-screen">
        <InfiniteScroll
          dataLength={imgsList.length}
          next={getImg}
          loader={<p>Loading...</p>}
          hasMore={pageToken !== undefined}
        >
          <ul className="grid grid-cols-2 gap-x-2 gap-y-4 md:grid-cols-3 lg:grid-cols-4">
            {imgsList.map((u, i) => (
              <li
                key={nanoid()}
                onClick={() => setCurrentImg(() => ({ src: u, index: i }))}
                className="cursor-pointer"
              >
                <Image src={u} alt="" width={300} height={300} />
              </li>
            ))}
          </ul>
        </InfiniteScroll>
        {currentImg.src && (
          <Modal src={currentImg.src} prevImg={prevImg} nextImg={nextImg} />
        )}
      </Container>
    </section>
  );
}
