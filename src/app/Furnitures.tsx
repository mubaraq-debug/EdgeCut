import FurnitureCard from "./components/cards/FurnitureCard";

const Furnitures = () => {
  return (
    <section className="furniture pt-16">
      <header className="flex flex-col items-center justify-center">
        <h2 className="uppercase font-extrabold text-3xl pb-3">
          our furniture
        </h2>
        <p className="text-center capitalize">
          Indulge in the ultimate comfort and style with our curated collection
          of luxurious chairs. Experience elegance redefined at our Luxury
          Furniture Shop
        </p>
      </header>

      <div className="items pt-20 flex flex-col gap-10">
        <div className="top flex md:flex-row sm:flex sm:flex-col lg:flex-row gap-10">
          <FurnitureCard
            name="BROWN CHAIR DESIGN"
            image="/edgeImages/brown-chair.png"
            price={50}
            buy="BUY NOW"
          />
          <FurnitureCard
            name="DOUBLE BED DESIGN"
            image="/edgeImages/double-bed.png"
            price={45}
            buy="BUY NOW"
          />
          <FurnitureCard
            name="HOUSE CHAIR DESIGN"
            image="/edgeImages/house-chair.png"
            price={100}
            buy="BUY NOW"
          />
        </div>
        <div className="bottom flex md:flex-row sm:flex sm:flex-col lg:flex-row gap-10">
          <FurnitureCard
            name="BROWN TABLE DESIGN"
            image="/edgeImages/brown-table1.png"
            price={50}
            buy="BUY NOW"
          />
          <FurnitureCard
            name="BLUE CHAIR DESIGN"
            image="/edgeImages/blue-chair.png"
            price={50}
            buy="BUY NOW"
          />
          <FurnitureCard
            name="BROWN MIRROR DESIGN"
            image="/edgeImages/brown-table.png"
            price={50}
            buy="BUY NOW"
          />
        </div>
      </div>
    </section>
  );
};

export default Furnitures;
