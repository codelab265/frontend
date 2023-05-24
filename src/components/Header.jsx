import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Header = () => {
  return (
    <header className="h-14 flex justify-between items-center px-4 py-2">
      <div>
        <img src={Logo} alt="Logo" className="w-12" />
      </div>
      <div className="space-x-2">
        <Link
          className="font-semibold capitalize hover:text-red-400 cursor-pointer"
          to="/?category=art"
        >
          ART
        </Link>
        <Link
          className="font-semibold capitalize hover:text-red-400 cursor-pointer"
          to="/?category=art"
        >
          TECHNOLOGY
        </Link>
        <Link
          className="font-semibold capitalize hover:text-red-400 cursor-pointer"
          to="/?category=art"
        >
          SPORT
        </Link>
        <Link
          className="font-semibold capitalize hover:text-red-400 cursor-pointer"
          to="/?category=art"
        >
          FOOD
        </Link>
        <Link
          className="font-semibold capitalize hover:text-red-400 cursor-pointer"
          to="/?category=art"
        >
          FITNESS
        </Link>

        <span>Mphatso</span>
        <span>Logout</span>
        <span className="bg-red-400 py-1 px-2 text-red-100 rounded-md hover:bg-[#f1f1f1] hover:text-red-400 hover:outline hover:outline-red-400 transition-all duration-300">
          <Link to="/create">Create</Link>
        </span>
      </div>
    </header>
  );
};

export default Header;
