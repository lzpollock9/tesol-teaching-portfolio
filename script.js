document.documentElement.classList.add("js-enabled");
const button = document.querySelector(".nav-toggle");
const menu = document.querySelector("#primary-nav");
if (button && menu) {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
    menu.classList.toggle("is-open", !open);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
      menu.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
      menu.classList.remove("is-open");
      button.focus();
    }
  });
}
