import Image from "next/image";
import React , {useState} from "react";
import Button from "../UI/Button";
import { IProduct } from "@/interface/IProduct";

type Props = {
	basket : IProduct
}

const BasketCard : React.FC<Props> = ({ basket }) => {
	const [count, setCount] = useState(1);
  	return (
    <div className="w-[655px] p-6 h-[278px] bg-[#F9F8F8] relative rounded-[30px] flex gap-4 ">
      <div className="openFont w-[96px] h-[31px] absolute rounded-lg bg-[#274C5B] text-white text-[15px] text-center pt-[4px] font-semibold">
        {basket.type}
      </div>
      <Image
        src={basket.img}
        alt="brokoli.png"
        width={255}
        height={240}
        className="mix-blend-multiply h-[200px] mt-[20px]"
      />
      <div className="mt-[40px] ">
        <p className="robotoFont text-[23px] font-semibold text-[#274C5B] ">
          {basket.name}
        </p>
        <div className="flex justify-between gap-3 mt-2">
          <div className="flex gap-2">
            <s className="openFont text-[15px] pt-1 font-semibold text-[#B8B8B8] ">
              ${basket.discount}.00
            </s>
            <span className="openFont text-[18px] font-bold text-[#274C5B] ">
              ${basket.price}.00
            </span>
          </div>
          <span className="openFont text-[18px] font-bold text-[#274C5B] ">
            Count : {basket.count}
          </span>
          <Image src="/Star.svg" alt="start.svg" width={84} height={19} />
        </div>
        <Button className="bg-[#274C5B] text-white w-[170px] text-[17px] h-[60px]">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default BasketCard;
