const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.dataset.value;

    if (btn.classList.contains("clear")) {
      currentInput = "";
      display.value = "";
      return;
    }

    if (btn.classList.contains("equal")) {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = "Error";
      }
      display.value = currentInput;
      return;
    }

    currentInput += value || "";
    display.value = currentInput;
  });
});