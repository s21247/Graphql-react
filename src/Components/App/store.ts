import {configureStore} from "@reduxjs/toolkit";
import shopReducer from '../Features/cart/cartSlice'
import favoritesSlice from "../Features/favorites/favoritesSlice";

export const store = configureStore({
    reducer: {
        cart: shopReducer,
        favorites: favoritesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch