const tabs = document.querySelectorAll(".offerTab");
const cards = document.querySelectorAll(".offerCard");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const category = tab.dataset.category;

    // reset tabs
    tabs.forEach((t) => {
      t.classList.remove("is-active");
      t.classList.remove("text-primary");
      t.classList.add("text-tertiary");
      t.setAttribute("aria-pressed", "false");
    });

    // activate clicked tab
    tab.classList.add("is-active");
    tab.classList.remove("text-tertiary");
    tab.classList.add("text-primary");
    tab.setAttribute("aria-pressed", "true");

    // show matching cards
    cards.forEach((card) => {
      if (card.dataset.category === category) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
