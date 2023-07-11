const firstName = "Sylvester";
const lastName = "Stalone";
if (firstName.length > lastName.length) {
  console.log(lastName);
} else if (firstName.length === lastName.length) {
  console.log("Vardas ir pavardė yra vienodo ilgio");
} else {
  console.log(firstName);
}

const vardas = "Rūta ";
const pavarde = "Jurgelytė";
const gimimoMetai = 1996;
let sieMetai = 2023;
let metai = sieMetai - gimimoMetai;
console.log("Aš esu " + vardas + pavarde + ". Man yra " + metai + " metai(ų).");

const actorsName = "Sylvester";
const actorsLastName = "Stalone";
let weirdName =
  actorsName[actorsName.length - 3] +
  actorsName[actorsName.length - 2] +
  actorsName[actorsName.length - 1] +
  actorsLastName[actorsLastName.length - 3] +
  actorsLastName[actorsLastName.length - 2] +
  actorsLastName[actorsLastName.length - 1];
console.log(weirdName);

// let weirdName = actorsName.slice(-3) + actorsLastName.slice(-3);
