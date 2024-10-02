import React, { useState, useEffect } from "react";
import {
  getAuth,
  isSignInWithEmailLink,
  signInWithEmailLink,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const FinishSignUp = () => {
  const [emailFromUrl, setEmailFromUrl] = useState(""); // Store email from URL
  const [enteredEmail, setEnteredEmail] = useState(""); // Store user-entered email
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // For displaying success message

  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    // Check if the URL contains the sign-in link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const urlParams = new URLSearchParams(window.location.search);
      const emailFromQuery = urlParams.get("email"); // Retrieve the email from the URL query params
      if (emailFromQuery) {
        setEmailFromUrl(emailFromQuery); // Set the email from URL to state
      } else {
        setError("No email found in the URL.");
      }
    } else {
      setError("Invalid sign-in link.");
    }
  }, [auth]);

  const handleCompleteSignUp = async () => {
    try {
      if (!enteredEmail) {
        setError("Please enter your email address.");
        return;
      }

      // Compare entered email with email from the URL
      if (enteredEmail !== emailFromUrl) {
        setError(
          "Entered email does not match the email from the invitation link."
        );
        return;
      }

      // Complete sign-in process using email link
      await signInWithEmailLink(auth, enteredEmail, window.location.href);
      window.localStorage.removeItem("emailForSignIn");

      // Redirect or show success message
      setSuccess(true);
      setTimeout(() => {
        navigate("/passwordSetup", { state: { email: enteredEmail } });
      }, 2000);
    } catch (error) {
      setError("Error completing sign-up: " + error.message);
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col gap-5">
        {error && <p className="text-red-500">{error}</p>}
        {success && (
          <p className="text-green-500">Sign-up completed successfully!</p>
        )}
        <p className="text-gray-600">
          Enter the email address that matches the one used in your invitation.
        </p>
        <input
          type="text"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
          placeholder="Enter email"
          className="p-2 rounded-md bg-gray-100 text-gray-700"
        />
        <button
          onClick={handleCompleteSignUp}
          className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
        >
          Complete Sign-up
        </button>
      </div>
    </div>
  );
};

export default FinishSignUp;
