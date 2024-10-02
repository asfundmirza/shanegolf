import React, { useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
// import { doc, setDoc, getDoc, deleteDoc } from "firebase/firestore";
// import { db } from "../firebase/config"; // Make sure to import your Firestore instance

const PasswordSetup = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = (useState < string) | (null > null);
  const [success, setSuccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handlePasswordChange = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!password || !confirmPassword) {
      setError("Please enter both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      if (user) {
        await updatePassword(user, password);

        // // Fetch the user document with email as ID
        // const oldUserDocRef = doc(db, "users", email);
        // const oldUserDoc = await getDoc(oldUserDocRef);

        // if (oldUserDoc.exists()) {
        //   const oldUserData = oldUserDoc.data();

        //   // Create new user document with UID as ID, transferring old data
        //   await setDoc(doc(db, "users", user.uid), {
        //     ...oldUserData,
        //     email: user.email,
        //     id: user.uid, // Update the id field to match the new document ID
        //     inviteStatus: "accepted", // Set the invite status to accepted
        //   });

        //   // Delete the old user document (with email as ID)
        //   await deleteDoc(oldUserDocRef);
        // } else {
        //   // If old document doesn't exist, create a new one with basic info
        //   await setDoc(doc(db, "users", user.uid), {
        //     email: user.email,
        //     id: user.uid,
        //     inviteStatus: "accepted", // Set the invite status to accepted
        //     // Add any other initial user data you want to store
        //   });
        // }

        // // Delete the document with email as ID, if it still exists
        // const emailDocRef = doc(db, "users", email);
        // await deleteDoc(emailDocRef);

        setSuccess(true);
        setError(null);

        // Redirect after successful password setup
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        setError("No user is signed in.");
      }
    } catch (error) {
      if (error instanceof Error) {
        setError("Error updating password: " + error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col gap-5">
        {error && <p className="text-red-500">{error}</p>}
        {success && (
          <p className="text-green-500">Password updated successfully!</p>
        )}
        <p className="text-gray-600">Set your password for {email}.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="p-2 rounded-md bg-gray-200 text-gray-700"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          className="p-2 rounded-md bg-gray-200 text-gray-700"
        />
        <button
          onClick={handlePasswordChange}
          className="p-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white"
        >
          Set Password
        </button>
      </div>
    </div>
  );
};

export default PasswordSetup;
