import { initState } from '../initState';

export const addLogIn = (state = initState, action) =>{
const { type, payload } = action;
// console.log("payDATA====>", payload);
switch (type) {
  case 'LOGIN':
    return { 
      name: payload.name, 
      role: payload.role, 
      error: payload.error,
    };
    default:
      return state;
  }
}