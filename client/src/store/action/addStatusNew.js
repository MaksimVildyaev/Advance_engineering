export const setStNew = (data) => ({type: 'NEW', payload: data  });

export const getStNew = (id) => async (dispatch) => {


  const data1 = await fetch('http://localhost:3002/statusnew', {
  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ id }),
  });
  const res = await data1.json();
  dispatch(setStNew(res));
};