import React, { createContext, useState } from "react";

export const PricingContext = createContext();

export const PricingProvider = ({ children }) => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [selectedSuite, setSelectedSuite] = useState("");
  const [totalPrice, setTotalPrice] = useState(20);

  return (
    <PricingContext.Provider
      value={{
        selectedAddOns,
        setSelectedAddOns,
        selectedSuite,
        setSelectedSuite,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </PricingContext.Provider>
  );
};
