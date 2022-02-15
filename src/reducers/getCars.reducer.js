import { CarsTypes } from "../containers/Home/types";

const INITIAL_STATE = {
    cars:[],
    error:null
}

const getCarsReducer = (state=INITIAL_STATE,action) => {
    switch (action.type){
            case CarsTypes.GET_CARS_SUCCESS:
                return{
                    ...state,
                    cars:action.payload                    
                }
                case CarsTypes.GET_CARS_FAIL:
                    return{
                        ...state,
                        error:action.payload                     
                    }
                        default:
                            return state
    }
}
export default getCarsReducer