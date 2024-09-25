import React, { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const basePrice = 20;

  const addOnPrice = selectedAddOns.reduce(
    (total, addOn) => total + addOn.price,
    0
  );
  const essentialsFeatures = [
    "AI Chat Trained on OSHA & Regulations",
    "Toolbox Talk Generator",
    "Near Miss Tracker",
    "Hazard Input & Follow-up",
    "OSHA 300 Log Input & Reporting",
  ];
  const totalPrice = basePrice + addOnPrice;

  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prev) => {
      if (prev.some((item) => item.name === addOn.name)) {
        return prev.filter((item) => item.name !== addOn.name);
      } else {
        return [...prev, addOn];
      }
    });
  };

  return (
    <PricingContext.Provider
      value={{ selectedAddOns, totalPrice, toggleAddOn, essentialsFeatures }}
    >
      {children}
    </PricingContext.Provider>
  );
};
