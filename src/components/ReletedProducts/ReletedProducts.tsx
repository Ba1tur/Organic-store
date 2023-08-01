import { useAppSelector } from "@/hooks/redux";
import React from "react";
import Loader from "../UI/Loader";
import ProductCard from "../ProductCard/ProductCard";

const ReletedProducts = () => {
  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );
  return (
    <section className="containers">
      <h1 className="robotoFont text-[#274C5B] text-center text-[50px] font-extrabold mt-[180px]">Releted Products</h1>
      <div className="w-full grid grid-cols-4 gap-5 h-[460px] overflow-hidden mt-10 mb-[120px]">
        {isLoading && <Loader></Loader>}
        {error && <h1>{error}</h1>}
        {products.map((product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </section>
  );
};

export default ReletedProducts;
