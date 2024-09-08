import React from "react";

const Hero = () => {
  return (
    <div className="grid grid-cols-3 m-auto text-black text-center py-20">
      <div>
        <h1 className="text-6xl font-bold">The All-New</h1>
        <h1 className="text-6xl font-bold ">Mustang</h1>

        <p className="mt-4">The most powerful and fastest Mustang</p>
        <p>with a supercharged 5.2L V8 engine.</p>
        {/* <button className="bg-black text-white px-4 py-2 mt-4">
          Learn More
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
