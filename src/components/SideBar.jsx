import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  // const { cart, setCart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shoping Bag (0)</div>
        <div
          onClick={handleClose}
          className="cursor-pointer text-2xl w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
