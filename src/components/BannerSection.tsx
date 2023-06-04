import banner from "../assets/banner-bg.png";
import logo from "../assets/logo.png";

const BannerSection = () => {
  return (
    <section
      className=" grid h-[94vh] w-full place-content-center place-items-center gap-10  bg-cover bg-fixed bg-center bg-no-repeat brightness-90"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <img src={logo} alt="logo" className="max-w-xs" />
      <h1
        className="relative w-3/4 py-4 text-center text-[1.3rem] font-semibold
    tracking-wide 

    before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-sm before:bg-white before:content-[''] 
    after:absolute
    
    after:left-0 after:top-0 after:h-1 after:w-full after:rounded-sm after:bg-white after:content-[''] lg:w-full 
    lg:max-w-md
    
    lg:before:w-[110%] lg:before:translate-x-[-5%] lg:after:w-[110%] lg:after:translate-x-[-5%]
    
    
    "
      >
        ARTYSTYCZNE MALOWANIE AEROGRAFEM
      </h1>
    </section>
  );
};

export default BannerSection;
