import { put, call, take } from 'redux-saga/effects';
import { CarsTypes } from './types';
import { carsSuccess, carsFail } from './action';

export function* CarsSaga(api){
    try{
        
           const res = yield call(api.cars)
           yield put(carsSuccess(res))
        console.log(res);
        
    }catch(error){
        yield put(carsFail(error))
    }
}


export function* CarsStart(api){
    while(true){
     yield take(CarsTypes.GET_CARS_REQUEST)
          yield call(CarsSaga,api)
              
    }
}