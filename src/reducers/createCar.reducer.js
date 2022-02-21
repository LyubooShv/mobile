import { CarsTypes } from "../containers/Home/types";

export const initialState = {
  error: null,
};

function createCarReducer(state = initialState, action) {
  switch (action.type) {
    case CarsTypes.CREATE_CAR_SUCCESS:
      return {
        ...state,
        createdCar: action.payload,
      };

    case CarsTypes.CREATE_CAR_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default createCarReducer;