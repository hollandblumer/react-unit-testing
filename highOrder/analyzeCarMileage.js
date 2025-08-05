function analyzeCarMileage(cars) {
  const highestMileage = cars.reduce(
    (highest, car) => (car.mileage > highest.mileage ? car : highest),
    cars[0]
  );

  const lowestMileage = cars.reduce(
    (lowest, car) => (car.mileage < lowest.mileage ? car : lowest),
    cars[0]
  );

  console.log(lowestMileage);
  console.log(highestMileage);
}

const cars = [
  { make: "toyota", mileage: "123134", total: "1212312" },
  { make: "honda", mileage: "1237134", total: "1212312" },
];

analyzeCarMileage(cars);
