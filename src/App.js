import React from "react";
import Navbar from "./components/navbar/Navbar";
import Semifooter from "./components/semifooter/SemiFooter";
import Footer from "./components/footer/Footer";
import Features from "./components/home/Features";
const App = () => {
  return (
    <>
      <Navbar />
      <Features />
      <Semifooter />
      <Footer />
    </>
  );
};

export default App;
