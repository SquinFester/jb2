import banner from "../assets/banner-bg.png";
import logo from "../assets/logo.png";

const HomePage = () => {
  return (
    <section
      className=" grid h-[80vh] w-full place-items-center bg-cover bg-center bg-no-repeat brightness-90 "
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex max-w-xs flex-col items-center gap-10 text-center lg:max-w-md ">
        <img src={logo} alt="logo" className="max-w-xs" />
        <h1
          className="relative py-4 text-[1.3rem] font-semibold
        tracking-wide
        
        before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-sm before:bg-white before:content-['']
        
        after:absolute after:left-0 after:top-0 after:h-1 after:w-full after:rounded-sm after:bg-white after:content-['']
        
        
        "
        >
          ARTYSTYCZNE MALOWANIE AEROGRAFEM
        </h1>
      </div>
    </section>
  );
};

export default HomePage;
