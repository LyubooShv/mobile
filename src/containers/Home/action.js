import { CarsTypes } from "./types";

export const carsRequest = () => ({
    type:CarsTypes.GET_CARS_REQUEST,   
})
export const carsSuccess = cars => ({
    type:CarsTypes.GET_CARS_SUCCESS,
    payload:cars
})

export const carsFail = error => ({
    type:CarsTypes.GET_CARS_FAIL,
    payload:error
})
