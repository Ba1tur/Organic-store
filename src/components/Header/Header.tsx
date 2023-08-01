import { ulData } from "@/constants/header";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [count, setCount] = useState<number>(0);
  const {basket} = useAppSelector(state => state.basketReducer)
  
  useEffect(() => {
    setCount(basket.length)
  },[basket])
  
  return (
    <header className="containers bg-white">
      <nav className="flex items-center justify-between h-36 w-full">
        <div className="flex justify-between w-[782px]">
          <Link href='/'>
          <Image
            src="/Logo.svg" alt="logo.svg" width={200} height={56} objectFit="cover"
          />
          </Link>
          
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
				<Link href='/basket' className="flex items-center pl-1 pr-6 text-[#274C5B] text-lg font-semibold justify-between rounded-[36px] w-[159px] h-[66px] border border-gray-300"><Image src='/Cart Icon.svg' alt="cart.svg" width={57} height={56}/>Cart ({count})</Link>
		  </div>
      </nav>
    </header>
  );
};

export default Header;
