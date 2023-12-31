import ProductCard from '@/components/ProductCard/ProductCard';
import Button from '@/components/UI/Button';
import Loader from '@/components/UI/Loader';
import {  useAppSelector } from '@/hooks/redux';
import { IProduct } from '@/interface/IProduct';
import React , {useEffect , useState} from 'react';

const OrganickOffer = () => {

	const {products , error , isLoading} = useAppSelector(state => state.productReducer)
	const [vegetableProducts, setVegetableProducts] = useState<IProduct[]>([]);

	useEffect(() => {
			const filterProducts = products.filter(item => item.type === 'Vegetable');
			setVegetableProducts(filterProducts)	
	},[products])

	return (
		<section className='w-full bg-[#274C5B] mb-[120px] h-[1050px]'>
			<div className='containers'>
				<div className='flex items-end justify-between'>
					<div className='flex justify-end flex-col'>
						<h2 className="yellowFont  text-4xl text-[#7EB693] font-normal pt-[164px]">Offer</h2>
						<h3 className='robotoFont text-[50px] font-extrabold text-white'>We Offer Organic For You</h3>
					</div>
					<Button className='bg-[#EFD372] mt-0'>View All Product</Button>
				</div>
				<div className='grid grid-cols-4 mt-[50px] gap-[20px] h-[465px] overflow-hidden'>
					{isLoading && <Loader></Loader>}
					{error && <h1>{error}</h1>}
					{vegetableProducts.map((product) => {
						return (
							<ProductCard key={product.id} product={product}/>
						)
					})}
				</div>
			</div>
		</section>
	);
};

export default OrganickOffer;