import { put, take, call } from "redux-saga/effects";
import { CarsTypes } from "./types";
import { removeCarSuccess, removeCarError } from "./action";


export  function* removeCarStart(api) {
  while (true) {
    const removeCarRequest = yield take(CarsTypes.REMOVE_CAR_REQUEST);
    if (removeCarRequest.payload) {
      const { carId, userId, token } = removeCarRequest.payload;
      yield call(removeCarSaga, api, carId, userId, token);
    }
  }
}

function* removeCarSaga(api, carId, userId, token) {
  try {
   const response = yield call(api.removeCar, carId, userId, token);
    yield put(removeCarSuccess(response.data));
  } catch (error) {
    yield put(removeCarError(error));
  }
}