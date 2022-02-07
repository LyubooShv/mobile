import { put, call, take } from 'redux-saga/effects';
import { LogInTypes } from './types';
import { logInSuccess, logInFail } from './action';
import {redirect} from "../../components/CustomRedirect/actions"

export function* LogInSaga(api,username, password){
    try{
        if(username, password){
           const res = yield call(api.login,username, password)
           yield put(logInSuccess(res))
           yield put(redirect("/home"))
        console.log(res);
        }
    }catch(error){
        yield put(logInFail(error))
    }
}


export function* LogInStart(api){
    while(true){
      const logInData = yield take(LogInTypes.LOGIN_REQUEST)
      if(logInData.payload){
          console.log(logInData.payload);
          const {username, password}= logInData.payload
          yield call(LogInSaga,api,username, password)
          console.log(username,password);
      }
    }
}
