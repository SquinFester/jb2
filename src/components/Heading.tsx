const Heading = ({ title }: { title: string }) => {
  return (
    <h1
      className="relative mx-auto mb-5 max-w-sm pb-3 text-4xl font-semibold uppercase after:absolute after:bottom-0 after:left-0 after:block
      after:h-1 after:w-1/2 after:translate-x-1/2 
      after:rounded-md after:bg-white after:content-[''] "
    >
      {title}
    </h1>
  );
};

export default Heading;
