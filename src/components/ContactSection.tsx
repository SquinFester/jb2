import Heading from "./Heading";
import HomeInfoSections from "./HomeInfoSections";

import { BiPhoneCall } from "react-icons/bi";
import { BsFillSignpostFill } from "react-icons/bs";

const ContactSection = () => {
  return (
    <HomeInfoSections>
      <Heading title="Kontakt" />
      <section className="flex flex-col gap-6  text-lg">
        <div className="mx-auto flex flex-col gap-2 text-left">
          <h2 className="text-center text-2xl">Jeremi BORACKI</h2>
          <a href="tel:505-795-006" className="flex items-center gap-2">
            <BiPhoneCall />
            <span className="underline">505-795-006</span>
          </a>
          <h2 className="flex items-center gap-2">
            <BsFillSignpostFill />
            Nowe tłoki; 64-200 Wolsztyn
          </h2>
        </div>
      </section>
    </HomeInfoSections>
  );
};

export default ContactSection;
