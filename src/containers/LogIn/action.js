import { LogInTypes } from "./types";

export const logInRequest = (username,password) => ({
    type:LogInTypes.LOGIN_REQUEST,
    payload:{
        username:username,
        password:password
    }
})
export const logInSuccess = user => ({
    type:LogInTypes.LOGIN_SUCCESS,
    payload:user
})

export const logInFail = error => ({
    type:LogInTypes.LOGIN_FAIL,
    payload:error
})
export const logOutSuccess = () => ({
    type: LogInTypes.LOGOUT_SUCCESS,
});