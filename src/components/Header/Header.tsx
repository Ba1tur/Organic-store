import { ulData } from "@/constants/header";
import { useAppSelector } from "@/hooks/redux";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const router = useRouter()
  const {basket} = useAppSelector(state => state.basketReducer)
  const {products} = useAppSelector(state => state.productReducer)

  
  useEffect(() => {
    setCount(basket?.length)
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
                  <Link className=" text-xl font-bold" href={li.link}>{li.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex items-center justify-between w-[553px] gap-4">
        <div className="w-96 flex flex-col items-center relative">
          <input value={search} onChange={(e) => setSearch(e.target.value)} className="rounded-[36px] mt-[90px] w-96 h-14 pl-[25px] robotoFont text-[17px]   outline-none bg-zinc-50" type="text" />
          <div className="w-[364px] h-[78px] mt-[10px] pl-2  ">
            {products.filter(item => {
              const searchTerm = search.toLowerCase();
              const name = item.name.toLowerCase();
              return searchTerm && name.startsWith(searchTerm);
            })
            .map((product) => {
              return (
                <p onClick={() => router.push(`/product/${product.id}`) || setSearch("")} className="robotoFont cursor-pointer text-[16px] h-[30px] pt-1 bg-zinc-50 text-[#274C5B] font-medium">{product.name}</p>
              )
            })}
          </div>
        </div>
				
				<Link href='/basket' className="flex items-center pl-1 pr-6 text-[#274C5B] text-lg font-semibold justify-between rounded-[36px] w-[159px] h-[66px] border border-gray-300"><Image src='/Cart Icon.svg' alt="cart.svg" width={57} height={56}/>Cart ({count})</Link>
		  </div>
      </nav>
    </header>
  );
};

export default Header;
