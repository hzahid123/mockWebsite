import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggle({ theme, onToggle }) {
  const nextLabel = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${nextLabel} mode`}
      onClick={onToggle}
    >
      <span className="theme-icon theme-icon-sun" aria-hidden="true">
        <FaSun size={20} />
      </span>
      <span className="theme-icon theme-icon-moon" aria-hidden="true">
        <FaMoon size={20} />
      </span>
    </button>
  );
}
