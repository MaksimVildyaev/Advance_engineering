export const setDelete = (data) => ({type: 'DELETE', payload: data  });

export const getDelete = (id) => async (dispatch) => {


  const data1 = await fetch('http://localhost:3002/deleteorder', {
  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ id }),
  });
  const res = await data1.json();
  dispatch(setDelete(res));
};