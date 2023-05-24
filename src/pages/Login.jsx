import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <form className="">
        <div className="flex flex-col bg-white rounded-md p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-center mb-4">
            <img src={Logo} alt="Logo" className="w-28" />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="font-semibold text-2xl text-orange-400 text-center mb-4">
              Sign In
            </h1>
            <input
              type="text"
              className="border border-gray-200 rounded-md text-gray-500 px-4 py-2 text-sm"
              placeholder="Username"
              required
            />
            <input
              type="password"
              className="border border-gray-200 rounded-md text-gray-500 px-4 py-2 text-sm"
              placeholder="Password"
              required
            />
            <button className="py-1 bg-red-400 rounded-full text-orange-100 font-semibold">
              Sign in{" "}
            </button>
            <p className="text-center text-red-500">This is an error</p>
          </div>
          <div>
            <span>
              Don't you have an account?{" "}
              <Link to={"/register"} className="font-semibold text-orange-400">
                Sign up
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
