import { CarsTypes } from "../containers/Home/types";

export const initialState = {
  error: null,
};

function editCarReducer(state = initialState, action) {
  switch (action.type) {
    case CarsTypes.EDIT_CAR_SUCCESS:
      return {
        ...state,
        message: "",
      };

    case CarsTypes.EDIT_CAR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default editCarReducer;