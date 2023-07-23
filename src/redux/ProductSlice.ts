
import { IProduct } from "@/interface/IProduct";
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "./ProductList";



interface ProductState {
	products: IProduct[];
	isLoading: boolean;
	error: string;
}

const initialState : ProductState = {
	products: [],
	isLoading: false,
	error: '',
}

export const productSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchProducts.fulfilled.type]: (state , action : PayloadAction<IProduct[]>) => {
			state.isLoading = false
			state.error = '';
			state.products = action.payload
		},
		[fetchProducts.pending.type]: (state ) => {
			state.isLoading = true;
		},
		[fetchProducts.rejected.type]: (state , action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload
		},
	}
})

export default productSlice.reducer;