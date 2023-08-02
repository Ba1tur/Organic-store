import { IProduct } from "@/interface/IProduct";
import axios from "axios";


const API_URL = 'https://organic-store-backend.vercel.app/'

axios.defaults.baseURL = API_URL

export const productService = {
	async getProductById(id : number | string){
		try{
			const {data} = await axios.get<IProduct[]>(`/products?id=${id}`)
			return data[0]
		} catch (e) {
			alert(e)
		}
	}
}