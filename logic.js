const collaps = document.querySelector(".button");
const collapsBird = document.querySelector(".buttonBird");
const collapsCat = document.querySelector(".buttonCat");

const content = document.querySelector(".contentDog")
const contentCat = document.querySelector(".contentCat")
const contentBird = document.querySelector(".contentBird")

collaps.addEventListener("click", function() {
    
    content.classList.toggle("active");

  });
  collapsCat.addEventListener("click", function() {
    
    contentCat.classList.toggle("active");

  });
  collapsBird.addEventListener("click", function() {
    
    contentBird.classList.toggle("active");

  });
