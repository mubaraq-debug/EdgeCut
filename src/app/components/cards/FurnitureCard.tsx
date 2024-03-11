import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FurnitureCardProps {
  name: string;
  image: string;
  price?: number;
  buy: string;
}

const FurnitureCard: React.FC<FurnitureCardProps> = ({
  name,
  image,
  price,
  buy,
}) => {
  return (
    <div className="card p-10 bg-custom-gray w-fit">
      <div>
        <Image src={image} alt="image" width={300} height={300} />
        <p className="pt-5 uppercase sm:text-base lg:text-2xl">{name}</p>

        <div className="btm flex items-center justify-between pt-7">
          <p><span className="text-custom-green">$</span>{price}</p>
          <p>
            <Link href='/' className="text-custom-green uppercase">{buy}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
