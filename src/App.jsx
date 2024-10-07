import React from "react";
import { NavBar, Hero, Services, MoreInfo, Footer } from "./sections";

const App = () => {
  // const backgroundImageUrl = "/Ford_Mustang.jpg";

  // const parentStyle = {
  //   backgroundImage: `url(${backgroundImageUrl})`,
  //   backgroundRepeat: "no-repeat",
  //   backgroundSize: "cover", // Adjust as needed (cover, contain, etc.)
  //   backgroundColor: "black", // Fallback color if the image doesn't load
  //   minHeight: "100vh", // Ensure the background covers the entire viewport
  //   // opacity: 0.9, // Adjust the opacity of the background image
  // };

  // const overLay = {
  //   minHeight: "100vh",
  //   backgroundColor: "rgba(0, 0, 0, 0.35)", // Adjust the opacity of the overlay
  // };

  return (
    <div>
      <NavBar />
      <Hero />
      <Services />
      <MoreInfo />
      <Footer />
    </div>
  );
};

export default App;
