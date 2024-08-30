import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <div className="flex w-full h-screen justify-center items-center flex-col gap-4 bg-black/25">
      <h1 className="text-4xl">Welcome to the Home Page!</h1>
      <button
        className=" bg-black text-white p-4 rounded-full"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
