const buttons = document.querySelectorAll(".accordion-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector(".arrow");

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrow.classList.remove("rotate-180");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.classList.add("rotate-180");
    }
  });
});
