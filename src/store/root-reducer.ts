import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { productSlice, CartSlice } from '@app/features';

const rootReducer = combineReducers({
  products: productSlice.reducer,
  cart: CartSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default rootReducer;
