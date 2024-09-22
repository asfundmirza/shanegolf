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
import PricingPage from "./pages/PricingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import TermsAndConditions from "./components/TermsAndConditions";
import Careers from "./pages/Careers";
import JobDescription from "./pages/JobDescription";
import Blog from "./pages/Blog";

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
      <div className="flex w-full h-screen justify-center items-center bg-black/25 text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/pricing"
          element={user ? <PricingPage /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/company"
          element={user ? <Company /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/faq"
          element={user ? <FAQ /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/careers/:jobTitle"
          element={
            user ? <JobDescription /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/careers"
          element={user ? <Careers /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/blog"
          element={user ? <Blog /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/terms&conditions"
          element={
            user ? <TermsAndConditions /> : <Navigate to="/signin" replace />
          }
        />
        <Route
          path="/contact"
          element={user ? <Contact /> : <Navigate to="/contact" replace />}
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

      <Footer />
    </Router>
  );
}

export default App;
