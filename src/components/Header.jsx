import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import vintedLogo from "../assets/img/vinted-logo.png";
import Switch from "react-switch";

import LabeledTwoThumbs from "./LabeledTwoThumbs";

const Header = ({
  setUserToken,
  visible,
  setVisible,
  search,
  setSearch,
  handlePriceChange,
  setMaxPrice,
  setMinPrice,
  setSortByPriceAsc,
  sortByPriceAsc,
}) => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  useEffect(() => {
    setPriceRange(handlePriceChange(priceRange));
  }, [handlePriceChange, priceRange]);

  return (
    <div>
      <div className="header">
        <div className="container">
          <Link to="/">
            <img src={vintedLogo} alt="Logo Vinted" />
          </Link>
          <div className="header-mid">
            <div className="search">
              <input
                type="text"
                value={search}
                placeholder="Rechercher des articles"
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
              />
            </div>
          </div>
          {Cookies.get("token") ? (
            <div className="header-right">
              <Link to="/publish">
                <button>Vends tes articles</button>
              </Link>
              <button
                onClick={() => {
                  Cookies.remove("token");
                  setUserToken(null);
                }}
              >
                Se déconnecter
              </button>
            </div>
          ) : (
            <div className="header-right">
              <button onClick={() => setVisible(true)}>S'inscrire MODAL</button>
              <button onClick={() => setVisible(true)}>
                Se connecter MODAL
              </button>
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/signin">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="switch-container">
        <span>Classer par prix</span>
        <Switch
          onChange={() => setSortByPriceAsc(!sortByPriceAsc)}
          checked={sortByPriceAsc}
          onColor="#080"
          offColor="#888"
        />
      </div>

      <LabeledTwoThumbs
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
    </div>
  );
};

export default Header;
