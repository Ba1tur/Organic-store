import { ulData } from "@/constants/header";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="containers bg-white">
      <nav className="flex items-center justify-between h-36 w-full">
        <div className="flex justify-between w-[782px]">
          <Image
            src="/Logo.svg" alt="logo.svg" width={200} height={56} objectFit="cover"
          />
          <ul className="flex items-center gap-6">
            {ulData.map((li) => {
              return (
                <li>
                  <a className=" text-xl font-bold" href="#">{li.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center justify-between w-[553px] gap-4">
				<input className="rounded-[36px] w-96 h-14  outline-none bg-zinc-50" type="text" />
				<div className="flex items-center pl-1 pr-6 text-[#274C5B] text-lg font-semibold justify-between rounded-[36px] w-[159px] h-[66px] border border-gray-300"><Image src='/Cart Icon.svg' alt="cart.svg" width={57} height={56}/>Cart (0)</div>
		  </div>
      </nav>
    </header>
  );
};

export default Header;
