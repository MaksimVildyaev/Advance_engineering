
import { combineReducers } from 'redux';

import { addLogIn } from './addLogIn'
import { addNewOrder } from './addNewOrder'
import { addOrders } from './addOrders'
import { addStatus } from './addStatus'
import { addDeleteOrder } from './addDeleteOrder'

export const rootReducer = combineReducers({

  logIn: addLogIn,
  newOrder: addNewOrder,
  orders: addOrders,
  status : addStatus,
  deleteOrder: addDeleteOrder,
  
})