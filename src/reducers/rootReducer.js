import { combineReducers } from "redux";
import redirectReducer from "./redirectReducer";
import logInReducer from "./login.reducer";
import getCarsReducer from "./getCars.reducer";
import registerReducer from "./register.reducer";
import createCarReducer from "./createCar.reducer";
import removeCarReducer from "./removeCar.reducer";

// TODO:Import reducers

/** Combine all reducers
 * @returns {Object} store
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    // TODO: set reducers
    redirect: redirectReducer,
    currentUser: logInReducer,
    cars: getCarsReducer,
    createdCar: createCarReducer,
    removeCar: removeCarReducer,
    user: registerReducer,
  });
  return rootReducer;
}