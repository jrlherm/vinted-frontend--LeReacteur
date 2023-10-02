import { useState, useEffect } from "react";
import axios from "axios";

import Switch from "react-switch";
import LabeledTwoThumbs from "../components/LabeledTwoThumbs";

import arrowUpIcon from "../assets/img/arrow-up.svg";
import arrowDownIcon from "../assets/img/arrow-down.svg";

import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Home = ({
  search,
  setSearch,
  minPrice,
  maxPrice,
  sortByPriceAsc,
  handlePriceChange,
  setMaxPrice,
  setMinPrice,
  setSortByPriceAsc,
}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  useEffect(() => {
    const fetchData = async () => {
      let link = "https://site--vinted--vm2w9vyj7r62.code.run/offers";
      const params = [];

      if (search) {
        params.push(`title=${search}`);
      }
      if (minPrice !== undefined && maxPrice !== undefined) {
        params.push(`priceMin=${minPrice}`);
        params.push(`priceMax=${maxPrice}`);
      }
      if (sortByPriceAsc === true) {
        params.push(`sort=price-asc`);
      } else params.push(`sort=price-desc`);

      if (params.length > 0) {
        link = `${link}?${params.join("&")}`;
      }

      // console.log(link);

      try {
        const response = await axios.get(link);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, minPrice, maxPrice, sortByPriceAsc]);

  return (
    <div className="main">
      <Hero />
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
      <Posts data={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
