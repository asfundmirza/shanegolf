import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useContext } from "react";
import { PricingContext } from "../../context/PricingContext";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test secret API key.
const stripePromise = loadStripe(
  "pk_test_51Q2m3dLloTOv0NxjOEa0Ol1A8sdeU6NBujTaGVETgfOa4XUh9yK4UD5v6yZRwR5Pl6WLebd6NAYGzkWjTh9WkZhv008CQR6XmD"
);

const StripeForm = () => {
  const { totalPrice, selectedSuite, selectedAddOns } =
    useContext(PricingContext);
  const fetchClientSecret = useCallback(() => {
    return fetch("http://localhost:4242/create-checkout-session", {
      // Use the full backend URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        selectedSuite: selectedSuite, // Send selectedSuite value from context
        totalPrice: totalPrice,
        // customer_email: "shoaibraza.5520@gmail.com",
        selectedAddOns: selectedAddOns, // Send totalPrice value from context
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch client secret");
        }
        return res.json();
      })
      .then((data) => data.clientSecret)
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
};

export default StripeForm;
