import Button from "@/components/UI/Button";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-center relative z-10 mb-[125px]" style={{ backgroundImage: 'url("/main.png")' }}>
		<Image className="absolute -z-10 left-0 right-0 mr-auto ml-auto" src='/Background Patterns.png' alt="backg" width={1920} height={898}/>
      <main className="h-[898px] containers">
        <div className="pt-[247px]">
          <h2 className="yellowFont text-[#68A47F] text-4xl font-normal">100% Natural Food</h2>
          <h1 className="robotoFont mt-3 text-[#274C5B] text-[70px] font-black leading-[normal]">Choose the best <br /> healthier way <br /> of life</h1>
		      <Button className={"bg-[#EFD372]"}> Shop Now</Button>
        </div>
      </main>
    </section>
  );
};

export default Hero;
