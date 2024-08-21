import { useState, useEffect } from "react";
import { getCarCount, getMakerCount } from "../data/carData";
import { Car, Factory, TrendingUp } from "lucide-react";
import StatCard from "./StatCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [carCount, setCarCount] = useState(0);
  const [makerCount, setMakerCount] = useState(0);

  useEffect(() => {
    getCarCount().then((count) => setCarCount(count));
    getMakerCount().then((count) => setMakerCount(count));
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-500">
        Welcome to Your Dashboard
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Total Cars"
          value={carCount}
          description="Vehicles in database"
          icon={Car}
        />
        <StatCard
          title="Total Makers"
          value={makerCount}
          description="Unique manufacturers"
          icon={Factory}
        />
        <StatCard
          title="Average Cars per Maker"
          value={makerCount ? (carCount / makerCount).toFixed(1) : "N/A"}
          description="Cars per manufacturer"
          icon={TrendingUp}
        />
      </div>
      <StatCard
        title="Overview"
        value=""
        description={`Your database contains information on ${carCount} cars from ${makerCount} different manufacturers. This diverse collection provides a comprehensive view of the automotive landscape.`}
        icon={null}
      />
      <div className="flex justify-center mt-8">
        <Link to="statistics">
          <Button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded text-center"
          >
            Proceed to Statistics
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
