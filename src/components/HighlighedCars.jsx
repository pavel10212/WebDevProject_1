import { useEffect, useState } from "react";
import { getFavouriteCars } from "../data/favouriteCars.js";
import { getCarData } from "../data/carData.js";
import CarCard from "./CarCard";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

  return (
    <div>
      <h1 className="text-3xl font-bold text-red-500 mb-4 text-center">
        Highlighted Cars
      </h1>
      {favouriteCars.length === 0 ? (
        <div className="text-2xl text-center font-bold rounded-lg text-red-500 mt-8">
          You have no cars saved!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favouriteCars.map((car) => (
            <CarCard key={car.Cid} car={car} />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <Link to="../cars">
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Browse More Cars
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HighlightedCars;