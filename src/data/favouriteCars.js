let favouriteCars = JSON.parse(localStorage.getItem("favouriteCars")) || [];

export function updateFavouriteCars(carId) {
  const index = favouriteCars.indexOf(carId);
  if (index === -1) {
    favouriteCars.push(carId);
  } else {
    favouriteCars.splice(index, 1);
  }
  localStorage.setItem("favouriteCars", JSON.stringify(favouriteCars));
}

export function getFavouriteCars() {
  return favouriteCars;
}

export function removeFavouriteCar(carId) {
  favouriteCars = favouriteCars.filter((id) => id !== carId);
  localStorage.setItem("favouriteCars", JSON.stringify(favouriteCars));
  return favouriteCars;
}
