// import { fetchProducts } from '@/redux/ProductList';
import axios from "axios";
import { AppDispatch } from "./store";
import { IProduct } from "@/interface/IProduct";
import { productSlice } from "./ProductSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchProducts = () => async (dispatch : AppDispatch) => {
// 	try{
// 		dispatch(productSlice.actions.productsFetching())
// 		const response = await axios.get<IProduct[]>("http://localhost:4080/products")
// 		dispatch(productSlice.actions.productsFetchingSuccess(response.data))
// 	}catch (e : any) {
// 		dispatch(productSlice.actions.productsFetchingError(e.message))
// 	}
// }

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (num: number, thunkAPI) => {
    try {
      const response = await axios.get<IProduct[]>(
        `http://localhost:4080/products?_limit=${num}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка с сервера");
    }
  }
);
