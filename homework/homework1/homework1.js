const firstName = "Sylvester";
const lastName = "Stalone";

console.log(firstName.length);
console.log(lastName.length);
console.log(lastName);

const vardas = "Rūta ";
const pavardė = "Jurgelytė";
const gimimoMetai = 1996;
let šieMetai = 2023;
let metai = šieMetai - gimimoMetai;
console.log("Aš esu " + vardas + pavardė + ". Man yra " + metai + " metai(ų).");

const actorsName = "Sylvester";
const actorslastName = "Stalone";
let weirdName =
  actorsName[actorsName.length - 3] +
  actorsName[actorsName.length - 2] +
  actorsName[actorsName.length - 1] +
  actorslastName[actorslastName.length - 3] +
  actorslastName[actorslastName.length - 2] +
  actorslastName[actorslastName.length - 1];
console.log(weirdName);
