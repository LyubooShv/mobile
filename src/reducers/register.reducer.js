import { RegisterTypes } from "../common/Register/types";

const INITIAL_STATE = {
    user:null,
    error:null
}

const registerReducer = (state=INITIAL_STATE,action) => {
    switch (action.type){
            case RegisterTypes.REGISTER_SUCCESS:
                return{
                    ...state,
                    user:action.payload                    
                }
                case RegisterTypes.REGISTER_FAIL:
                    return{
                        ...state,
                        error:action.payload                     
                    }
                        default:
                            return state
    }
}
export default registerReducer