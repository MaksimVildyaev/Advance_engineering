import { initState } from '../initState';

export const addOrders = (state = initState, action) =>{
const { type, payload } = action;
// console.log("payDATA====>", payload);
switch (type) {
  case 'ORDERS':
    return payload
    // { 
    //   name: payload.name,
    //   addres: payload.addres,
    //   status: payload.status,
    //   comment: payload.comment, 
    // };
    default:
      return state;
  }
}