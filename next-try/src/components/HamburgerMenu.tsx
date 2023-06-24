const HamburgerMenu = ({
  visable,
  start,
  onClick,
}: {
  visable: boolean;
  start: boolean;
  onClick: () => void;
}) => {
  const lineClass =
    "block h-1 rounded-sm bg-white duration-500 ease mb-1 last:mb-0";
  return (
    <button onClick={onClick} className="lg:hidden">
      <span className={`${lineClass}  w-7 `}></span>
      <span className={`${lineClass} w-7 `}></span>
      <span
        className={`float-right ${lineClass} ${
          visable && start ? "w-1/2 " : "w-7 "
        }`}
      ></span>
    </button>
  );
};
export default HamburgerMenu;
