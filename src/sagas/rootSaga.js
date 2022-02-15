import { all } from 'redux-saga/effects';
// Saga
// **** TODO: IMPORT SAGA FILES
import {api as logInApi} from "../api/carsBackend/logInApi";
import {api as registerApi} from "../api/carsBackend/registerApi";
import {api as getCarsApi} from "../api/carsBackend/getCarsApi";
import {api as createCarApi} from "../api/carsBackend/createCarApi";
import {api as removeCarApi} from "../api/carsBackend/removeCarApi"


// API
// **** TODO: IMPORT API
import { logInStart} from "../containers/LogIn/saga";
import {registerStart} from "../containers/Register/saga";
import { getCarsStart } from '../containers/Home/getCars.saga';
import {createCarStart} from "../containers/Home/createCar.saga";
import {removeCarStart} from "../containers/Home/removeCar.saga";

/** Root saga.
 * @return {Object} - return store
 */
function* rootSaga() {
  yield all([
    logInStart(logInApi),
    getCarsStart(getCarsApi),
    registerStart(registerApi),
    createCarStart(createCarApi),
    removeCarStart(removeCarApi)
  ]);
}

export default rootSaga;
