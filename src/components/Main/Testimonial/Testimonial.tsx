import { testimonialData } from '@/constants/testimonial';
import Image from 'next/image';
import React from 'react';

const Testimonial = () => {
	return (
		<section style={{background: 'url("/TestimonialBg.png") no-repeat center' , marginTop: '390px', height: '1267px'}}>
			<div className='containers'>
			<h2 className="yellowFont text-center text-4xl text-[#7EB693] font-normal pt-[164px]">  Testimonial </h2>
    	   <h1 className="text-center mt-2 robotoFont text-[50px] mt-[8px] font-extrabold text-[#274C5B] leading-[50px]">What Our Customer Saying?</h1>
			<div className='flex items-center mt-14 flex-col'>
				<Image src='/girlavatar.jpg' alt='girlavatar.jpg' width={125} height={156} className='rounded-[60px]'/>
				<Image className='mt-6' src="/Star.svg" alt="start.svg" width={122} height={26} />
				<p className='text-center mt-7 openFont text-[18px] text-[#525C60] leading-7'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
				<h4 className='robotoFont text-[25px] text-[#274C5B] mt-5 font-semibold'>Sara Taylor</h4>
				<span className='openFont text-[17px] text-[#525C60] font-extralight'>Consumer</span>
			</div>
			<div className='flex justify-center gap-[62px] mt-[204px]'>
				{testimonialData.map((item) => {
					return (
						<div className='w-[211px] h-[211px] rounded-[160px] border-[3px]  flex items-center justify-center border-[#7EB693] bg-[#F1F1F1]'>
					<div className=' rounded-[180px] bg-[#F1F1F1] '>
						<h2 className='text-[50px] text-center text-[#274C5B] robotoFont font-extrabold'>{item.number}</h2>
						<p className='text-center openFont text-[18px] font-semibold text-[#274C5B]'>{item.name}</p>
					</div>
				</div>
					)
				})}
			</div>
			</div>
		</section>
	);
};

export default Testimonial;