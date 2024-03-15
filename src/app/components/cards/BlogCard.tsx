import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  bgImage: string;
  header: string;
  text: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ bgImage, header, text }) => {
  return (
    <div className="shadow-2xl w-fit pb-5">
      <div className="border border-b-2 border-t-0 border-r-0 border-l-0">
        <img
          src={bgImage}
          alt="image"
          style={{ width: "100%", height: "200px" }}
        />
      </div>
      <div className="detail p-5">
        <h3 className="font-extrabold text-xl capitalize pb-2">{header}</h3>
        <p>{text}</p>
      </div>

      <div className="btn border px-5 py-3 bg-custom-green text-white w-fit ml-5 hover:border-custom-green hover:text-custom-green hover:bg-transparent">
        <Link href="/">Read More</Link>
      </div>
    </div>
  );
};

export default BlogCard;
