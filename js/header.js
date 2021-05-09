//efecto Scroll
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (header) {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
      //header.classList.add('scrolled');
      document.getElementById("main-header").classList.add("scrolled");
    } else {
      document.getElementById("main-header").classList.remove("scrolled");
      //header.classList.remove('scrolled');
    }
  }
});

//Abrir sub menu
const btnArrowToggle = document.querySelector(".arrow-toggle");
btnArrowToggle.onclick = () => {
  btnArrowToggle.classList.toggle("rotate");
  document.querySelector(".ul__sub-nav").classList.toggle("open");
};

//Abrir menu
const btnMenu = document.querySelector(".menu-icon");
btnMenu.onclick = () => {
  document.getElementById("main-header").classList.toggle("open");
};
