import { getCarData, getMakerData } from "../data/carData";
import { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

const ModelPerMaker = () => {
  const [carData, setCarData] = useState([]);
  const [makerData, setMakerData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const [cars, makers] = await Promise.all([getCarData(), getMakerData()]);
      setCarData(cars);
      setMakerData(makers);
    };

    fetchData();
  }, []);

  const aggregatedCarData = carData.reduce((acc, car) => {
    if (!acc[car.Model]) {
      acc[car.Model] = {
        stack: "stack" + car.CID,
        backgroundColor:
          "#" + Math.floor(Math.random() * 16777215).toString(16),
        label: car.Model,
        data: new Array(makerData.length).fill(0),
      };
    }
    makerData.forEach((maker, index) => {
      if (car.MkID === maker.mkID) {
        acc[car.Model].data[index] += 1;
      }
    });
    return acc;
  }, {});

  const data = {
    labels: makerData.map((maker) => maker.Name),
    datasets: Object.values(aggregatedCarData),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: true,
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div style={{ height: "50vh", width: "100%" }}>
      <Bar ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ModelPerMaker;
