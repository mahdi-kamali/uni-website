import { createSlice } from "@reduxjs/toolkit";

import axios from "axios"
import { USER_LOGIN_URL, USER_SIGNUP_URL } from "../../consts/API";



const userSlice = createSlice({
    name: "user",
    initialState: { value: null },
    reducers: {
        login: (state, action) => {
            const formData = action.payload
            axios({
                method: "post",
                url: USER_LOGIN_URL,
                data: formData
            })
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem("user", JSON.stringify(response.data.data))
                        window.location.reload();
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        },
        logOut: (state, action) => {
            state.value = null
            localStorage.removeItem("user")
        },
        signUp: (state, action) => {
        },
        fetchUser(state, action) {
            const user = JSON.parse(localStorage.getItem("user"));
            console.log(user);
            if (user === null || user?.value === null) {
                return
            }

            user.token = "Bearer " + user.token
            state.value = user
        }
    }
})


export default userSlice.reducer
export const { login, signUp, logOut, fetchUser } = userSlice.actions