import { getMakerData } from "../data/carData";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { updateFavouriteCars } from "../data/favouriteCars";

const CarCard = ({ car }) => {
  const [maker, setMaker] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchMakerData = async () => {
      const makers = await getMakerData();
      const carMaker = makers.find((m) => m.mkID === car.MkID);
      setMaker(carMaker);
    };
    fetchMakerData();

    const favorites = JSON.parse(localStorage.getItem("favouriteCars")) || [];
    setIsFavorite(favorites.includes(car.Cid));
  }, [car.MkID, car.Cid]);

  const handleFavoriteToggle = () => {
    updateFavouriteCars(car.Cid);
    setIsFavorite(!isFavorite);
  };

  return (
    <Card className="border border-gray-300 bg-white rounded-lg shadow-lg p-6 m-4 max-w-lg">
      <div className="flex flex-col md:flex-row">
        <div className="flex-grow">
          <CardHeader className="flex items-center justify-between pb-2">
            <CardTitle className="text-lg font-bold text-gray-800">
              {car.NameMMT}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xl font-semibold text-red-500 mb-2">
              {maker ? maker.Name : "Loading..."}
            </div>
            <div className="space-y-1">
              <p className="text-md font-medium text-gray-700">
                Price: {car.Prc} {car.Currency}
              </p>
              <p className="text-md font-medium text-gray-700">
                Year: {car.Yr}
              </p>
              <p className="text-md font-medium text-gray-700">
                Province: {car.Province}
              </p>
              <p className="text-md font-medium text-gray-700">
                Page Views: {car.PageViews}
              </p>
            </div>
          </CardContent>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center p-2 relative">
          <img
            src={car.Img300}
            alt="car"
            className="object-cover w-full h-48 md:h-full rounded-lg shadow-md border-2 border-gray-200"
          />
          <button
            className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
            onClick={handleFavoriteToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="2"
              fill={isFavorite ? "red" : "white"}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;