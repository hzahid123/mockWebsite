import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ theme, onToggleTheme, isBookingPage = false }) {
  const [open, setOpen] = useState(false);

  const homeHash = (id) => (isBookingPage ? `/#${id}` : `#${id}`);

  return (
    <header className="site-header" id="top">
      <nav className="container nav">
        <a href={isBookingPage ? "/" : "#top"} className="logo" aria-label="MockMaster home">
          <span className="logo-mark">MM</span>
          <span className="logo-text">MockMaster</span>
        </a>

        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a href={homeHash("services")} onClick={() => setOpen(false)}>
              Services
            </a>
          </li>
          <li>
            <a href={homeHash("mock-process")} onClick={() => setOpen(false)}>
              Mock Process
            </a>
          </li>
          <li>
            <a href={homeHash("courses")} onClick={() => setOpen(false)}>
              PDF packs
            </a>
          </li>
          <li>
            <a href={homeHash("pricing")} onClick={() => setOpen(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href={homeHash("faq")} onClick={() => setOpen(false)}>
              FAQ
            </a>
          </li>
        </ul>

        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a href="/book-mock-interview" className="btn btn-small ripple-btn">
          Book mock interview
        </a>
      </nav>
    </header>
  );
}
