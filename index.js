const questions = document.querySelectorAll(".question");

function handleClick(e) {
  // get closest section
  const currentSection = e.target.closest("section");
  console.log(currentSection);
  // get button el
  const currentButton = currentSection.querySelector("button");
  console.log(currentButton);
  // get img el
  const currentImg = currentButton.querySelector("img");
  // get paragraph el
  const currentParagraph = currentSection.querySelector("p");

  if (currentParagraph.classList.contains("hidden")) {
    currentImg.src = "assets/images/icon-minus.svg";
    currentParagraph.classList.remove("hidden");
    currentParagraph.classList.add("visible");
  } else {
    currentImg.src = "assets/images/icon-plus.svg";
    currentParagraph.classList.remove("visible");
    currentParagraph.classList.add("hidden");
  }
}

for (const question of questions) {
  question.addEventListener("click", handleClick);
}
