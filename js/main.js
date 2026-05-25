const toggleTheme = () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
};

const toggleMenu = () => {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuButton = document.querySelector(".menu-toggle");
  const isOpen = sidebar.classList.toggle("open");
  backdrop.classList.toggle("visible", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
};

const closeMenu = () => {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuButton = document.querySelector(".menu-toggle");
  sidebar.classList.remove("open");
  backdrop.classList.remove("visible");
  menuButton.setAttribute("aria-expanded", "false");
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});