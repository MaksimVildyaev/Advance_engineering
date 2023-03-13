
import { combineReducers } from 'redux';

import { addLogIn } from './addLogIn'
import { addNewOrder } from './addNewOrder'

export const rootReducer = combineReducers({

  logIn: addLogIn,
  newOrder: addNewOrder,
  
})