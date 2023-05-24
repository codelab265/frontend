import React from "react";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-[95%]">
      <img src={Logo} alt="logo" className="w-12" />
      <span className="ml-6">
        Powered By <strong>Codelab265</strong>
      </span>
    </footer>
  );
};

export default Footer;
