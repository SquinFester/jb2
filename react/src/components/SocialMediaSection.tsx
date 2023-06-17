import Heading from "../layouts/Heading";
import HomeInfoSections from "./HomeInfoSections";

import skullLogo from "../assets/skull.png";

import { FaFacebook, FaInstagramSquare, FaTiktok } from "react-icons/fa";

const SocialMediaSection = () => {
  return (
    <HomeInfoSections className="flex flex-col items-center border-b-2 border-white">
      <Heading title="Obserwuj nas na" />
      <div className="flex w-full items-center justify-center gap-5 text-5xl">
        <a href="https://www.facebook.com/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagramSquare />
        </a>
        <a href="https://www.tiktok.com/">
          <FaTiktok />
        </a>
      </div>
      <img src={skullLogo} alt="logo czaszki" />
    </HomeInfoSections>
  );
};

export default SocialMediaSection;
