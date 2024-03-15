import React from "react";
import img from "../assets/img/bg2.png";
import { Link } from "react-router-dom";
import women from "../assets/img/women.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[800px] bg-no-repeat bg-cover py-24"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex justify-around items-center">
        <div className="flex">
          <div>New Arrival</div>
        </div>
        <div className="">image</div>
      </div>
    </section>
  );
};

export default Hero;
