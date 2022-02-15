import { put, take, call } from "redux-saga/effects";
import { CarsTypes } from "./types";
import { editCarSuccess, editCarError } from "./action";

export function* editCarStart(api) {
  while (true) {
    const editCarRequest = yield take(CarsTypes.EDIT_CAR_REQUEST);
    if (editCarRequest.payload) {
      const {token, user, data } = editCarRequest.payload;
      yield call( editCarSaga, api, token, user, data );
    }
  }
}

function* editCarSaga(api, token, user, data) {
  try {
    let response = yield call( api.editCar, token, user, data );
    yield put(editCarSuccess(response.data));
  } catch (error) {
    yield put(editCarError(error));
  }
}