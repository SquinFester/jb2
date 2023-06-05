import { ReactNode } from "react";

const Container = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <section className="py-5">
      <h1 className="text-center text-4xl font-semibold uppercase">{title}</h1>
      {children}
    </section>
  );
};

export default Container;
