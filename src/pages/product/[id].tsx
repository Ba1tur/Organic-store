import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ReletedProducts from '@/components/ReletedProducts/ReletedProducts';
import ShopSingle from '@/components/ShopSingle/ShopSingle';
import { IProduct } from '@/interface/IProduct';
import { productService } from '@/services/product_service';
import {  NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect , useState } from 'react';

const Product : NextPage = () => {

	const {query} : any = useRouter()
	const [finalyProductById, setfinalyProductById] = useState<IProduct | null | undefined>(null);
	

	useEffect(() => {
		const fetchData = async () => {
			const productId  = await productService.getProductById(query?.id)
			setfinalyProductById(productId)
		}
		fetchData()
		.catch(console.error)
	}, [query.id])

	
	if (!finalyProductById) {
		return <div>Loading...</div>; 
	 }

	return (
		<>
			<ShopSingle/>
			<ProductDetails finalyProductById={finalyProductById}/>
			<ReletedProducts/>
		</>
	);
};


export default Product;