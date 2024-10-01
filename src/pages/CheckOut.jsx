import React from "react";
import CheckoutDetails from "../components/checkout/CheckoutDetails";
import StripeForm from "../components/checkout/StripeForm";
const Checkout = () => {
  return (
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <div className="w-full mx-auto md:py-20">
        <StripeForm />
      </div>
    </div>
  );
};

export default Checkout;
