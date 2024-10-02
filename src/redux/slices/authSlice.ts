import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: { 
        isAuthenticated: localStorage.getItem('isAuthenticated') === 'true' 
    },
    reducers: {
        setAuthenticatationFlag: (state, action) => {
            state.isAuthenticated = action.payload;
            localStorage.setItem('isAuthenticated', action.payload); 
        },
        logOut: (state) => {
            state.isAuthenticated = false;
            localStorage.removeItem('isAuthenticated'); 
        },
    }
})

export const { setAuthenticatationFlag, logOut } = authSlice.actions
export default authSlice.reducer
