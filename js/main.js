const toggleTheme = () => {

  const html = document.documentElement;

  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
  } else {
    html.dataset.theme = "dark";
  }

};