import BasketCard from "@/components/BasketCard/BasketCard";
import ProductCard from "@/components/ProductCard/ProductCard";
import Loader from "@/components/UI/Loader";
import { useAppSelector } from "@/hooks/redux";
import React from "react";

const Basket = () => {
  const { basket, error, isLoading } = useAppSelector(
    (state) => state.basketReducer
  );

  console.log(basket);



  return (
    <section>
      <main className='bg-[url("/Background-Cart.jpg")]  w-full bg-center  h-[470px] bg-no-repeat'>
        <h1 className="text-center text-[#274C5B] text-[70px] font-extrabold robotoFont pt-[184px]">
          Cart
        </h1>
      </main>
      <div className="containers grid grid-cols-2 gap-5 h-[930px] overflow-hidden mt-10">
        {isLoading && <Loader></Loader>}
        {error && <h1>{error}</h1>}
        {basket?.length !== 0 ? (
          basket?.map((basket) => {
            return <BasketCard basket={basket} />;
          })
        ) : (
          <h1 className="text-[#274C5B] text-[70px] font-extrabold robotoFont pt-[44px]">
            Корзина пуста
          </h1>
        )}
      </div>
    </section>
  );
};

export default Basket;
