import React, { useEffect, useState, useContext } from "react";
import { PricingContext } from "../../context/PricingContext";
import { Link } from "react-router-dom";

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
    <div className="lg:relative lg:z-20 lg:mb-[750px] flex w-full flex-col bg-white ">
      <div className="flex items-center justify-center min-h-screen">
        <div className=" flex flex-col items-center justify-center gap-9 bg-green-600 text-white rounded-md shadow-md p-20">
          <h1 className="text-6xl font-bold mb-4">Payment Successful!</h1>
          <div className="flex gap-4 justify-between items-center">
            {invoiceUrl && (
              <a
                href={invoiceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex  w-fit  bg-white text-green-600 px-4 py-2 rounded-md"
              >
                View your invoice
              </a>
            )}
            <Link
              to="/home"
              className=" flex  w-fit  bg-white text-green-600 px-4 py-2 rounded-md"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
