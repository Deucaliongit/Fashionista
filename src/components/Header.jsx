import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 40 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-6 shadow-md" : "bg-none py-6"
      } sticky top-0 w-full z-10 transition-all border-b`}
    >
      <div className="flex mx-auto px-4 lg:px-28 items-center justify-between">
        <Link to={"/"}>
          <div>
            <h1 className="text-slate-800 font-extrabold lg:text-lg uppercase">
              Sherin Store
            </h1>
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiShoppingBag className="text-slate-800 text-[20px]" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[16px] h-[16px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
