import React from "react";

const NavBar = () => {
  const fordLogo = "/ford_logo.png";

  return (
    <nav className="flex justify-between items-center max-container">
      <img src={fordLogo} className="w-32 m-5 ml-7" />
      <div className="flex-1">
        <ul className="flex-1 flex justify-center items-center gap-16 font-sans m-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
        </ul>
        <hr className=" border-b-1  m-auto border-black w-[600px]" />
      </div>
    </nav>
  );
};

export default NavBar;
