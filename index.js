//let pokemon =["pikachu", "charmander", "squirtle"]
//const drivers = ['Antonia', 'Nuru', 'Amari', ''

const returnFirstTwoDrivers = (drivers) => {
  let arrayDrivers = [];
  arrayDrivers.push(drivers[0], drivers[1]);
  return arrayDrivers;
};

//console.log(returnFirstTwoDrivers(pokemon))

const returnLastTwoDrivers = (drivers) => {
  let arrayDrivers = [];
  arrayDrivers.push(drivers[drivers.length - 2], drivers[drivers.length - 1]);
  return arrayDrivers;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  const fareMultiplier = (fare) => {
    return fare * number;
  };
  return fareMultiplier;
}
const fareDoubler = (fare) => {
  return createFareMultiplier(2)(fare);
};
const fareTripler = (fare) => {
  return createFareMultiplier(3)(fare);
};
function selectDifferentDrivers(drivers, returnDrivers) {
  return returnDrivers(drivers);
}
