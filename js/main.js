const form = document.querySelector(".form");
const weightGrams = document.querySelector(".weightGrams");
const weightKg = document.querySelector(".weightKg");
const weightIb = document.querySelector(".weightIb");
const weightOunce = document.querySelector(".weightOunce");

// ========================
form.addEventListener("change", convertMeasurement);
// ========================
function convertMeasurement(e) {
  let inputValue = e.target;
  let gmValue;
  // console.log(inputValue);
  const currentInputValue = Number(inputValue.value);
  switch (inputValue.name) {
    case "grams":
      convertGmToOther(currentInputValue);
      break;
    case "kg":
      gmValue = currentInputValue * 1000;
      convertGmToOther(gmValue);
      break;
    case "ib":
      gmValue = currentInputValue / 0.0022046;
      convertGmToOther(gmValue);
      break;
    case "ounces":
      gmValue = currentInputValue / 0.035274;
      convertGmToOther(gmValue);
      break;
  }
}

// ========================
function convertGmToOther(grams) {
  weightGrams.value = grams.toFixed(4);
  weightKg.value = (grams / 1000).toFixed(4);
  weightIb.value = (grams / 453.592).toFixed(4);
  weightOunce.value = (grams / 28.3495).toFixed(4);
}
// ========================
// ========================
const footerYear = document.querySelector(".footer-year");
footerYear.textContent = new Date().getFullYear();
