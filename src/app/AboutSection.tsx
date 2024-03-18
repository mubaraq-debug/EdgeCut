import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="about-section bg-custom-gray md:flex md:flex-row items-center mt-24 p-16 justify-around sm:flex sm:flex-col-reverse sm:gap-16">
      <div className="hero-image">
        <Image
          src="/edgeImages/about-image.png"
          alt="hero image"
          height={100}
          width={2000}
        />
      </div>

      <div className="about-text">
        <h3 className="uppercase lg:text-3xl md:text-3xl sm:text-xl font-bold pb-10">
          About us
        </h3>
        <p className="text-justify pb-10">
        Discover EdgeCut, your premier destination for luxury furniture. Immerse yourself in our curated collection, where craftsmanship meets elegance in every detail. Let our knowledgeable team guide you to find pieces that reflect your unique style and elevate your living spaces to new heights of sophistication.
        </p>
        <div className="btns flex gap-5">
          <button className="bg-custom-green text-white px-5 py-3 cursor-pointer hover:bg-transparent hover:border hover:border-custom-green hover:text-custom-green capitalize">
            read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
