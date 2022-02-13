import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';
import { ProductTypes } from '../../../types';
interface IState {
  products: ProductTypes[];
  categories: string[];
}

export const getProducts = createAsyncThunk('auth/getProducts', async () => {
  let response;
  try {
    response = await Axios.get('https://fakestoreapi.com/products');
    return {
      products: response.data,
    };
  } catch (e) {
    // return thunkApi.rejectWithValue(e);
  }
});

export const getCategory = createAsyncThunk('auth/getCategory', async () => {
  let response;
  try {
    response = await Axios.get('https://fakestoreapi.com/products/categories');
    return {
      categories: response.data,
    };
  } catch (e) {
    // return thunkApi.rejectWithValue(e);
  }
});

const initState: IState = {
  products: [],
  categories: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState: initState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getProducts.fulfilled, (state, { payload }) => {
      if (payload) {
        state.products = payload.products;
      }
    });
    builder.addCase(getCategory.fulfilled, (state, { payload }) => {
      if (payload) {
        state.categories = payload.categories;
      }
    });
  },
});
export default productSlice;
