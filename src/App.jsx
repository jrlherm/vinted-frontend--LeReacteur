import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/fonts/stylesheet.css";
import React, { useState, useEffect } from "react";
import "./App.css";

// Pages
import Home from "./page/Home";
import Offer from "./page/Offer";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
// Components
import Header from "./components/Header";
import Cookies from "js-cookie";

function App() {
  const [userToken, setUserToken] = useState();

  useEffect(() => {
    if (Cookies.get("token")) {
      const cookieToken = Cookies.get("token");
      setUserToken(cookieToken);
      console.log("Cookie ===> ", Cookies.get("token"));
      console.log("userToken State ===> ", userToken);
    } else console.log("No token found. Please connect or signup.");
  }, [userToken]);

  return (
    <Router>
      <Header setUserToken={setUserToken} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup userToken={userToken} setUserToken={setUserToken} />}
        />
        <Route
          path="/signin"
          element={<Signin userToken={userToken} setUserToken={setUserToken} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
