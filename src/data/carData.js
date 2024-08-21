export async function getCarData() {
  const result = await fetch("./taladrod-cars.min.json")
    .then((response) => response.json())
    .then((data) => data);
  const cars = result.Cars;
  return cars;
}

export async function getCarCount() {
  const result = await fetch("./taladrod-cars.min.json")
    .then((response) => response.json())
    .then((data) => data);
  const carCount = result.nCar;
  return carCount;
}

export async function getMakerData() {
  const result = await fetch("./taladrod-cars.min.json")
    .then((response) => response.json())
    .then((data) => data);
  const makers = result.MMList;
  return makers;
}

export async function getMakerCount() {
  const makers = await getMakerData();
  return makers.length;
}

export async function getCarMakerIndividualCount() {
  const cars = await getCarData();
  const makers = await getMakerData();
  const makerCounts = {};
  makers.forEach((maker) => {
    makerCounts[maker.Name] = 0;
  });
  cars.forEach((car) => {
    const maker = makers.find((m) => m.mkID === car.MkID);
    if (maker) {
      makerCounts[maker.Name]++;
    }
  });
  return makerCounts;
}

export async function getCarPriceAverage() {
  const cars = await getCarData();
  let totalPrice = 0;
  let validCarCount = 0;

  cars.forEach((car) => {
    const price = parseInt(car.Prc.replace(/,/g, ""), 10);
    if (!isNaN(price)) {
      totalPrice += price;
      validCarCount++;
    }
  });
  const averagePrice = validCarCount > 0 ? totalPrice / validCarCount : 0;
  return Math.round(averagePrice).toLocaleString();
}
export async function getAverageOfEachMaker() {
  const cars = await getCarData();
  const makers = await getMakerData();
  const makerCounts = {};
  const makerPrices = {};
  makers.forEach((maker) => {
    makerCounts[maker.Name] = 0;
    makerPrices[maker.Name] = 0;
  });
  cars.forEach((car) => {
    const maker = makers.find((m) => m.mkID === car.MkID);
    if (maker) {
      makerCounts[maker.Name]++;
      const price = parseInt(car.Prc.replace(/,/g, ""), 10);
      makerPrices[maker.Name] += price;
    }
  });
  const averagePrices = {};
  for (const maker in makerCounts) {
    makerCounts[maker] > 0;
    averagePrices[maker] = Math.round(makerPrices[maker] / makerCounts[maker]);
  }
  return averagePrices;
}

export async function getMostExpensiveCar() {
  const cars = await getCarData();
  let maxPrice = 0;
  let mostExpensiveCar = {};
  cars.forEach((car) => {
    const price = parseInt(car.Prc.replace(/,/g, ""), 10);
    if (price > maxPrice) {
      maxPrice = price;
      mostExpensiveCar = car;
    }
  });
  return mostExpensiveCar;
}

export async function getCheapestCar() {
  const cars = await getCarData();
  let minPrice = Infinity;
  let cheapestCar = {};
  cars.forEach((car) => {
    const price = parseInt(car.Prc.replace(/,/g, ""), 10);
    if (price < minPrice) {
      minPrice = price;
      cheapestCar = car;
    }
  });
  return cheapestCar;
}

export async function getMostCommonMaker() {
  const cars = await getCarData();
  const makers = await getMakerData();
  const makerCounts = {};
  cars.forEach((car) => {
    const maker = makers.find((m) => m.mkID === car.MkID);
    if (maker) {
      makerCounts[maker.Name] = makerCounts[maker.Name]
        ? makerCounts[maker.Name] + 1
        : 1;
    }
  });
  let maxCount = 0;
  let mostCommonMaker = "";
  for (const maker in makerCounts) {
    if (makerCounts[maker] > maxCount) {
      maxCount = makerCounts[maker];
      mostCommonMaker = maker;
    }
  }
  return mostCommonMaker;
}

export async function averageViewsPerCar() {
  const cars = await getCarData();
  let totalViews = 0;
  cars.forEach((car) => {
    totalViews += parseInt(car.PageViews, 10);
  });
  return Math.round(totalViews / cars.length);
}

export async function averageViewPerMaker() {
  const cars = await getCarData();
  const makers = await getMakerData();
  const makerCounts = {};
  const makerViews = {};
  makers.forEach((maker) => {
    makerCounts[maker.Name] = 0;
    makerViews[maker.Name] = 0;
  });
  cars.forEach((car) => {
    const maker = makers.find((m) => m.mkID === car.MkID);
    if (maker) {
      makerCounts[maker.Name]++;
      makerViews[maker.Name] += parseInt(car.PageViews, 10);
    }
  });
  const averageViews = {};
  for (const maker in makerCounts) {
    averageViews[maker] = Math.round(makerViews[maker] / makerCounts[maker]);
  }
  return averageViews;
}

export async function averageAgeOfCar() {
  const cars = await getCarData();
  let totalAge = 0;
  cars.forEach((car) => {
    totalAge += parseInt(car.Yr, 10);
  });
  return Math.round(totalAge / cars.length);
}

export async function correlationBetweenPriceAndPageViews() {
  const cars = await getCarData();
  let totalPrice = 0;
  let totalViews = 0;
  let totalPriceViews = 0;
  let totalPriceSquare = 0;
  let totalViewsSquare = 0;

  cars.forEach((car) => {
    const price = parseInt(car.Prc.replace(/,/g, ""), 10);
    const views = parseInt(car.PageViews, 10);
    totalPrice += price;
    totalViews += views;
    totalPriceViews += price * views;
    totalPriceSquare += price ** 2;
    totalViewsSquare += views ** 2;
  });
  const n = cars.length;
  const numerator = n * totalPriceViews - totalPrice * totalViews;
  const denominator = Math.sqrt(
    (n * totalPriceSquare - totalPrice ** 2) *
      (n * totalViewsSquare - totalViews ** 2)
  );
  return Math.round(numerator / denominator);
}

export async function MostPopularCars() {
  const cars = await getCarData();
  const popularCars = cars
    .sort((a, b) => parseInt(b.PageViews, 10) - parseInt(a.PageViews, 10))
    .slice(0, 5);
  return popularCars;
}
