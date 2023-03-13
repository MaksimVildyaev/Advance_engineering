export const setNewOrder = (data) => ({type: 'NEW_ORDER', payload: data  });

export const getNewOrder = (name, addres, comment) => async (dispatch) => {


  const data1 = await fetch('http://localhost:3002/neworders', {
  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name, addres, comment }),
  });
  const res = await data1.json();
  console.log("res====>", res);
  dispatch(setNewOrder(res));
};