import ProductDetails from '@/components/ProductDetails/ProductDetails';
import ReletedProducts from '@/components/ReletedProducts/ReletedProducts';
import { IProduct } from '@/interface/IProduct';
import { productService } from '@/services/product_service';
import {  NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect , useState } from 'react';

const Product : NextPage = () => {

	const {query} : any = useRouter()
	const [finalyProductById, setfinalyProductById] = useState<IProduct | null | undefined>(null);

	const [loading , setLoading] = useState<boolean>(false)
	

	useEffect(() => {
		setLoading(false)
		const fetchData = async () => {
			const productId  = await productService.getProductById(query?.id)
			setfinalyProductById(productId)
			setLoading(true)
		}
		fetchData()
		.catch(console.error)
	}, [query.id])

	
	if (!finalyProductById) {
		return <div className='h-screen mb-5 w-screen h-full my-loading-div'></div>
	 }

	return (
		<>
			<ProductDetails finalyProductById={finalyProductById} loading={loading}/>
			<ReletedProducts/>
		</>
	);
};


export default Product;