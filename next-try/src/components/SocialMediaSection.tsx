import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";

import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <section className=" border-b-2 border-white py-10">
      <Heading>Obserwuj nas na</Heading>
      <Container styles="gap-5">
        <div className="flex gap-5 text-5xl">
          <FaFacebook />
          <FaInstagramSquare />
          <FaTiktok />
        </div>
        <Image
          src="/images/skull.png"
          alt="skull"
          width={180}
          height={180}
          quality={100}
          className="md:w-[200px]"
        />
      </Container>
    </section>
  );
};
export default SocialMediaSection;
