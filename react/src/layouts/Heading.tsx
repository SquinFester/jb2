const Heading = ({ title }: { title: string }) => {
  return (
    <h1
      className="relative mx-auto mb-10 w-fit pb-3 text-4xl font-semibold uppercase after:absolute after:bottom-0 after:left-0 after:block
      after:h-1 after:w-[110%] after:-translate-x-[5%] 
      after:rounded-md after:bg-white after:content-[''] "
    >
      {title}
    </h1>
  );
};

export default Heading;
