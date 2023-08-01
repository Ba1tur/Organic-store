import ProductCard from "@/components/ProductCard/ProductCard";
import Button from "@/components/UI/Button";
import Loader from "@/components/UI/Loader";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { IProduct } from "@/interface/IProduct";
import { fetchProducts } from "@/redux/ProductList";
import Image from "next/image";
import React , {useEffect} from "react";

const OurProduct : React.FC = () => {
	const {products , error , isLoading} = useAppSelector(state => state.productReducer)
  return (
    <section className="containers bg-white" style={{ height: "900px" }}>
      <h2 className="yellowFont text-center text-4xl text-[#7EB693] font-normal">
        Categories
      </h2>
      <h1 className="text-center robotoFont text-[50px] mt-[8px] font-extrabold text-[#274C5B] leading-[50px]">
        Our Products
      </h1>
      <div className="w-full grid grid-cols-4 gap-5 h-[930px] overflow-hidden mt-10">
        {isLoading && <Loader></Loader>}
        {error && <h1>{error}</h1>}
        {products.map((product) => {
          return (
            <ProductCard product={product}/>
          );
        })}
      </div>
      <div className="w-full flex mt-20 justify-center">
		  <Button className={"text-white bg-[#274C5B]"}> Load More</Button>
      </div>
    </section>
  );
};

export default OurProduct;
