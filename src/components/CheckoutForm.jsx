import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ userToken, price, title }) => {
  const [isLoading, setisLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const total = price + 0.4 + 1.99;
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setisLoading(true);
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userToken,
      });
      // console.log("stripeResponse =>", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      // console.log("StripeToken ==> ", stripeToken);
      const response = await axios.post(
        "https://site--vinted--vm2w9vyj7r62.code.run/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      // console.log("response.data.token ==> ", response.data.token);
      setisLoading(false);

      if (response.data.status === "succeeded") {
        setPaymentCompleted(true);
        // console.log("payment completed");
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="checkout-form">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Résumé de la commande</h1>
          <div className="payment-input payment-price">
            <span>Commande</span>
            <span>{price} €</span>
          </div>
          <div className="payment-input payment-protection">
            <span>Protection de l'acheteur</span>
            <span>0,40 €</span>
          </div>
          <div className="payment-input payment-shipping">
            <span>Frais de port</span>
            <span>1,99 €</span>
          </div>
          <div className="payment-input payment-shipping">
            <span>Frais de port</span>
            <span>1,99 €</span>
          </div>
          <div className="payment-input payment-total">
            <span>Total</span>
            <span>{total} €</span>
          </div>
          <h2>Vos informations bancaires</h2>

          <CardElement />

          <div className="payment-product-name">
            <span>
              Il ne vous reste plus qu'un étape pour vous offrir{" "}
              <span className="bold">{title}</span>. Vous allez payer{" "}
              <span className="bold">{total}</span> € (frais de protection et
              frais de port inclus).
            </span>
          </div>
          {paymentCompleted === true ? (
            <div className="payment-completed">
              <h1>Merci. Votre paiement a bien été effectué.</h1>
              <Link to="/">
                <button>Retourner à l'acceuil</button>
              </Link>
            </div>
          ) : (
            <input type="submit" disabled={isLoading} />
          )}
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
