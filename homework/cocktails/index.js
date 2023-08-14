// --------------------------------------------------------------------Kintamieji---------------------------------------------------------------------
const popUp = document.querySelector(".popUpWindow");
const form = document.querySelector("form");
const lucky = document.getElementById("lucky");
const modal = document.getElementById("modalWindow");
let alcoData;
let categoryData;
let glassData;
let ingredientData;
// --------------------------------------------------------------------Likusi puslapio būsena---------------------------------------------------------------------
let isRandomRunning = localStorage.getItem("isRandomRunning") === "true";
let isGetPhotosRunning = localStorage.getItem("isGetPhotosRunning") === "true";
let isGetDetailsRunning =
  localStorage.getItem("isGetDetailsRunning") === "true";
setLocalStorage();
// --------------------------------------------------------------------Abecelės masyvas---------------------------------------------------------------------
const alphabet = [];
for (let i = 0; i < 26; i++) alphabet.push(String.fromCharCode(65 + i));
// --------------------------------------------------------------------Kuriamos raidžių nuorodos---------------------------------------------------------------------
for (const value of alphabet) {
  document.getElementById(
    "alphabet"
  ).innerHTML += `<a href="#" class="text-success" onclick="byFirstLetter(event)">${value}</a>`;
}
// --------------------------------------------------------------------Funkcija HTML atvaizduoti, kai iškviečiama getPhotos()---------------------------------------------------------------------
function showPhotosList(resp) {
  let html = `<div class="row">`;
  resp.drinks.map((data) => {
    html += `<div class="col-4">
                                <a href="#" onclick="getDetails(event, ${data.idDrink})">
                                <img src="${data.strDrinkThumb}" alt="${data.strDrink}"/>
                              </a>
                                <h3>${data.strDrink}</h3>
                                </div>`;
  });
  html += `</div>`;
  result.innerHTML = html;
}
// --------------------------------------------------------------------Gaunamos kokteilių foto---------------------------------------------------------------------
async function getPhotos(e) {
  e.preventDefault();
  const value = document.getElementById("search").value;
  let resp = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
  );
  resp = await resp.json();

  const result = document.getElementById("result");

  if (!resp.drinks)
    return (result.innerHTML = `<div class="alert alert-warning">Result not found</div>`);

  showPhotosList(resp);
  hideModal();

  localStorage.setItem("key", JSON.stringify(resp));
  localStorage.setItem("isGetPhotosRunning", "true");
}
// --------------------------------------------------------------------Uždaryti modalinį langą---------------------------------------------------------------------

function hideModal() {
  modal.style.visibility = "hidden";
  localStorage.setItem("isRandomRunning", "false");
  localStorage.setItem("isGetDetailsRunning", "false");
}
// --------------------------------------------------------------------Local storage---------------------------------------------------------------------
function setLocalStorage() {
  let storageData = localStorage.getItem("key");
  storageData = JSON.parse(storageData);
  if (isRandomRunning) {
    modalVisible();
    addHTML(storageData, ingredientLoop(storageData));
  } else if (isGetPhotosRunning) {
    showPhotosList(storageData);
  } else if (isGetDetailsRunning) {
    modalVisible();
    addHTML(storageData, ingredientLoop(storageData));
  }
}
// --------------------------------------------------------------------Gaunamos kokteilio detalės---------------------------------------------------------------------
function getDetails(e, id) {
  e.preventDefault();
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then((resp) => resp.json())
    .then((resp) => {
      const data = resp.drinks[0];
      let ingredients = ingredientLoop(data);
      modal.style.position = "fixed";
      modalVisible();
      addHTML(data, ingredients);
      localStorage.setItem("key", JSON.stringify(data));
      localStorage.setItem("isGetDetailsRunning", "true");
      localStorage.setItem("isGetPhotosRunning", "false");
    });
}
// ------------------------------------------------------------------------------------Ingredientų for ciklas---------------------------------------------------------------------
function ingredientLoop(data) {
  let ingredients = "";
  for (let i = 1; i <= 15; i++) {
    if (data["strIngredient" + i]) {
      ingredients += `<li><a href="#" onclick="ingredientType(event)">${
        data["strIngredient" + i]
      }</a> ${data["strMeasure" + i] ? data["strMeasure" + i] : ""}</li>`;
    }
  }
  return ingredients;
}
// --------------------------------------------------------------------Paspaudus mygtuką "I'm lucky" atsiranda random kokteilis---------------------------------------------------------------------
async function random() {
  let data = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php"
  );
  data = await data.json();
  data = data.drinks[0];

  modal.classList.remove("d-flex");
  let ingredients = ingredientLoop(data);
  alcoData = data.strAlcoholic;
  categoryData = data.strCategory;
  glassData = data.strGlass;
  modalVisible();
  addHTML(data, ingredients);
  localStorage.setItem("key", JSON.stringify(data));
  localStorage.setItem("isRandomRunning", "true");
  localStorage.setItem("isGetPhotosRunning", "false");
}
// --------------------------------------------------------------------Filtravimas pagal tai, ar kokteilis alkoholinis---------------------------------------------------------------------
async function alcoType() {
  let data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoData}`
  );
  data = await data.json();
  data = data.drinks;
  localStorage.setItem("key", JSON.stringify(data));
  modal.style.position = "absolute";
  popUp.innerHTML = `
  <div id="row" class="d-flex flex-wrap m-2 gap-2 justify-content-center"></div>
  `;
  valueOfData(data);
}
// --------------------------------------------------------------------Filtravimas pagal kategoriją---------------------------------------------------------------------
async function categoryType() {
  let data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryData}`
  );
  data = await data.json();
  data = data.drinks;
  modal.style.position = "absolute";
  popUp.innerHTML = `
  <div id="row" class="d-flex flex-wrap m-2 gap-2 justify-content-center"></div>
  `;
  valueOfData(data);
}
// --------------------------------------------------------------------Filtravimas pagal stiklinės tipą---------------------------------------------------------------------
async function glassType() {
  let data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=${glassData}`
  );
  data = await data.json();
  data = data.drinks;
  modal.style.position = "absolute";
  popUp.innerHTML = `
  <div id="row" class="d-flex flex-wrap m-2 gap-2 justify-content-center"></div>
  `;
  valueOfData(data);
}
// --------------------------------------------------------------------Filtravimas pagal ingredientą---------------------------------------------------------------------
async function ingredientType(e) {
  let ingredient = e.target.textContent;
  let data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  data = await data.json();
  data = data.drinks;
  modal.style.position = "absolute";
  popUp.innerHTML = `
  <div id="row" class="d-flex flex-wrap m-2 gap-2 justify-content-center"></div>
  `;
  valueOfData(data);
}
// --------------------------------------------------------------------Filtravimas pagal pirmąją kokteilio raidę---------------------------------------------------------------------
async function byFirstLetter(e) {
  let letter = e.target.textContent.toLowerCase(); //e.target-nuoroda
  let data = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`
  );
  data = await data.json();
  data = data.drinks;
  modal.style.position = "absolute";
  modalVisible();
  popUp.innerHTML = `
  <div id="row" class="d-flex flex-wrap m-2 gap-2 justify-content-center"></div>
  `;
  valueOfData(data);
}
// --------------------------------------------------------------------Paimami objektų key ir sudedami į nuotraukas ir pavadinimus---------------------------------------------------------------------
function valueOfData(data) {
  for (const value of data) {
    document.getElementById(
      "row"
    ).innerHTML += `<div class="col-3 m-2 d-flex justify-content-between flex-column">
          <h3 style="font-size:20px">${value.strDrink}</h3>
          <img src="${value.strDrinkThumb}">
        </div>`;
  }
}
// --------------------------------------------------------------------Modalinis langas tampa matomas---------------------------------------------------------------------
function modalVisible() {
  modal.style.visibility = "visible";
}
// --------------------------------------------------------------------Pridedamas HTML---------------------------------------------------------------------
function addHTML(data, ingredients) {
  popUp.innerHTML = `
  <div class="container m-3">
    <h3>${data.strDrink}</h3>
    <div class="container d-flex justify-content-center gap-3 mb-3">
        <a href="#" onclick="alcoType()">${data.strAlcoholic}</a>
        <a href="#" onclick="categoryType()">${data.strCategory}</a>
        <a href="#" onclick="glassType()">${data.strGlass}</a>
    </div>
    <div class="container d-flex justify-content-center mb-3 mt-3 gap-3">
      <div class="col-6 d-flex justify-content-center align-items-start">
        <img class="object-fit-contain" src="${data.strDrinkThumb}" alt="${data.strDrink}"/>
      </div>
      <div class="col-6 d-flex flex-column align-items-start">
            <h4>Ingredients:</h4>
            <ul>
                ${ingredients}
            </ul>
            <h4>Preparation:</h4>
            <p>${data.strInstructions}</p>
      </div>
    </div>
  </div>
      `;
}
