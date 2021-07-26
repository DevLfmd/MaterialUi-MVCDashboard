import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
    id: string;
};

interface Cart {
    items: CartItem[];
};

const initialState: Cart = {
    items: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        store: (state, action: PayloadAction<CartItem>) => {
            state.items.push({ id: action.payload.id });
        },
        destroy: (state, action: PayloadAction<CartItem>) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        }, 
    },
});

export const { store, destroy } = cartSlice.actions;
export default cartSlice.reducer;