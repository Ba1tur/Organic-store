import Image from "next/image";
import React from "react";

const OurProduct = () => {
  const database = [
    {
      id: 1,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 2,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 3,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 4,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 5,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 6,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 7,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
    {
      id: 8,
      type: "Vegetable",
      img: "/brokoli.png",
      name: "Calabrese Broccoli",
      discount: 20,
      price: 13,
    },
  ];
  return (
    <section className="containers bg-white" style={{ height: "900px" }}>
      <h2 className="yellowFont text-center text-4xl text-[#7EB693] font-normal">
        Categories
      </h2>
      <h1 className="text-center robotoFont text-[50px] mt-[8px] font-extrabold text-[#274C5B] leading-[50px]">
        Our Products
      </h1>
      <div className="w-full grid grid-cols-4 gap-5 mt-10">
        {database.map((item) => {
          return (
            <div className="max-w-[355px] w-full p-7 h-[448px] bg-[#F9F8F8] rounded-[30px]">
              <div className="openFont w-[96px] h-[31px] rounded-lg bg-[#274C5B] text-white text-[15px] text-center pt-[4px] font-semibold">
                {item.type}
              </div>
              <Image
                src={item.img}
                alt="brokoli.png"
                width={375}
                height={384}
                className="mix-blend-multiply"
              />
              <p className="robotoFont text-[20px] font-semibold text-[#274C5B] ">
                {item.name}
              </p>
              <hr className="bg-[#DEDDDD] mt-3" />
              <div className="flex justify-between mt-2">
                <div className="flex gap-2">
                  <s className="openFont text-[15px] pt-1 font-semibold text-[#B8B8B8] ">
                    ${item.discount}.00
                  </s>
                  <span className="openFont text-[18px] font-bold text-[#274C5B] ">
                    ${item.price}.00
                  </span>
                </div>
                <Image src="/Star.svg" alt="start.svg" width={84} height={19} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex justify-center">
        <button className="robotoFont mt-6 text-xl mt-11 font-bold  text-white bg-[#274C5B] h-20 rounded-2xl w-[220px]">
		  Load More
        </button>
      </div>
    </section>
  );
};

export default OurProduct;
