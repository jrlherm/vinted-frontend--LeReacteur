import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import vintedLogo from "../assets/img/vinted-logo.png";
import Switch from "react-switch";
import LabeledTwoThumbs from "./LabeledTwoThumbs";

import arrowUpIcon from "../assets/img/arrow-up.svg";
import arrowDownIcon from "../assets/img/arrow-down.svg";

const Header = ({
  setUserToken,
  setSigninVisible,
  setSignupVisible,
  search,
  setSearch,
  handlePriceChange,
  setMaxPrice,
  setMinPrice,
  setSortByPriceAsc,
  sortByPriceAsc,
}) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    setPriceRange(handlePriceChange(priceRange));
  }, [handlePriceChange, priceRange]);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

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

            {/* {isHomePage && (
              <div className="filters">
                <div className="switch-container">
                  <p>Trier par prix</p>
                  <Switch
                    onChange={() => setSortByPriceAsc(!sortByPriceAsc)}
                    checked={sortByPriceAsc}
                    onColor="#2cb1ba"
                    offColor="#2cb1ba"
                    checkedIcon={
                      <img
                        src={arrowDownIcon}
                        alt="Arrow Down"
                        style={{
                          width: "18px",
                          height: "18px",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      />
                    }
                    uncheckedIcon={
                      <img
                        src={arrowUpIcon}
                        alt="Arrow Up"
                        style={{
                          width: "18px",
                          height: "18px",
                          marginTop: "5px",
                          marginLeft: "5px",
                        }}
                      />
                    }
                  />
                  {console.log(sortByPriceAsc)}
                </div>
                <div className="price-selector">
                  <p>Fourchette de prix</p>
                  <LabeledTwoThumbs
                    setMinPrice={setMinPrice}
                    setMaxPrice={setMaxPrice}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                  />
                </div>
              </div>
            )} */}
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
              <button onClick={() => setSignupVisible(true)}>S'inscrire</button>
              <button onClick={() => setSigninVisible(true)}>
                Se connecter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
