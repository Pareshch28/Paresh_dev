import { useTheme } from "../hooks/useTheme.js";

export default function ThemeToggle() {
  const [theme, toggle] = useTheme();
  return (
    <button className="theme-toggle" onClick={toggle} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}
