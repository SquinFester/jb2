const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-fit py-6 text-[#474747]">
      Przymencki &copy; {year}
    </footer>
  );
};

export default Footer;
