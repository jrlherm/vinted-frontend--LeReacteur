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
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setOfferData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="container">
      <p>Loading ...</p>
    </div>
  ) : (
    <div className="offer">
      <div className="container">
        <div className="offer-left">
          <img src={offerData.product_image.url} alt="" className="offer-img" />
        </div>
        <div className="offer-right">
          <p className="offer-price">{offerData.product_price} €</p>
          <button>Acheter</button>
          <button>Faire une offre</button>
          <div className="offer-infos">
            {offerData.product_details.map((detail, index) => (
              <div
                key={index}
                className={`offer-${Object.keys(detail)[0].toLowerCase()}`}
              >
                <p>
                  <span>{Object.keys(detail)[0]}</span>
                  <span>{Object.values(detail)[0]}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="offer-name">{offerData.product_name}</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
