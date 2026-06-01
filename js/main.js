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

  sidebar.setAttribute("aria-hidden", String(!isOpen));
  backdrop.setAttribute("aria-hidden", String(!isOpen));
  menuButton.setAttribute("aria-expanded", String(isOpen));
};

const closeMenu = () => {
  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuButton = document.querySelector(".menu-toggle");

  sidebar.classList.remove("open");
  backdrop.classList.remove("visible");

  sidebar.setAttribute("aria-hidden", "true");
  backdrop.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
};

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

// hover / focus play-preview behavior
document.querySelectorAll('.card').forEach(card => {
  const vid = card.querySelector('video.preview');
  if (!vid) return;

  // play when pointer enters or card receives focus
  card.addEventListener('mouseenter', () => { vid.currentTime = 0; vid.play().catch(() => {}); });
  card.addEventListener('focusin',    () => { vid.currentTime = 0; vid.play().catch(() => {}); });

  // pause/reset when pointer leaves or card loses focus
  card.addEventListener('mouseleave', () => { vid.pause(); vid.currentTime = 0; });
  card.addEventListener('focusout',   () => { vid.pause(); vid.currentTime = 0; });
});