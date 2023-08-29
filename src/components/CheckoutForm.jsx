import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ userToken, price, title }) => {
  const [isLoading, setisLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setisLoading(true);
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userToken,
      });
      console.log("stripeResponse =>", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      console.log("StripeToken ==> ", stripeToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log("response.data.token ==> ", response.data.token);
      setisLoading(false);

      if (response.data.status === "succeeded") {
        setPaymentCompleted(true);
        console.log("payment completed");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="checkout-form">
      <form onSubmit={handleSubmit}>
        <h1>Résumé de la commande</h1>
        <div className="payment-price">
          <span>Commande</span>
          <span>{price}</span>
        </div>
        <div className="payment-protection">
          <span>Commande</span>
          <span>0,40 €</span>
        </div>
        <div className="payment-shipping">
          <span>Frais de port</span>
          <span>1,99 €</span>
        </div>
        <CardElement />

        <div className="payment-product-name">
          <span>{title}</span>
        </div>
        {paymentCompleted === true ? (
          <p>Payement Completed</p>
        ) : (
          <input type="submit" disabled={isLoading} />
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
