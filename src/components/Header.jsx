import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/signin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  const navLinks = [
    { path: "/home", name: "Home" },
    { path: "/pricing", name: "Pricing" },
    { path: "/company", name: "Company" },
    { path: "/contact", name: "Contact" },
    { path: "/careers", name: "Careers" },
    { path: "/invite", name: "Invite" },
  ];
  return (
    <header className="container mx-auto p-4 flex justify-between">
      <h1 className="text-xl">Welcome to the Home Page!</h1>
      <nav className="hidden md:flex flex-grow justify-center">
        <ul className="flex justify-center space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "bg-green-600 text-white py-2 px-3 rounded-xl font-bold"
                    : "hover:bg-green-600 py-2 px-3 rounded-xl text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className=" bg-green-600 text-white p-2 px-4 rounded-full"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </header>
  );
};

export default Header;
