export const setOrder = (data) => ({type: 'ORDERS', payload: data  });

export const getOrder = () => async (dispatch) => {


  const data1 = await fetch('http://localhost:3002/allorders', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });
  
  const res = await data1.json();

  dispatch(setOrder(res));
};