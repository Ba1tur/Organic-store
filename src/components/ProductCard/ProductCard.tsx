import Image from 'next/image';
import React from 'react';

const ProductCard  = ({product} : any)  => {
	return (
		<div className="max-w-[355px] w-full p-7 h-[448px] bg-[#F9F8F8] rounded-[30px]">
		<div className="openFont w-[96px] h-[31px] rounded-lg bg-[#274C5B] text-white text-[15px] text-center pt-[4px] font-semibold">
		  {product.type}
		</div>
		<Image
		  src={product.img}
		  alt="brokoli.png"
		  width={375}
		  height={290}
		  className="mix-blend-multiply h-[290px]"
		/>
		<p className="robotoFont text-[20px] font-semibold text-[#274C5B] ">
		  {product.name}
		</p>
		<hr className="bg-[#DEDDDD] mt-3" />
		<div className="flex justify-between mt-2">
		  <div className="flex gap-2">
			 <s className="openFont text-[15px] pt-1 font-semibold text-[#B8B8B8] ">
				${product.discount}.00
			 </s>
			 <span className="openFont text-[18px] font-bold text-[#274C5B] ">
				${product.price}.00
			 </span>
		  </div>
		  <Image src="/Star.svg" alt="start.svg" width={84} height={19} />
		</div>
	 </div>
	);
};

export default ProductCard;