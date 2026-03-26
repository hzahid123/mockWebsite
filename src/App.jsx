import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookMockInterviewPage from "./pages/BookMockInterviewPage";
import PdfDeliveryPage from "./pages/PdfDeliveryPage";

function getInitialTheme() {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export default function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // no-op
    }
  }, [theme]);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const node = document.getElementById(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, location.hash]);

  const isSubPage = location.pathname !== "/";

  return (
    <>
      <Header theme={theme} onToggleTheme={() => setTheme((v) => (v === "dark" ? "light" : "dark"))} isBookingPage={isSubPage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-mock-interview" element={<BookMockInterviewPage />} />
        <Route path="/pdf-delivery" element={<PdfDeliveryPage />} />
      </Routes>
      <Footer />
    </>
  );
}
