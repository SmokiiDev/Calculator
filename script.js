let display = document.getElementById("display");

function toDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function result() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
// function toDisplay(value) {
//   document.getElementById("display").value += value;
// }
// function clearDisplay() {
//   document.getElementById("display").value = "";
// }
// function result() {
//   try {
//     document.getElementById("display").value = eval(
//       document.getElementById("display").value
//     );
//   } catch {
//     document.getElementById("display").value = "Error";
//   }
// }
