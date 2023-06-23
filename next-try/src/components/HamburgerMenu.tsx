const HamburgerMenu = ({
  visable,
  onClick,
}: {
  visable: boolean;
  onClick: () => void;
}) => {
  return (
    <button onClick={onClick} className="lg:hidden">
      Menu
    </button>
  );
};
export default HamburgerMenu;
