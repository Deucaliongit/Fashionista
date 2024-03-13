import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 px-0 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`product/${id}`}
              className="text-sm uppercase hover:underline max-w-[240px] text-slate-800 font-medium"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hove:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px]">
            <div className="h-full max-w-[100px flex flex-1 justify-center items-center cursor-pointer border text-slate-900">
              <div className="h-full flex flex-1 justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="h-full flex justify-center items-center cursor-pointer px-2">
                {amount}
              </div>
              <div className="h-full flex flex-1 justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="flex-1 flex justify-end items-center font-medium text-slate-900">{`$ ${parseFloat(
              price * amount
            ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
