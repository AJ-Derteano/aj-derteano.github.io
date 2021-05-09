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