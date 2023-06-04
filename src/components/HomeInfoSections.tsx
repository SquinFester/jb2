import { ReactNode } from "react";

const HomeInfoSections = ({
  children,
  bgImg,
}: {
  children: ReactNode;
  bgImg?: string;
}) => {
  const styleBg = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <section
      className="bg-cover bg-fixed bg-center px-14 py-10 text-center"
      style={styleBg}
    >
      {children}
    </section>
  );
};

export default HomeInfoSections;
