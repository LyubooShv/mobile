import { RegisterTypes } from "./types";

export const registerRequest = (username,password) => ({
    type:RegisterTypes.REGISTER_REQUEST,
    payload:{
        username:username,
        password:password
    }
})
export const registerSuccess = user => ({
    type:RegisterTypes.REGISTER_SUCCESS,
    payload:user
})

export const registerFail = error => ({
    type:RegisterTypes.REGISTER_FAIL,
    payload:error
})
