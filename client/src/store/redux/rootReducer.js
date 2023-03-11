
import { combineReducers } from 'redux';

import { addLogIn } from './addLogIn'



export const rootReducer = combineReducers({

  
  logIn: addLogIn,
  

})