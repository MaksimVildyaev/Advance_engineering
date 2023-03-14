import { initState } from '../initState';

export const addDeleteOrder = (state = initState, action) =>{
const { type, payload } = action;
switch (type) {
  case 'DELETE':
    return payload;
    default:
      return state;
  }
}