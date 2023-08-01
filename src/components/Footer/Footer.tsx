import Image from 'next/image';
import React from 'react';

const Footer = () => {
	return (
		<footer className='containers'>
			<div className='mt-[190px] flex justify-between'>
				<div className='w-[285px]'>
				<h2 className='robotoFont text-[#274C5B] text-[30px] font-bold text-right'>Contact Us</h2>
				<h4 className='openFont text-right text-[18px] font-bold text-[#525C60]'>Email</h4>
				<p className='openFont text-right text-[18px] text-[#525C60]'>needhelp@Organia.com</p>
				<h4 className='openFont text-right text-[18px] font-bold text-[#525C60]'>Phone</h4>
				<p className='openFont text-right text-[18px] text-[#525C60]'>666 888 888</p>
				<h4 className='openFont text-right text-[18px] font-bold text-[#525C60]'>Address</h4>
				<p className='openFont text-right text-[18px] text-[#525C60]'>88 road, borklyn street, USA</p>
			</div>
			<div className='w-[543px] flex flex-col items-center '>
				<Image
            src="/Logo.svg" alt="logo.svg" width={200} height={56} objectFit="cover" />
				<p className='openFont text-center text-[18px] text-[#525C60]'>Simply dummy text of the printing and typesetting industry.
				Lorem Ipsum simply dummy text of the printing </p>
			</div>
			<div className='w-[285px] flex flex-col'>
				<h2 className='robotoFont text-[#274C5B] text-[30px] font-bold '>Utility Pages</h2>
				<a className='openFont  text-[18px] text-[#525C60]' href="#">Guide</a>
				<a className='openFont  text-[18px] text-[#525C60]' href="#"> 404 Not Found</a>
				<a className='openFont  text-[18px] text-[#525C60]' href="#">Password Protected</a>
				<a className='openFont  text-[18px] text-[#525C60]' href="#">Licences</a>
				<a className='openFont  text-[18px] text-[#525C60]' href="#">Changelog</a>
			</div>
			</div>
			
		</footer>
	);
};

export default Footer;