// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
function compare(a, b) {
  if (a > b) console.log(`Didesnis skaičius yra ${a}`);
  else if (a === b) console.log("Skaičiai yra lygūs");
  else console.log(`Didesnis skaičius yra ${b}`);
}
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
function numbersLine() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
function evenNumbersLine() {
  for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
function rand(min, max) {
  //funkcija atsitiktinio skaičiaus generavimui
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function fiveRandomNumbers() {
  for (let i = 0; i < 5; i++) {
    let number = rand(1, 10);
    console.log(number);
  }
}
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
function randomNumbers() {
  while (true) {
    let number = rand(1, 10);
    console.log(number);
    if (number === 5) break;
  }
}
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
function bigArray() {
  const array = [];
  let max = 0;
  let arrayLength = rand(20, 30);
  for (let i = 0; i < arrayLength; i++) {
    let number = rand(10, 30);
    array.push(number);
    if (number > max) max = number;
  }
  console.log(array);
  console.log(`Maksimumas: ${max}`);
}
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
function lettersArray() {
  const array2 = [];
  let counterA = 0;
  let counterB = 0;
  let counterC = 0;
  let counterD = 0;
  const letters = "ABCD";
  for (let i = 0; i < 100; i++) {
    let randomLetter = letters[rand(0, 3)];
    array2.push(randomLetter);
    if (randomLetter === "A") counterA++;
    else if (randomLetter === "B") counterB++;
    else if (randomLetter === "C") counterC++;
    else counterD++;
  }
  console.log(array2);
  console.log(`Kiek raidžių A: ${counterA}`);
  console.log(`Kiek raidžių B: ${counterB}`);
  console.log(`Kiek raidžių C: ${counterC}`);
  console.log(`Kiek raidžių D: ${counterD}`);
}
// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
function lygineSuma(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    let sum1 = a + b;
    console.log(sum1);
    if (sum1 % 2 === 1) console.log(`Suma nelyginė`);
    return sum1;
  } else if (Array.isArray(a) && Array.isArray(b)) {
    let sum2 = a.length + b.length;
    console.log(sum2);
    if (sum2 % 2 === 1) console.log(`Suma nelyginė`);
    return sum2;
  }
}
// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
function pirminisSkaicius(a) {
  if (typeof a === "number") console.log(`Kintamasis yra skaičius`);
  if (a === 1) console.log("Skaičius nėra pirminis");
  if (a === 2) console.log("Skaičius yra pirminis");
  let counter = 0;
  for (let i = 2; i < a; i++) {
    if (a % i === 0) {
      console.log("Skaičius nėra pirminis");
      break;
    } else if (a % i !== 0) counter++;
    if (counter === a - 2) console.log("Skaičius yra pirminis");
  }
}
// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)\
function telefonoNumeris(a) {
  if (
    Array.isArray(a) &&
    a.length === 10 &&
    a.filter((value) => typeof value == "number").length === 10 &&
    a.filter((value) => value >= 0 && value <= 9).length === 10
  ) {
    console.log(
      `"(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}"`
    );
  } else console.log("Data isn't valid");
}
