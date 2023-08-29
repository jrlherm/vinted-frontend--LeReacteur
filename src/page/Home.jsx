import { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Home = ({ search, minPrice, maxPrice, sortByPriceAsc }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let link = "https://lereacteur-vinted-api.herokuapp.com/offers";
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

      console.log(link);

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
      <Posts data={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
