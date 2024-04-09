const tableMeat = document.getElementById("meat");
const tableGarlicBread = document.getElementById("garlic-bread");
const tableCoal = document.getElementById("coal");
const tableSalt = document.getElementById("salt");
const tableIce = document.getElementById("ice");
const tableSoda = document.getElementById("soda");
const tableWater = document.getElementById("water");
const tableBeer = document.getElementById("beer");

const calculateQuantity = () => {
  let meatKg = 0;
  let garlicBread = 0;
  let coalKg = 0;
  let saltKg = 0;
  let iceKg = 0;
  let sodaBottle = 0;
  let waterBottle = 0;
  let beerBottle = 0;

  let men = localStorage.getItem("Men");
  let women = localStorage.getItem("Women");
  let children = localStorage.getItem("Children");
  let drinkers = localStorage.getItem("Drinkers");
  let adults = Number(men) + Number(women);
  let totalOfPeople = Number(men) + Number(women) + Number(children);

  meatKg += 0.4 * men;
  meatKg += 0.32 * women;
  meatKg += 0.2 * children;
  garlicBread = 2 * adults;
  garlicBread += Number(children);
  coalKg += totalOfPeople;
  saltKg += 0.04 * totalOfPeople;
  iceKg += 0.5 * totalOfPeople;
  sodaBottle = 0.2 * totalOfPeople;
  waterBottle = 0.2 * totalOfPeople;
  beerBottle = 3 * drinkers;

  tableMeat.innerText = meatKg + " Kg";
  tableGarlicBread.innerText = garlicBread + " Un";
  tableCoal.innerText = coalKg + " Kg";
  tableSalt.innerText = saltKg + " Kg";
  tableIce.innerText = iceKg + " Kg";
  tableSoda.innerText = sodaBottle + " un";
  tableWater.innerText = waterBottle + " un";
  tableBeer.innerText = beerBottle + " un";

}

calculateQuantity();