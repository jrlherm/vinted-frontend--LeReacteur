import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation, Navigate } from "react-router-dom";

const Payment = ({ stripePromise, userToken }) => {
  const location = useLocation();
  const { price } = location.state;
  const { title } = location.state;

  console.log("name => ", title);
  console.log("price => ", price);

  return userToken ? (
    <div className="chekout">
      <Elements
        stripe={stripePromise}
        userToken={userToken}
        price={price}
        title={title}
      >
        <CheckoutForm price={price} title={title} />
      </Elements>
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default Payment;
