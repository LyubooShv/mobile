import { LogInTypes } from "../containers/LogIn/types";

const INITIAL_STATE = {
    currentUser:null,
    error:null
}

const logInReducer = (state=INITIAL_STATE,action) => {
    switch (action.type){
        case LogInTypes.LOGIN_SUCCESS:
            return{
                ...state,
                currentUser:action.payload                    
        }
        case LogInTypes.LOGIN_FAIL:
            return{
                ...state,
                error:action.payload                     
        }
        case LogInTypes.LOGOUT_SUCCESS:
            return{
                ...state,
                currentUser:null,
                error:null                        
        };
        default:
            return state
    }
}
export default logInReducer