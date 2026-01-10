
import "./App.css";

import ThemeToggle from "./components/layout/ThemeToggle";
import SideBar from "./components/layout/Sidebar";

import Pages from "./data/Pages";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";

function App() {
  const location = useLocation();
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(true);
  useEffect(() => {
    const ActivePage = Pages.find((page) => location.pathname === page.path);
    document.title = `${ActivePage.title} | Pynotes`;
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    if (isNavigatorOpen) {
      document.querySelector("section.hero-section").classList.add("nav-open");
    } else {
      document.querySelector("section.hero-section").classList.remove("nav-open");
    }
  }, [isNavigatorOpen]);
  useEffect(() => {
    const lenis = new Lenis({
      // fast scroll without delay
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="app">
      <SideBar isOpen={isNavigatorOpen} />
      <div className={`content main-content ${isNavigatorOpen ? "nav-open" : ""}`}>
        <ThemeToggle onNavigatorToggle={() => {
          setIsNavigatorOpen(prev => !prev);
        }} isNavigatorOpen={isNavigatorOpen} />
        <Routes location={location} key={location.pathname}>
          {Pages.map((page, index) => (
            <Route key={index} path={page.path} element={page.element} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
