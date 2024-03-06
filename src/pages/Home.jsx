import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";

const Home = () => {
  const { products } = useContext(ProductContext);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <section className="py-16">
      <div className="p-[30px] lg:p-0 mx-auto">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:px-[80px] lg:px-[120px] px-4 gap-8">
          {filteredProducts.map((products) => (
            <Product dataProduct={products} key={products.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
