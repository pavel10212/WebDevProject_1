// HighlightedCars.js
import { useEffect, useState } from "react";
import { getFavouriteCars } from "@/data/favouriteCars";
import { getCarData } from "@/data/carData";
import CarCard from "./CarCard";

const HighlightedCars = () => {
  const [favouriteCars, setFavouriteCars] = useState([]);

  useEffect(() => {
    const fetchFavouriteCars = async () => {
      const favouriteCarIds = getFavouriteCars();
      const allCars = await getCarData();
      const favouriteCarDetails = allCars.filter((car) =>
        favouriteCarIds.includes(car.Cid)
      );
      setFavouriteCars(favouriteCarDetails);
    };

    fetchFavouriteCars();
  }, [favouriteCars]);

  if (favouriteCars.length === 0) {
    return (
      <div
        className="
    text-2xl
    text-center
    font-bold
    rounded-lg
    text-red-500
    mt-8
    "
      >
        You have no cars saved!
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {favouriteCars.map((car) => (
        <CarCard key={car.Cid} car={car} />
      ))}
    </div>
  );
};

export default HighlightedCars;
