import { useState, useEffect } from "react";
import {
  getCarCount,
  getMakerCount,
  getCarMakerIndividualCount,
  getCarPriceAverage,
  getAverageOfEachMaker,
  getMostExpensiveCar,
  getCheapestCar,
  getMostCommonMaker,
  averageViewsPerCar,
  averageViewPerMaker,
  averageAgeOfCar,
  correlationBetweenPriceAndPageViews,
  MostPopularCars,
} from "../data/carData";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Car, Factory } from "lucide-react";
import CarMakerChart from "./CarMakerChart";
import StatCard from "./StatCard";
import CarMakerAveragePriceChart from "./CarMakerAveragePriceChart";
import ModelPerMaker from "./StackedBarChart";

const Statistics = () => {
  const [mostExpensiveCar, setMostExpensiveCar] = useState({});
  const [cheapestCar, setCheapestCar] = useState({});
  const [mostCommonMaker, setMostCommonMaker] = useState("");
  const [averageViewsPerCarValue, setAverageViewsPerCarValue] = useState(0);
  const [averageViewPerMakerValue, setAverageViewPerMakerValue] = useState(0);
  const [averageAgeOfCarValue, setAverageAgeOfCarValue] = useState(0);
  const [
    correlationBetweenPriceAndPageViewsValue,
    setCorrelationBetweenPriceAndPageViewsValue,
  ] = useState(0);
  const [mostPopularCars, setMostPopularCars] = useState([]);
  const [averageOfEachMaker, setAverageOfEachMaker] = useState({});
  const [carMakerIndividualCount, setCarMakerIndividualCount] = useState({});
  const [carCount, setCarCount] = useState(0);
  const [carPriceAverage, setCarPriceAverage] = useState(0);
  const [makerCount, setMakerCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const [
        average,
        count,
        carCountValue,
        makerAverage,
        makerCountValue,
        mostExpensiveCarValue,
        cheapestCarValue,
        mostCommonMakerValue,
        averageViewsPerCarValue,
        averageViewPerMakerValue,
        averageAgeOfCarValue,
        correlationBetweenPriceAndPageViewsValue,
        mostPopularCarsValue,
      ] = await Promise.all([
        getCarPriceAverage(),
        getCarMakerIndividualCount(),
        getCarCount(),
        getAverageOfEachMaker(),
        getMakerCount(),
        getMostExpensiveCar(),
        getCheapestCar(),
        getMostCommonMaker(),
        averageViewsPerCar(),
        averageViewPerMaker(),
        averageAgeOfCar(),
        correlationBetweenPriceAndPageViews(),
        MostPopularCars(),
      ]);
      setCarPriceAverage(average);
      setCarMakerIndividualCount(count);
      setCarCount(carCountValue);
      setAverageOfEachMaker(makerAverage);
      setMakerCount(makerCountValue);
      setMostExpensiveCar(mostExpensiveCarValue);
      setCheapestCar(cheapestCarValue);
      setMostCommonMaker(mostCommonMakerValue);
      setAverageViewsPerCarValue(averageViewsPerCarValue);
      setAverageViewPerMakerValue(averageViewPerMakerValue);
      setAverageAgeOfCarValue(averageAgeOfCarValue);
      setCorrelationBetweenPriceAndPageViewsValue(
        correlationBetweenPriceAndPageViewsValue
      );
      setMostPopularCars(mostPopularCarsValue);
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 w-full max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-red-500 mb-8">
        View Your Statistics
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <StatCard
          title="Most Expensive Car"
          value={mostExpensiveCar.Prc || "N/A"}
          description={mostExpensiveCar.NameMMT || "N/A"}
          icon={Car}
        />
        <StatCard
          title="Cheapest Car"
          value={cheapestCar.Prc || "N/A"}
          description={cheapestCar.NameMMT || "N/A"}
          icon={Car}
        />
        <StatCard
          title="Most Common Maker"
          value={mostCommonMaker || "N/A"}
          description="Most common manufacturer"
          icon={Factory}
        />
        <StatCard
          title="Average Views per Car"
          value={averageViewsPerCarValue || "N/A"}
          description="Average views per car"
          icon={null}
        />
        <StatCard
          title="Average Age of Car"
          value={averageAgeOfCarValue || "N/A"}
          description="Average age of cars in database"
          icon={null}
        />
        <StatCard
          title="Total Cars"
          value={carCount || "N/A"}
          description="Vehicles in database"
          icon={Car}
        />
        <StatCard
          title="Total Makers"
          value={makerCount || "N/A"}
          description="Unique manufacturers"
          icon={Factory}
          jjjj
        />
        <StatCard
          title="Average Car Price"
          value={carPriceAverage || "N/A"}
          description={`Average price of cars in database`}
          icon={null}
        />
      </div>
      <Card
        className="
      bg-white
      border-4
      border-red-500
        rounded-lg
        shadow-md
        w-full
        text-center
      "
      >
        <CardHeader>
          <CardTitle>Cars per Maker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="" style={{ height: "600px" }}>
            <CarMakerChart data={carMakerIndividualCount} />
          </div>
        </CardContent>
      </Card>
      <Card
        className="mt-5 w-full border 
      bg-white
      border-4
      border-red-500
        rounded-lg
        shadow-md"
      >
        <CardHeader>
          <CardTitle>Average Price per Maker</CardTitle>
        </CardHeader>
        <CardContent>
          <CarMakerAveragePriceChart data={averageOfEachMaker} />
        </CardContent>
      </Card>
      <Card
        className="mt-5 w-full border 
      bg-white
      border-4
      border-red-500
        rounded-lg
        shadow-md"
      >
        <CardHeader>
          <CardTitle>Models per Maker</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full" style={{ height: "600px" }}>
            <ModelPerMaker data={mostPopularCars} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Statistics;
