// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages
import Home from "./page/Home";
// Components
import Header from "./components/Header";
// Images

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route parh="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
