const HamburgerMenu = ({ hide }: { hide: boolean }) => {
  const lineClass = "mb-1 block h-1 rounded-sm bg-white";
  return (
    <>
      <span className={`${lineClass} w-7`}></span>
      <span className={`${lineClass} w-7`}></span>
      <span
        className={`float-right ${lineClass} ${
          hide ? "w-1/2 duration-500" : "w-7 duration-500"
        }`}
      ></span>
    </>
  );
};

export default HamburgerMenu;
