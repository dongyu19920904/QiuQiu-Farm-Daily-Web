// The section must not be in the theme.js (body) file because it can create a quick flash (switch between light and dark).

function setTheme(theme) {
  document.documentElement.classList.remove("light", "dark");

  if (theme !== "light" && theme !== "dark") {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.documentElement.classList.add(theme);
  document.documentElement.style.colorScheme = theme;
}

function savedTheme() { try { return localStorage.getItem("color-theme"); } catch { return null; } }
setTheme(savedTheme() || '{{ site.Params.theme.default | default `system`}}')

