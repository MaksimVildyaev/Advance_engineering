import { initState } from '../initState';

export const addStatus = (state = initState, action) =>{
const { type, payload } = action;
switch (type) {
  case 'NEW':
    return payload;
    case 'DONE':
      return payload;
    default:
      return state;
  }
}