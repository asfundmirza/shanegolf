import React, { useContext } from "react";
import { PricingContext } from "../../context/PricingContext";

const Checkout = () => {
  const { selectedAddOns, totalPrice, selectedSuite } =
    useContext(PricingContext);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total Price: ${totalPrice}</p>
      <p>Selected Suite: {selectedSuite}</p>
      <h3>Selected Add-Ons:</h3>
      <ul>
        {selectedAddOns.map((addOn, index) => (
          <li key={index}>
            {addOn.name} - ${addOn.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checkout;
