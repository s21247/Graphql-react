import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../App/store";

export interface FavoritesCart {
    id?: string;
    name?: string;
    description?: string;
    price?: number;
    image?: string;
    isFavorite: boolean;
}

interface CartState {
    favorites: FavoritesCart[];
}

export const initialState: CartState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        favoritesItemAdded: {
            reducer(state, action: PayloadAction<FavoritesCart>) {
                const cartItem = state.favorites.find(item => item.id === action.payload.id)
                if (cartItem && typeof cartItem.isFavorite === 'boolean') {
                    cartItem.isFavorite = !cartItem.isFavorite
                } else
                    state.favorites.push(action.payload);
            },
            prepare(id, image, description, price, name, isFavorite) {
                return {
                    payload: {
                        id,
                        image,
                        description,
                        price,
                        name,
                        isFavorite,
                    },
                };
            },
        },
        favoritesItemRemoved: (state, action: PayloadAction<FavoritesCart["id"]>) => {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload);
        },
    }
});
export const selectFavoritesItems = (state: RootState) => state.favorites.favorites;

export const { favoritesItemAdded,favoritesItemRemoved } = favoritesSlice.actions;
export default favoritesSlice.reducer;
