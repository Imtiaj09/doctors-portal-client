import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, appointmentDate, slot } = booking;
  return (
    <div>
      <h2 className="text-3xl font-bold">Payment for {treatment}</h2>
      <p className="text-xl">
        Please Pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutFrom booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
