import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./assets/fonts/stylesheet.css";
import "./App.css";

// Pages
import Home from "./page/Home";
import Offer from "./page/Offer";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
// Components
import Header from "./components/Header";
import Modal from "./components/Modal";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);
  const [visible, setVisible] = useState(false);

  return (
    <div className="app">
      <Router>
        <Header
          setUserToken={setUserToken}
          visible={visible}
          setVisible={setVisible}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer/:id" element={<Offer />} />
          <Route
            path="/signup"
            element={
              <Signup userToken={userToken} setUserToken={setUserToken} />
            }
          />
          <Route
            path="/signin"
            element={
              <Signin userToken={userToken} setUserToken={setUserToken} />
            }
          />
        </Routes>
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
}

export default App;
