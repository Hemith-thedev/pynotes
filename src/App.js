
import "./App.css";

import ThemeToggle from "./components/layout/ThemeToggle";

import Pages from "./data/Pages";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    const ActivePage = Pages.find((page) => location.pathname === page.path);
    document.title = `${ActivePage.title} | Pynotes`;
  }, [location.pathname]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <ThemeToggle />
      <Routes location={location} key={location.pathname}>
        {Pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
