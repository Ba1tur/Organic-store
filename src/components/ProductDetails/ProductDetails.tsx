import Image from "next/image";
import React , {useState} from "react";
import Button from "../UI/Button";
import { IProduct } from "@/interface/IProduct";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { basketSlice } from "@/redux/BasketSlice";
import {  notification } from 'antd';

type Props = {
	finalyProductById : IProduct
}

type NotificationType = 'success';

	const ProductDetails : React.FC<Props> = ({finalyProductById}) => {
		
		const dispatch = useAppDispatch()
		const [count, setCount] = useState<number>(1);	
		const [api, contextHolder] = notification.useNotification();
		

		const openNotificationWithIcon = (type: NotificationType) => {
		  api[type]({
			 message: 'Successfully added to cart',
			 description:
				'If you want to buy an item, go to the shopping cart',
		  });
		}

		const {addToCart} = basketSlice.actions

		const handleAddToCart = () => {
			const cartItem = {
			  ...finalyProductById,
			  count: count,
			  id: Date.now()
			};
	  
			dispatch(basketSlice.actions.addToCart(cartItem));
			openNotificationWithIcon('success')
		 };

	return (
		<div className="containers">
			{contextHolder}
			<div className="w-full mt-[114px] flex  justify-between">
			<div className="flex justify-center w-[591px] bg-[#F9F8F8] rounded-[30px] relative">
				<div className="openFont w-[73px] absolute left-[35px] top-[38px] h-[31px] rounded-lg bg-[#274C5B] text-white text-[15px] text-center pt-[4px] font-semibold">
					{finalyProductById?.type}
				</div>
				<Image
					src={finalyProductById?.img}
					className="mix-blend-multiply"
					alt="organick"
					width={600}
					height={600}
				/>
			</div>
			<div className="w-[658px] mt-[120px]">
				<h2 className="robotoFont text[#274C5B] font-semibold text-[40px]">{finalyProductById?.name}</h2>
				<Image className="mt-2" src="/Star.svg" alt="start.svg" width={84} height={19} />
				<div className="flex gap-2 mt-2">
					<s className="openFont text-[20px] pt-1 font-semibold text-[#B8B8B8] ">
					${finalyProductById?.discount}.00
					</s>
					<span className="openFont text-[23px] font-bold text-[#274C5B] ">
					${finalyProductById?.price}.00
					</span>
				</div>
				<p className="openFont text-[#525C60] text-[18px] font-extralight mt-7">{finalyProductById?.description}</p>
				<div className="mt-9 ">
					<span className="robotoFont text-[20px] text-[#274C5B] font-bold">Quantity :</span>
					<input type="number" min={1} max={100} 
					 value={count} 
					 onChange={(e) => setCount(parseInt(e.target.value, 10))} 
					className="w-[134px] h-[80px] bg-white outline-none  border-2 border-[#274C5B] rounded-2xl ml-5  text-center robotoFont text-[#274C5B] text-[20px] font-bold"/>
					<Button onClick={handleAddToCart}  className="bg-[#274C5B] text-white ml-5">Add To Cart</Button>
				</div>
			</div>
			</div>
		</div>
	);
	};

	export default ProductDetails;
