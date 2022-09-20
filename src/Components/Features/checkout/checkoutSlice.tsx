import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../App/store";

export interface CheckoutOrder {
  id: string;
  firstName?: string;
  lastName?: string;
  country: string;
  streetAddress?: string;
  town: string;
  zip: string;
  phone?: string;
  email?: string;
  orderNotes?: string
  value: string;
  date: string;
}

interface CheckoutState {
  checkout: CheckoutOrder[];
}

export const initialState: CheckoutState = {
  checkout: []
}

const checkoutSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: {
      reducer(state, action: PayloadAction<CheckoutOrder>) {
        state.checkout.push(action.payload);
      },
      prepare(id,country, town, zip, value,date) {
        return {
          payload: {
            id,
            country,
            town,
            zip,
            value,
            date,
          },
        };
      },
    },
    userDetails: {
      reducer(state, action: PayloadAction<CheckoutOrder>) {
        const {firstName,lastName,phone,email,orderNotes,date} = action.payload
        const orderItem = state.checkout.find(item => item.id === action.payload.id)
        if(orderItem){
          orderItem.firstName = firstName
          orderItem.lastName = lastName
          orderItem.phone = phone
          orderItem.email = email
          orderItem.orderNotes = orderNotes
          orderItem.date = date
        }else
        state.checkout.push(action.payload);
      },
      prepare(id,country, town, zip, value,firstName,lastName,phone,email,orderNotes,date,streetAddress) {
        return {
          payload: {
            id,
            country,
            town,
            zip,
            value,
            firstName,
            lastName,
            phone,
            email,
            orderNotes,
            date,
            streetAddress
          },
        };
      },
    },

  },
});
export const selectCheckoutOrder = (state: RootState) => state.order.checkout;
export const { addOrder,userDetails } = checkoutSlice.actions;

export default checkoutSlice.reducer;
