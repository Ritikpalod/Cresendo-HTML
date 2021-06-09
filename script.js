const menu = document.querySelector(".menu");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  menu.style.display = "rows";
  menu.style.top = "o";
}

function close() {
  menu.style.top = "-100%";
}
