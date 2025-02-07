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
