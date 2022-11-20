import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  console.log("booking data", booking);
  return (
    <div>
      <h2 className="text-2xl font-bold">Payment</h2>
    </div>
  );
};

export default Payment;
