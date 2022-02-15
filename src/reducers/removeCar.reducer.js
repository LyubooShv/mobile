import { CarsTypes } from "../containers/Home/types";

export const initialState = {
  error: null,
};

function removeCarReducer(state = initialState, action) {
  switch (action.type) {
    case CarsTypes.REMOVE_CAR_SUCCESS:
      return {
        ...state,
        error: "",
      };

    case CarsTypes.REMOVE_CAR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default removeCarReducer;