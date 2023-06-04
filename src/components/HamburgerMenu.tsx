const HamburgerMenu = ({ hide }: { hide: boolean }) => {
  const lineClass = "block h-1 rounded-sm bg-white";
  return (
    <>
      <span className={`${lineClass} mb-1 w-7 `}></span>
      <span className={`${lineClass} mb-1 w-7 `}></span>
      <span
        className={`float-right ${lineClass} ${
          hide
            ? "w-1/2 duration-500 ease-in-out"
            : "w-7 duration-500 ease-in-out"
        }`}
      ></span>
    </>
  );
};

export default HamburgerMenu;
