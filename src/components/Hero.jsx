import React from "react";
import img from "../assets/img/bg22.png";
import { Link } from "react-router-dom";
import women from "../assets/img/women.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-[800px] bg-no-repeat bg-cover py-24"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="px-4 flex justify-around mx-auto h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[3px] bg-red-500 mr-3"></div>New Arrival
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            RAMADHAN SALE
            <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-slate-900"
          >
            Discover More
          </Link>
        </div>
        <div className="hidden lg:block">
          <img src={women} className="w-[505px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
