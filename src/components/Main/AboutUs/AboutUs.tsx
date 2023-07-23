import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full mt-[190px] bg-[#F9F8F8]">
      <div className="containers h-[900px] flex items-center pt-20">
        <Image
          src="/AboutUsBg.png"
          alt="aboutUs-bg.img"
          width={841}
          height={867}
          objectFit="cover"
        />
        <div className="h-[617px]">
          <h2 className="yellowFont text-4xl text-[#7EB693] font-normal">
            About Us
          </h2>
          <h1 className="robotoFont text-[50px] mt-[10px] font-extrabold text-[#274C5B] leading-[50px]">
            We Believe in Working Accredited Farmers
          </h1>
          <p className="openFont text-[18px] mt-[14px] font-normal text-[#525C60]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown br printer took a galley.
          </p>
          <div className="mt-12">
            <div className="flex gap-5">
              <Image
                src="/coffe.svg"
                alt="coffe.svg"
                width={101}
                height={101}
              />
              <div>
                <h5 className="robotoFont text-[25px] font-extrabold text-[#274C5B]">
                  Organic Foods Only
                </h5>
                <p className="openFont mt-1 text-[18px] font-normal">
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex gap-5 mt-7">
              <Image
                src="/standartlogo.svg"
                alt="coffe.svg"
                width={101}
                height={101}
              />
              <div>
                <h5 className="robotoFont text-[25px] font-extrabold text-[#274C5B]">
                Quality Standards
                </h5>
                <p className="openFont mt-1 text-[18px] font-normal">
                  Simply dummy text of the printing and typesetting <br />{" "}
                  industry. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <button className="robotoFont mt-6 text-xl mt-11 font-bold text-white bg-[#274C5B] h-20 rounded-2xl w-[220px]">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
