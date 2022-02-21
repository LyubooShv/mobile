import { CarsTypes } from "./types";

export const getCarsRequest = () => ({
  type: CarsTypes.GET_CARS_REQUEST,
});
export const getCarsSuccess = (cars) => ({
  type: CarsTypes.GET_CARS_SUCCESS,
  payload: cars,
});

export const getCarsFail = (error) => ({
  type: CarsTypes.GET_CARS_FAIL,
  payload: error,
});



export function createCarRequest(
  token,
  data,
  user
) {
  return {
    type: CarsTypes.CREATE_CAR_REQUEST,
    payload: {
      token,
      data,
      user
    },
  };
}
    
export function createCarSuccess(createdCar) {
  return {
    type: CarsTypes.CREATE_CAR_SUCCESS,
    payload: createdCar,

  };
}

export function createCarError(error) {
  return {
    type: CarsTypes.CREATE_CAR_ERROR,
    payload: error,
  };
}



export function removeCarRequest(carId, userId, token) {
  return {
    type: CarsTypes.REMOVE_CAR_REQUEST,
    payload: {
      carId,
      userId,
      token,
    },
  };
}

export function removeCarSuccess(message) {
  return {
    type: CarsTypes.REMOVE_CAR_SUCCESS,
    payload: message,
  };
}

export function removeCarError(error) {
  return {
    type: CarsTypes.REMOVE_CAR_ERROR,
    payload: error,
  };
}


export function editCarRequest(token, user, data) {
  return {
    type: CarsTypes.EDIT_CAR_REQUEST,
    payload: {
      token,
      user,
      data
    },
  };
}

export function editCarSuccess(message) {
  return {
    type: CarsTypes.EDIT_CAR_SUCCESS,
    payload: message
  };
}

export function editCarError(error) {
  return {
    type: CarsTypes.EDIT_CAR_ERROR,
    payload: error,
  };
}
