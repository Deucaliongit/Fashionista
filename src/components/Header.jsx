import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-black">
      <div className="text-white">Header</div>
      <div
        className="cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiShoppingBag className="" />
      </div>
    </header>
  );
};

export default Header;
