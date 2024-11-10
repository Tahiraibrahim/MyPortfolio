import React from 'react';
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner-bg.jpg)] bg-cover"
      style={{ backgroundSize: "29%", backgroundPosition: "left 100px top 100px" }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[70px] sm:text-[90px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p data-aos="zoom-in">I&apos;m</p>
            <p data-aos="zoom-in">Tahira</p>
            <p data-aos="zoom-in">Ibrahim</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
