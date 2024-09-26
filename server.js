// This is your test secret API key.
import Stripe from "stripe";
import express from "express";
import cors from "cors";
// Remove the useContext and PricingContext import as they are not needed in the server-side code

// Initialize the app first
const app = express();

// Use CORS Middleware
app.use(cors()); // Allow all origins for testing, refine later for specific origins

// Enable JSON parsing for POST requests
app.use(express.json());

const stripe = new Stripe(
  "sk_test_51Q2m3dLloTOv0NxjmzOY0Ix6OJ6yJzspVykNm7luGFVqbOJd41rBh4T1ztqgtZlwBmfFYmXE3VUfktsYJHcWpgIC00ygcn3zWk"
);

app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:5173";

app.post("/create-checkout-session", async (req, res) => {
  console.log("Request received at /create-checkout-session");

  try {
    const { selectedSuite, totalPrice, customer_email, selectedAddOns } =
      req.body;

    const productName = selectedSuite && selectedSuite;
    const suitePrice = totalPrice && totalPrice;

    console.log("Selected Suite:", selectedSuite);
    const product = await stripe.products.create({
      name: productName,
      description: `ADD-ONS:\n${
        selectedAddOns && selectedAddOns.length > 22
          ? "All add-ons are included"
          : selectedAddOns && selectedAddOns.length > 0
          ? selectedAddOns.map((addOn) => `- ${addOn.name}`).join("\n")
          : "Only essential add-ons are included"
      }`,
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: suitePrice * 100,
      currency: "usd",
    });

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      invoice_creation: {
        enabled: true,
      },
      line_items: [
        {
          price: price.id,
          quantity: 1,
        },
      ],
      //   customer_email: session.customer_email,
      mode: "payment",
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    console.log("Session object:", session); // Log the session object

    res.json({ clientSecret: session.client_secret });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/session-status", async (req, res) => {
  const sessionId = req.query.session_id;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    res.json({
      status: session.status,
      //   status: "open",

      customer_email: session.customer_email,
    });
  } catch (error) {
    console.error("Error fetching session:", error);
    res.status(500).json({ error: "Failed to fetch session" });
  }
});

app.listen(4242, () => console.log("Running on port 4242"));
