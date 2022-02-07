import { put, call, take } from 'redux-saga/effects';
import { RegisterTypes } from './types';
import { registerSuccess, registerFail } from './action';

export function* RegisterSaga(api,username, password){
    try{
        if(username, password){
           const res = yield call(api.register,username, password)
           yield put(registerSuccess(res))
        console.log(res);
        }
    }catch(error){
        yield put(registerFail(error))
    }
}


export function* RegisterStart(api){
    while(true){
      const registerData = yield take(RegisterTypes.REGISTER_REQUEST)
      if(registerData.payload){
          console.log(registerData.payload);
          const {username, password}= registerData.payload
          yield call(RegisterSaga,api,username, password)
          console.log(username,password);
      }
    }
}