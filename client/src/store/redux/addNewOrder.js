import { initState } from '../initState';

export const addNewOrder = (state = initState, action) =>{
const { type, payload } = action;
// console.log("payDATA====>", payload);
switch (type) {
  case 'NEW_ORDER':
    return { 
      new: payload.new, 
    };
    default:
      return state;
  }
}