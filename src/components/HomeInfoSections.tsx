import { ReactNode } from "react";

const HomeInfoSections = ({
  children,
  bgImg,
  className,
}: {
  children: ReactNode;
  bgImg?: string;
  className?: string;
}) => {
  const styleBg = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <section
      className={`bg-cover bg-fixed bg-center px-14 py-10 text-center ${className}`}
      style={styleBg}
    >
      {children}
    </section>
  );
};

export default HomeInfoSections;
