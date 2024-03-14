import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";

const Product = ({ dataProduct }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = dataProduct;
  return (
    <div>
      <div className="border border-gray-200 h-[300px] relative overflow-hidden group transition mb-4">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-w-[160px] group-hover:scale-110 trasition duration-300"
              src={image}
              alt="/"
            />
          </div>
          <div className="absolute top-6 -right-11 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 group-hover:right-5 transition-all duration-300">
            <button
              className="focus:outline-none focus:ring focus:ring-red-300"
              onClick={() => addToCart(id, dataProduct)}
            >
              <div className="flex justify-center items-center text-white bg-red-500 hover:bg-red-600 transition duration-300 w-12 h-12">
                <BsPlus className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-12 h-12 bg-white hover:bg-gray-100 trasition duration-300 flex justify-center items-center text-gray-500 drop-shadow-xl"
            >
              <BsEyeFill />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
      <Link to={`product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <h2 className="font-semibold ">$ {price}</h2>
    </div>
  );
};

export default Product;
