import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="hero-section bg-custom-gray md:flex md:flex-row items-center p-16 justify-around sm:flex sm:flex-col sm:gap-16">
      <div className="hero-text">
        <h3 className="uppercase lg:text-5xl md:text-3xl sm:text-2xl font-bold pb-10">
          For all your furniture needs
        </h3>
        <p className="text-justify pb-10">
          Enter our world of luxury furniture, where elegance meets comfort in
          every meticulously crafted piece. Explore our hero section to discover
          the epitome of sophistication and timeless beauty for your home.
        </p>
        <div className="btns flex gap-5">
          <button className="bg-custom-orange text-white px-5 py-3 cursor-pointer hover:bg-transparent hover:border hover:border-custom-orange hover:text-custom-orange capitalize">
            contact us
          </button>
          <button className="bg-custom-green text-white px-5 py-3 cursor-pointer hover:bg-transparent hover:border hover:border-custom-green hover:text-custom-green capitalize">
            about us
          </button>
        </div>
      </div>
      <div className="hero-image">
        <Image
          src="/edgeImages/hero-image.png"
          alt="hero image"
          height={100}
          width={1800}
        />
      </div>
    </div>
  );
};

export default HeroSection;
