import { put, call, take } from 'redux-saga/effects';
import { RegisterTypes } from './types';
import { registerSuccess, registerFail, registerRequest } from './action';
import {redirect} from "../../components/CustomRedirect/actions"

export function* RegisterSaga(api,username, password, firstName, lastName){
    try{
        if(username, password, firstName, lastName){
           const res = yield call(api.register, username, password, firstName, lastName);
           yield put(registerSuccess(res))
           yield put(redirect("/login"))
        }
    }catch(error){
        yield put(registerFail(error))
    }
}


export function* RegisterStart(api){
    while(true){
      const registerData = yield take(RegisterTypes.REGISTER_REQUEST)
      if(registerData.payload){
          const {username, password, firstName, lastName} = registerData.payload
          yield call(RegisterSaga,api,username, password, firstName, lastName)
      }
    }
}