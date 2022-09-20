import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../../App/store";
import {PURGE} from "redux-persist";

export interface ItemCart {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  quantity?: number;
}

interface CartState {
  value: ItemCart[];
}

export const initialState: CartState = {
  value: [],
};

const shopSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartItemAdded: {
      reducer(state, action: PayloadAction<ItemCart>) {
        const cartItem = state.value.find(item => item.id === action.payload.id)
        if(cartItem && typeof cartItem.quantity === 'number') {
          cartItem.quantity += 1
        }else
        state.value.push(action.payload);
      },
      prepare(id, image, description, price, name, quantity) {
        return {
          payload: {
            id,
            image,
            description,
            price,
            name,
            quantity,
          },
        };
      },
    },
    cartItemRemoved: (state, action: PayloadAction<ItemCart["id"]>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
    cartItemDecrementQuantity: (state, action: PayloadAction<ItemCart["id"]>) => {
      const cartItem = state.value.find((item) => item.id === action.payload);
      if (cartItem && typeof cartItem.quantity === "number")
        cartItem.quantity--;
    },
    cartItemIncrementQuantity: (state, action: PayloadAction<ItemCart["id"]>) => {
        const cartItem = state.value.find((item) => item.id === action.payload);
        if (cartItem && typeof cartItem.quantity === "number")
            cartItem.quantity++;
    }
  },
  extraReducers: builder => {
    builder.addCase(PURGE, (state) => {
      // const storedState = localStorage.getItem("persist:root")
      // const index = 1
      //  storedState?.slice(index,1)
      // localStorage.setItem('persist:root', storedState!)
    })
  }
});
export const selectShopCart = (state: RootState) => state.cart.value;

export const { cartItemAdded, cartItemRemoved, cartItemDecrementQuantity, cartItemIncrementQuantity } = shopSlice.actions;
export default shopSlice.reducer;
