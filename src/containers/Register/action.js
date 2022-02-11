import { RegisterTypes } from "./types";

export const registerRequest = (username,password,firstName,lastName) => ({
    type:RegisterTypes.REGISTER_REQUEST,
    payload:{
        username,
        password,
        firstName,
        lastName
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
