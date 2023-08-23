import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import Posts from "../components/Posts";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <Hero />
      <Posts data={data} isLoading={isLoading} />
      <Link to={`/offer/1234`}>
        Naviguer vers la page offer/:id avec comme id 1234
      </Link>
    </div>
  );
};

export default Home;
