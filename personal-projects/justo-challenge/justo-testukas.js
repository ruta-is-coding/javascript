function sum(a, b) {
  let res = a + b;
  console.log(res);
}

sum(4, 8);

function showCat() {
  document.querySelector(".cat").style.visibility =
    document.querySelector(".cat").style.visibility === "visible"
      ? "hidden"
      : "visible";
}
