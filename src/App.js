import logo from "./logo.svg";
import "./App.css";

import Pages from "./data/Pages";

import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        {Pages.map((page, index) => (
          <Route key={index} path={page.path} element={page.element} />
        ))}
      </Routes>
    </>
  );
}

export default App;
