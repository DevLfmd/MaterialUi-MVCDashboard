import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
    token: string;
    username: string;
    loggedIn: boolean;
};

const initialState: Auth = {
    token: '',
    username: '',
    loggedIn: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<Auth>) => {
            const { username, token } = action.payload;

            state.username = username;
            state.token = token;
            state.loggedIn = true;

            localStorage.setItem('token', token);
        },
        signOut: (state) => {
            localStorage.removeItem('token');
            state.loggedIn = false;
        }
    },
});

export const { signIn } = authSlice.actions;
export default authSlice.reducer;