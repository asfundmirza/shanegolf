import React, { useState, useEffect, useContext } from "react";
import { PricingContext } from "../../context/PricingContext";
import { Navigate } from "react-router-dom";

const Return = () => {
  const { selectedSuite, selectedAddOns } = useContext(PricingContext);
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState("");
  const [invoiceUrl, setInvoiceUrl] = useState(""); // New state to store invoice URL
  const [retryCount, setRetryCount] = useState(0); // Track retry attempts

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get("session_id");

    const fetchSessionStatus = () => {
      fetch(`http://localhost:4242/session-status?session_id=${sessionId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          console.log("Session status: ", data.status);
          console.log(selectedAddOns, selectedSuite);

          setStatus(data.status);
          setCustomerEmail(data.customer_email);
          console.log(data.invoice_url);
          if (data.invoice_url) {
            setInvoiceUrl(data.invoice_url); // Store the invoice URL
          } else if (data.status === "complete" && retryCount < 3) {
            // Retry if the status is 'complete' but invoice_url is null
            setRetryCount(retryCount + 1);
            setTimeout(fetchSessionStatus, 2000); // Wait 2 seconds before retrying
          }
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    fetchSessionStatus();
  }, [retryCount]);

  if (status === "open") {
    return <Navigate to="/pricing" />;
  }

  if (status === "complete") {
    return <Navigate to={`/success?invoice_url=${invoiceUrl}`} />;
  }

  return null;
};

export default Return;
