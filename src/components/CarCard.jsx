import { getMakerData } from "@/data/carData";

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
    <Card
      className="
      border
      border-gray-500
      bg-slate-100
      rounded-lg
      shadow-md
      p-4
      flex 
      m-5
      max-w-lg
    "
    >
      <div className="flex flex-row">
        <div className="flex-grow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle
              className="
            text-sm 
            font-bold 
            leading-none
            tracking-tight                          
            "
            >
              {car.NameMMT}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">
              {maker ? maker.Name : "Loading..."}
            </div>
            <div className="mt-2">
              <p
                className="
                text-md
                font-semibold
                text-slate-700
              "
              >
                Price: {car.Prc} {car.Currency}
              </p>
              <p
                className="
              text-md
              font-semibold
              text-slate-700
              "
              >
                Year: {car.Yr}
              </p>
              <p
                className="
              text-md
              font-semibold
              text-slate-700
              "
              >
                Province: {car.Province}
              </p>
              <p className=" text-md font-semibold text-slate-700">
                Page Views: {car.PageViews}
              </p>
            </div>
          </CardContent>
        </div>
        <div className="w-1/3 flex items-center justify-center p-2 relative">
          <img
            src={car.Img300}
            alt="car"
            className="
              object-cover
              w-full
              h-full
              rounded-lg
              shadow-xl
              border-2 border-gray-100 
            "
          />
          <button
            className="absolute top-3 right-2"
            onClick={handleFavoriteToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                isFavorite ? "text-red-500 fill-current" : "text-gray-500"
              }`}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </Card>
  );
};

export default CarCard;
