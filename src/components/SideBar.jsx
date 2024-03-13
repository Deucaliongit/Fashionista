import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  // const { cart, setCart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[40vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-auto`}
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
      <div>
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div>
        <div className="w-full flex justify-between items-center py-2">
          <div>
            <span>Total :</span>$ 10000
          </div>
          <div className="py-4 cursor-pointer bg-red-500 text-white w-10 h-10 flex justify-center items-center hover:bg-red-600 hover:text-gray-100 transition">
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
