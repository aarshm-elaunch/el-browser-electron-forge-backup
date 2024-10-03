import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        token: localStorage.getItem('token') || null,
    },
    reducers: {
        setAuthenticatationFlag: (state, action) => {
            state.isAuthenticated = action.payload;
            localStorage.setItem('isAuthenticated', action.payload.toString());
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('token');
        },
    },
});

export const { setAuthenticatationFlag, setToken, logOut } = authSlice.actions;
export default authSlice.reducer;