import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="flex w-ful h-screen justify-center items-center bg-black/25 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/signin" replace />}
      />

      <Route
        path="/signin"
        element={!user ? <SignIn /> : <Navigate to="/home" replace />}
      />
      <Route
        path="/signup"
        element={!user ? <SignUp /> : <Navigate to="/home" replace />}
      />

      <Route
        path="/"
        element={
          user ? (
            <Navigate to="/home" replace />
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
