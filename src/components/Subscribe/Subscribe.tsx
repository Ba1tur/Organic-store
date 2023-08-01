import Image from "next/image";
import React from "react";
import Button from "../UI/Button";

const Subscribe = () => {
  return (
    <section className="containers relative  z-10">
      <Image
        className="absolute -z-10"
        src="/subscribeBg.png"
        alt="subscribeBg.png"
        width={1420}
        height={323}
      />
		<div className="w-full h-full  px-[71px] pt-[105px] flex justify-between items-center">
			<h3 className="text-white text-[50px] robotoFont font-extrabold">Subscribe to <br /> our Newsletter</h3>
			<div>
				<input className="w-[349px] h-[80px] pl-[23px] outline-none rounded-2xl robotoFont text-[18px] text-[#ABABAB] " type="email" placeholder="Your Email Address" />
				<Button className="bg-[#274C5B] ml-[6px] text-white">Subscribe</Button>
			</div>
		</div>
    </section>
  );
};

export default Subscribe;
