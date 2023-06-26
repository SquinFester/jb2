const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className="relative mx-auto mb-10 w-fit max-w-[15rem] pb-3 text-center text-4xl font-semibold uppercase after:absolute
      after:bottom-0 after:left-0 after:block after:h-1
  after:w-[110%] after:-translate-x-[5%] after:rounded-md 
  after:bg-white after:content-[''] md:max-w-none"
    >
      {children}
    </h1>
  );
};
export default Heading;
