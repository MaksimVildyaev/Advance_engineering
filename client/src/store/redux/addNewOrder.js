import { initState } from '../initState';

export const addNewOrder = (state = initState, action) =>{
const { type, payload } = action;
switch (type) {
  case 'NEW_ORDER':
    return payload;
    default:
      return state;
  }
}