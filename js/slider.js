const slider = document.getElementById("slider");
const slides = slider.children.length;
let index = 0;

setInterval(() => {
  index++;

  if (index >= slides) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;
}, 4000);
