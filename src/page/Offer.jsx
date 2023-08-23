import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [offerData, setOfferData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers/:{id}`
        );
        setOfferData(response.data);
        setIsLoading(false);
        console.log("offerData ==>", offerData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <div className="container">
      <p>Loading ...</p>
    </div>
  ) : (
    <div className="main">
      <div className="container">
        <div className="offer-left">
          <img src="#" alt="" className="offer-img" />
        </div>
        <div className="offer-right">
          <p className="offer-price"></p>
          <div className="offer-infos">
            <div className="offer-brand"></div>
            <div className="offer-size"></div>
            <div className="offer-state"></div>
            <div className="offer-color"></div>
            <div className="offer-location"></div>
          </div>
        </div>
        <p>l'ID de cette offre est : {id}</p>
      </div>
    </div>
  );
};

export default Offer;
