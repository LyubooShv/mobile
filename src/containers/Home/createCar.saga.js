import { put, take, call } from "redux-saga/effects";
import { CarsTypes } from "./types";
import { createCarSuccess, createCarError } from "./action";




export function* createCarStart(api) {
  while (true) {
    const createCarRequest = yield take(CarsTypes.CREATE_CAR_REQUEST);
    if (createCarRequest.payload) {
      const { token,data,user } = createCarRequest.payload;
      yield call(createCarSaga, api, token, data,user );
    }
  }
}



function* createCarSaga(api,token,data,user) {
  try {
    const response = yield call(api.createCar, token, data,user);
    console.log(response);
    yield put(createCarSuccess(response.data));
  } catch (error) {
    yield put(createCarError(error));
  }
}