import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";

const Offer = () => {
  const { id } = useParams();

  const [offerData, setOfferData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--vinted--vm2w9vyj7r62.code.run/offer/${id}`
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
    <Loader />
  ) : (
    <div className="offer">
      <div className="container">
        <div className="offer-left">
          <img src={offerData.product_image.url} alt="" className="offer-img" />
        </div>
        <div className="offer-right">
          <p className="offer-price">{offerData.product_price} €</p>
          <Link
            to="/payment"
            state={{
              title: offerData.product_name,
              price: offerData.product_price,
            }}
          >
            <button>Acheter</button>
          </Link>
          <button>Faire une offre</button>
          <div className="offer-infos">
            {offerData.product_details.map((detail, index) => (
              <div key={index}>
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
