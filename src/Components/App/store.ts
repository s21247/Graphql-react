import {combineReducers, configureStore} from "@reduxjs/toolkit";
import shopReducer from '../Features/cart/cartSlice'
import favoriteReducer from "../Features/favorites/favoritesSlice";
import checkoutReducer from "../Features/checkout/checkoutSlice";
import storage from "redux-persist/lib/storage"
import {persistReducer, FLUSH,REGISTER,PERSIST,PAUSE,REHYDRATE,PURGE} from "redux-persist"

const reducers = combineReducers({
    cart: shopReducer,
    favorites: favoriteReducer,
    order: checkoutReducer,
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig,reducers)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH,REGISTER,PERSIST,PAUSE,REHYDRATE,PURGE]
        },
    }))
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch