import ProductCard from '@/components/ProductCard/ProductCard';
import Loader from '@/components/UI/Loader';
import { useAppSelector } from '@/hooks/redux';
import React from 'react';


const Shop = () => {
	const { products, isLoading, error } = useAppSelector(
		(state) => state.productReducer
	 );
	return (
		<section className='containers'>
			<h1 className='text-center text-[#274C5B] text-[70px] font-extrabold robotoFont pt-[24px]'>Shop </h1>
			<div className="w-full grid grid-cols-4 gap-5  overflow-hidden mt-10 mb-[120px]">
				{isLoading && <Loader></Loader>}
       	 {error && <h1>{error}</h1>}
       	 {products.map((product) => {
          return <ProductCard product={product} />;
      	  })}
			</div>
			
		</section>
	);
};

export default Shop;