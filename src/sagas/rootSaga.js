import { all } from 'redux-saga/effects';
// Saga
// **** TODO: IMPORT SAGA FILES
import {api as logInApi} from "../api/carsBackend/logInApi";
import {api as carsApi} from "../api/carsBackend/carsApi";
import {api as registerApi} from "../api/carsBackend/registerApi";

// API
// **** TODO: IMPORT API
import { LogInStart} from "../containers/LogIn/saga";
import { CarsStart } from '../containers/Home/saga';
import {RegisterStart} from "../containers/Register/saga"
/** Root saga.
 * @return {Object} - return store
 */
function* rootSaga() {
  yield all([
    LogInStart(logInApi),
    CarsStart(carsApi),
    RegisterStart(registerApi)
  ]);
}

export default rootSaga;
