import React from "react";

const NavBar = () => {
  const fordLogo = "/ford_logo.png";
  return (
    <nav className="flex justify-between items-center p-4  bg-[#545c45] text-white font-s">
      <div className="ml-[50px]">
        <img src={fordLogo} alt="ford" width={100} />
      </div>

      <ul className="hidden xl:flex md:flex justify-center items-center gap-10">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Cars</a>
        </li>
        <li>
          <a href="/contact">Contact us</a>
        </li>
        <li>
          <a href="/services">About us</a>
        </li>
      </ul>

      <div className="flex gap-4 mr-[50px]">
        <button className="bg-[#AAF528] p-2 text-black rounded-lg hover:bg-[#94c246] transition-all">
          Log in
        </button>
        <button className="bg-[#AAF528] p-2 text-black rounded-lg hover:bg-[#94c246] transition-all">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
