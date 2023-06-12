import { useLoaderData } from "react-router-dom";
import Container from "../layouts/Container";
import ImagesList from "../components/ImagesList";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { swapToken } from "../data/nextPageSlice";

type aType = {
  loadedImg: string[];
  nextPageTag: string | undefined;
};

const Aerograf = () => {
  const [a, setA] = useState<aType>({
    loadedImg: [],
    nextPageTag: "",
  });

  const { urls } = useLoaderData() as { urls: string[] };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      swapToken({
        page: "aerograf",
        key: undefined,
      })
    );
    setA((prev) => ({ ...prev, loadedImg: prev.loadedImg.concat(urls) }));
  }, []);

  return (
    <Container title="Aerograf">
      <ImagesList urls={a.loadedImg} />
    </Container>
  );
};

export default Aerograf;
