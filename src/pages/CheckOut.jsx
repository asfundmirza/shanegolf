import React from "react";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import StripeForm from "../components/checkout/StripeForm";
const Checkout = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/2">
          <CheckoutDetails />
        </div>
        <div className="w-full md:w-1/2">
          <StripeForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
