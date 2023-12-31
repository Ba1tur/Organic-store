// import { fetchProducts } from '@/redux/ProductList';
import axios from "axios";
import { IProduct } from "@/interface/IProduct";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async (num: number, thunkAPI) => {
    try {
      const response = await axios.get<IProduct[]>(
        `https://organic-store-backend.vercel.app/products?_limit=${num}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Ошибка с сервера");
    }
  }
);
