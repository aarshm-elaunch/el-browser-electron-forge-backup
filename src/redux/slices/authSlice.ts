import { createSlice } from '@reduxjs/toolkit';
import { User } from 'src/types/data';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
        token: localStorage.getItem('token') || null,
        userInfo: null as User | null
    },
    reducers: {
        setAuthenticatationFlag: (state, action) => {
            state.isAuthenticated = action.payload;
            localStorage.setItem('isAuthenticated', action.payload.toString());
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
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

export const { setAuthenticatationFlag, setToken, logOut, setUserInfo } = authSlice.actions;
export default authSlice.reducer;