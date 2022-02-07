import { combineReducers } from 'redux';
import redirectReducer from './redirectReducer';
import logInReducer from "./login.reducer";
import carsReducer from "./cars.reducer"
import registerReducer from './register.reducer';

// TODO:Import reducers 

/** Combine all reducers
 * @returns {Object} store
 */
export default function createReducer() {
  const rootReducer = combineReducers({
    // TODO: set reducers 
    redirect: redirectReducer,
    currentUser: logInReducer,
    cars:carsReducer,
    user:registerReducer
  });
  return rootReducer;
}
