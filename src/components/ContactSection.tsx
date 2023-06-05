import Heading from "./Heading";
import HomeInfoSections from "./HomeInfoSections";

import { BiPhoneCall } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";

import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const ContactSection = () => {
  return (
    <HomeInfoSections>
      <Heading title="Kontakt" />
      <h2 className="mb-4 text-center text-2xl">Jeremi BORACKI</h2>
      <section className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4 text-lg md:flex-row md:gap-2">
        <div className="flex w-1/2 flex-col gap-4 text-left md:gap-2">
          <a
            href="https://www.facebook.com/"
            className="flex items-center gap-2"
          >
            <FaFacebook />
            facebook.com
          </a>
          <a
            href="https://www.instagram.com/"
            className="flex items-center gap-2"
          >
            <FaInstagramSquare />
            instagram.com
          </a>
          <a href="https://www.tiktok.com/" className="flex items-center gap-2">
            <FaTiktok />
            tiktok.com
          </a>
        </div>
        <div className="flex w-1/2 flex-col gap-4 text-left md:gap-2">
          <a href="tel:505-795-006" className="flex items-center gap-2 ">
            <BiPhoneCall className="text-xl" />
            <span className="underline">505-795-006</span>
          </a>
          <h2 className="flex items-center gap-2">
            <AiFillHome className="text-xl" />
            Nowe tłoki; <br />
            64-200 Wolsztyn
          </h2>
        </div>
      </section>
    </HomeInfoSections>
  );
};

export default ContactSection;
