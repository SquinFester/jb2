import Container from "./Container";
import Heading from "./Heading";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-10">
      <Heading>Kontakt</Heading>
      <Container>
        <h1 className="mb-4 text-2xl">Jeremi BORACKI</h1>
        <section className="flex w-full items-start justify-center gap-4 text-base md:gap-8 md:text-lg">
          <div className="flex w-1/2 justify-end text-left  md:gap-2">
            <div className="flex flex-col gap-4 md:gap-2">
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
              <a
                href="https://www.tiktok.com/"
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
            <a
              href="mailto:squinfester@gmail.com"
              className=" flex items-center gap-2"
            >
              <IoIosMail className="text-xl" />
              jeremiboracki@gmail.com
            </a>
            <h1 className="flex items-start gap-2 leading-6 md:items-end md:leading-none ">
              <AiFillHome className="text-xl" />
              Nowe tłoki; <br className="md:hidden" />
              64-200 Wolsztyn
            </h1>
          </div>
        </section>
      </Container>
    </section>
  );
};
export default ContactSection;
