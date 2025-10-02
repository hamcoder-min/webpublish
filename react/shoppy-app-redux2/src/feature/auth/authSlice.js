import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isLogin = !state.isLogin;
            const {userId} = action.payload;
            const loginInfo = {"token": "sjfwfd459436", "userId": userId};
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        },
        logout(state) {
            state.isLogin = !state.isLogin;
            localStorage.removeItem("loginInfo");
        }
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer