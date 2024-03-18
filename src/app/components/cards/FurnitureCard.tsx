import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FurnitureCardProps {
  name: string;
  image: string;
  price: number;
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
        {/* this is a temporal fix for the FurnitureCard Image width issues-----provide a more efficient solution later on */}
        <img
          src={image}
          alt="image"
          style={{ width: "450px", height: "300px" }}
        />
        <p className="pt-5 uppercase sm:text-base lg:text-2xl">{name}</p>

        <div className="btm flex items-center justify-between pt-5">
          <p>
            <span className="text-custom-green">$</span>
            {price}<span>.00</span>
          </p>
          <p>
            <Link href="/" className="text-custom-green uppercase">
              {buy}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
