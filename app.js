const choices = document.querySelectorAll(".choice-card");
const pickButton = document.querySelector("#pickButton");
const pickText = document.querySelector("#pickText");
const chanceCount = document.querySelector("#chanceCount");

let chances = 9;
let selectedChoice = 1;

choices.forEach((choice, index) => {
  choice.addEventListener("click", () => {
    selectedChoice = index;
    choices.forEach((item) => item.classList.remove("is-active"));
    choice.classList.add("is-active");
  });
});

pickButton.addEventListener("click", () => {
  if (chances > 1) {
    chances -= 1;
  }

  const labels = ["随便吃点", "正在纠结", "整点好的"];
  pickText.textContent = labels[selectedChoice] ?? "帮我选";
  chanceCount.textContent = String(chances);

  window.setTimeout(() => {
    pickText.textContent = "帮我选";
  }, 900);
});
