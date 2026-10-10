import { useEffect, useState } from "react";
type Theme = "light" | "dark";
function getTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  try {
    const chosen = localStorage.getItem("portfolio-theme");
    if (chosen === "light" || chosen === "dark") return chosen;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  } catch {
    return "dark";
  }
}
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getTheme);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {}
  }, [theme]);
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <span className="theme-icon" aria-hidden="true">
        {theme === "dark" ? "☀︎" : "☾︎"}
      </span>
      <span className="theme-label">
        {theme === "dark" ? "Light" : "Dark"} mode
      </span>
    </button>
  );
}
