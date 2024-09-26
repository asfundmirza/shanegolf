import React, { useEffect, useState, useContext } from "react";
import { PricingContext } from "../../context/PricingContext";

const Success = () => {
  const [invoiceUrl, setInvoiceUrl] = useState(null);
  const { selectedSuite, selectedAddOns } = useContext(PricingContext);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const invoiceUrl = urlParams.get("invoice_url");

    setInvoiceUrl(invoiceUrl);
  }, []);

  if (!invoiceUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className=" flex flex-col items-center justify-center gap-9 bg-green-600 text-white rounded-md shadow-md p-8">
        <h1 className="text-6xl font-bold mb-4">Payment Successful!</h1>

        {invoiceUrl && (
          <a
            href={invoiceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className=" flex justify-center items-center w-fit mx-auto bg-white text-green-600 px-4 py-2 rounded-md"
          >
            View your invoice
          </a>
        )}
      </div>
    </div>
  );
};

export default Success;
