import React, { useState } from "react";
import { auth } from "../../firebase";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";

const InviteUser = () => {
  const [userEmail, setUserEmail] = useState("");

  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:5173/finishSignUp?email=" + userEmail,
    // This must be true.
    handleCodeInApp: true,
  };
  const handleInvite = async () => {
    const auth = getAuth();
    await sendSignInLinkToEmail(auth, userEmail, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", userEmail);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ...
      });
  };
  console.log(userEmail);
  return (
    <div className="flex w-full min-h-screen justify-center items-center ">
      <div className="flex flex-col gap-5">
        <input
          type="text"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter email"
          className="p-2 rounded-md bg-gray-100 text-gray-700"
        />
        <button
          onClick={handleInvite}
          className="p-2 rounded-md bg-green-600 text-white"
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export default InviteUser;
