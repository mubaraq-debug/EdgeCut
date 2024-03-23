import React from "react";
import BlogCard from "./components/cards/BlogCard";

export default function Blogs() {
  return (
    <div className="main flex flex-col gap-10 items-center mt-20">
        <h3 className="text-3xl font-bold uppercase">latest blog</h3>
      <div className="sm:flex sm:flex-col sm:gap-10 md:flex md:flex-row md:gap-10 ">
        <BlogCard
          bgImage="/edgeImages/blog-one.png"
          header="Timeless Elegance: Unveiling the Artistry Behind Our Luxury Furniture Collection"
          text="Dive into the world of exquisite craftsmanship and timeless design as we unveil the secrets behind our luxurious furniture pieces"
        />
        <BlogCard
          bgImage="/edgeImages/blog-two.png"
          header="Luxury Living: Elevate Your Home with Our Exclusive Sofa Collection"
          text="Discover unparalleled comfort and sophistication with our handcrafted sofa collection, designed to transform your living space into a haven of luxury"
        />
        <BlogCard
          bgImage="/edgeImages/blog-three.png"
          header="The Dining Experience Redefined: Explore Our Opulent Dining Table Collection"
          text="Elevate every meal into a gourmet experience with our meticulously crafted dining tables, where style meets functionality in perfect harmony"
        />
      </div>
    </div>
  );
}
