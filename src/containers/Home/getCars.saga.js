import { put, call, take } from 'redux-saga/effects';
import { CarsTypes } from './types';
import { getCarsSuccess, getCarsFail } from './action';

export function* getCarsSaga(api){
     try{
       const res = yield call(api.cars)
       yield put(getCarsSuccess(res))      
    }catch(error){
       yield put(getCarsFail(error))
    }
}


export function* getCarsStart(api){
    while(true){
        yield take(CarsTypes.GET_CARS_REQUEST)
        yield call(getCarsSaga,api)             
    }
}