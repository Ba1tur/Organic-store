import React from 'react';

const Offer = () => {
	return (
		<section className='containers pb-6   flex justify-between '>
			<div className='max-w-[682px] w-full h-[367px] pt-28 pl-14' style={{backgroundImage: 'url("/NaturalBg.png")'}}>
				<h3 className='yellowFont text-4xl text-white font-normal'>Natural!!</h3>
				<h2 className='robotoFont text-[40px] mt-[5px] font-semibold text-white leading-[50px]'>Get Garden <br /> Fresh Fruits</h2>
			</div>
			<div className='max-w-[682px] w-full h-[367px] pt-28 pl-14 ' style={{backgroundImage: 'url("/OfferBg.png")'}}>
				<h3 className='yellowFont text-4xl text-[#7EB693] font-normal'>Offer!!</h3>
				<h2 className='robotoFont text-[40px] mt-[5px] font-semibold text-[#274C5B] leading-[50px]'>Get 10% off <br /> on Vegetables</h2>
			</div>
		</section>
	);
};

export default Offer;