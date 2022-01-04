const collaps = document.querySelector(".button");
const collapsBird = document.querySelector(".buttonBird");
const collapsCat = document.querySelector(".buttonCat");
const content = document.querySelector(".contentDog")
const contentCat = document.querySelector(".contentCat")
const contentBird = document.querySelector(".contentBird")

collaps.addEventListener("click", () => {collapse(collaps,content)})

collapsCat.addEventListener("click", () => {collapse(collapsCat,contentCat)})

collapsBird.addEventListener("click", () => {collapse(collapsBird,contentBird)})


function collapse(button, content){

  content.classList.toggle("active");

  if(button.innerHTML == "+") {

    button.innerHTML = "-";

  } else {
    button.innerHTML = "+";
  }

}
