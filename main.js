const sheet = document.querySelector("#sheetsImage");
const seed = document.querySelector("#seedsImage");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  let rotation = scroll * 0.1;
  seed.style.transform = `rotate(${rotation}deg)`;
  sheet.style.transform = `rotate(${rotation}deg)`;
});
