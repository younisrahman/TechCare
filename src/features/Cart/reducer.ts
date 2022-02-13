import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProductTypes } from '../../../types';
interface IState {
  cart: ProductTypes[];
}

const initState: IState = {
  cart: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addtoCart: (state, action: PayloadAction<ProductTypes>) => {
      let index = state.cart.findIndex(x => x.id === action.payload.id);
      if (index > -1) {
        state.cart[index].quantity = parseInt(state.cart[index].quantity) + 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removefromCart: (state, action: PayloadAction<ProductTypes>) => {
      let index = state.cart.findIndex(x => x.id === action.payload.id);
      if (index > -1) {
        state.cart[index].quantity = parseInt(state.cart[index].quantity) - 1;
        if (state.cart[index].quantity === 0) {
          state.cart.splice(index, 1);
        }
      }
    },
  },
});
export const { addtoCart, removefromCart } = CartSlice.actions;

export default CartSlice;
