const container = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  container.classList.toggle("active");
  console.log("hello");
});
