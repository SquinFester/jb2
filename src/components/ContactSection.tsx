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
      <section className="flex items-start justify-center gap-4 text-sm md:gap-8 md:text-lg">
        <div className="flex w-1/2  justify-end text-left  md:gap-2">
          <div className="flex flex-col gap-4 md:gap-2">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaFacebook />
              facebook.com
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaInstagramSquare />
              instagram.com
            </a>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <FaTiktok />
              tiktok.com
            </a>
          </div>
        </div>
        <div className="flex w-1/2 flex-col gap-4 text-left md:gap-2">
          <a href="tel:505-795-006" className="flex items-center gap-2 ">
            <BiPhoneCall className="text-xl" />
            <span className="underline">505-795-006</span>
          </a>
          <h1 className="flex items-start gap-2 leading-6 md:items-end md:leading-none ">
            <AiFillHome className="text-xl" />
            Nowe tłoki; <br className="md:hidden" />
            64-200 Wolsztyn
          </h1>
        </div>
      </section>
    </HomeInfoSections>
  );
};

export default ContactSection;
