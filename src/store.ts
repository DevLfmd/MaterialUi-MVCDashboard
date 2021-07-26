import { configureStore } from '@reduxjs/toolkit';
import authSlice from './store/auth/reducer';
import cartSlice from './store/cart/reducer';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;