console.log("Ketvirta užduotis");
let sentence = "Once upon a time in hollywood";
sentence = sentence.replace(/o/gi, "*");
// g and i flags makes case insensitive
console.log(sentence);

console.log("Penkta užduotis");
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let firstVariable = rand(0, 2);
let secondVariable = rand(0, 2);
let thirdVariable = rand(0, 2);
let fourthVariable = rand(0, 2);
console.log(firstVariable);
console.log(secondVariable);
console.log(thirdVariable);
console.log(fourthVariable);

let countOfZero = 0;
let countOfOne = 0;
let countOfTwo = 0;

// firstVariable
if (firstVariable === 0) {
  countOfZero++;
} else if (firstVariable === 1) {
  countOfOne++;
} else {
  countOfTwo++;
}
// secondVariable
if (secondVariable === 0) {
  countOfZero++;
} else if (secondVariable === 1) {
  countOfOne++;
} else {
  countOfTwo++;
}
// thirdVariable
if (thirdVariable === 0) {
  countOfZero++;
} else if (thirdVariable === 1) {
  countOfOne++;
} else {
  countOfTwo++;
}
// fourthVariable
if (fourthVariable === 0) {
  countOfZero++;
} else if (fourthVariable === 1) {
  countOfOne++;
} else {
  countOfTwo++;
}
console.log(`Iš viso nulių: ${countOfZero}`);
console.log(`Iš viso vienetų: ${countOfOne}`);
console.log(`Iš viso dvejetų: ${countOfTwo}`);

console.log("Šešta užduotis");
let pirmas = rand(0, 4);
console.log(pirmas);
let antras = rand(0, 4);
console.log(antras);
if (pirmas > antras) {
  console.log("Rezultatas:" + (pirmas / antras).toFixed(2));
} else if (pirmas === antras) {
  console.log("Reikšmės yra lygios");
} else {
  console.log("Rezultatas:" + (antras / pirmas).toFixed(2));
}

console.log("Septinta užduotis");
let first = rand(0, 25);
console.log(first);

let second = rand(0, 25);
console.log(second);

let third = rand(0, 25);
console.log(third);

let min = Math.min(first, second, third);
let max = Math.max(first, second, third);
let vidurinisSkaicius = first + second + third - (min + max);
console.log("Vidurinis skaičius:", vidurinisSkaicius);

console.log("Aštunta užduotis");
let firstName = "Audrey";
let lastName = "Hepburn";
let firstLetters = firstName[0] + lastName[0];
console.log(firstLetters);

console.log("Devinta užduotis");
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let positionOne = rand(0, alphabet.length - 1);
let positionTwo = rand(0, alphabet.length - 1);
let positionThree = rand(0, alphabet.length - 1);
console.log(
  alphabet[positionOne] + alphabet[positionTwo] + alphabet[positionThree]
);
