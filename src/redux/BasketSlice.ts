import { IProduct } from './../interface/IProduct';
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductList";



interface BasketState {
	basket: IProduct[];
	isLoading: boolean;
	error: string;
}

const initialState : BasketState = {
	basket: [],
	isLoading: false,
	error: '',
}

export const basketSlice = createSlice({
	name: 'basket',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.basket.push(action.payload)	
		},
		deleteCart: (state , action: PayloadAction<number>) => {
		    state.basket = state.basket.filter((item) => item.id !== action.payload)
		}
	}
})


export default basketSlice.reducer;