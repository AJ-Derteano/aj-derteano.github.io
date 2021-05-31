let slideCount = 1;
setInterval(() => {
  document.querySelector(`#radio${slideCount}`).checked = true;
  let btnManual = document.querySelectorAll(".manual-btn");

  for (let i = 0; i < btnManual.length; i++) {
    btnManual[i].classList.remove("active");
  }

  document
    .querySelector(`label[for=radio${slideCount}]`)
    .classList.add("active");

  slideCount++;
  if (slideCount > 3) slideCount = 1;
}, 2000);
