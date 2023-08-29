import React, { useState } from "react";
import "./assets/fonts/stylesheet.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

// Pages
import Home from "./page/Home";
import Offer from "./page/Offer";
import Signup from "./page/Signup";
import Signin from "./page/Signin";
import Publish from "./page/Publish";
import Payment from "./page/Payment";

// Components
import Header from "./components/Header";
import Modal from "./components/Modal";
import { loadStripe } from "@stripe/stripe-js";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || null);
  const [visible, setVisible] = useState(false);

  const [search, setSearch] = useState("");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [sortByPriceAsc, setSortByPriceAsc] = useState(false);

  const stripePromise = loadStripe(
    "pk_test_51IpvphDqQKb3lCIT3UU1fIPnAXyyG57gLns831kNwLVGCFo1a3MtSucuiIwEijgip8fL85zUlKZKTK0a2JAhSWHt00ZWSjTErF"
  );

  const handlePriceChange = (newRange) => {
    setMinPrice(newRange[0]);
    setMaxPrice(newRange[1]);
    return newRange;
  };

  return (
    <div className="app">
      <Router>
        <Header
          setUserToken={setUserToken}
          visible={visible}
          setVisible={setVisible}
          search={search}
          setSearch={setSearch}
          handlePriceChange={handlePriceChange}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
          sortByPriceAsc={sortByPriceAsc}
          setSortByPriceAsc={setSortByPriceAsc}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                search={search}
                minPrice={minPrice}
                maxPrice={maxPrice}
                sortByPriceAsc={sortByPriceAsc}
              />
            }
          />
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
          <Route path="/publish" element={<Publish userToken={userToken} />} />
          <Route
            path="/payment"
            element={
              <Payment userToken={userToken} stripePromise={stripePromise} />
            }
          />
        </Routes>
        {visible && <Modal setVisible={setVisible} />}
      </Router>
    </div>
  );
}

export default App;
