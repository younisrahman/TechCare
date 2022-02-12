import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IState {
  cart: object[];
}

const initState: IState = {
  cart: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState: initState,
  reducers: {
    addtoCart: (state, action: PayloadAction<object>) => {
      let index = state.cart.findIndex(x => x.id === action.payload.id);
      if (index > -1) {
        state.cart[index].quantity = parseInt(state.cart[index].quantity) + 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    removetoCart: (state, action: PayloadAction<object>) => {
      let index = state.cart.findIndex(x => x.id === action.payload.id);
      if (index > -1) {
        state.cart[index].quantity = parseInt(state.cart[index].quantity) - 1;
      } else {
        state.cart.splice(index, 1);
      }
    },
  },
});
export const { addtoCart } = CartSlice.actions;

export default CartSlice;
