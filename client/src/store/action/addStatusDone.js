export const setStDone = (data) => ({type: 'DONE', payload: data  });

export const getStDone = (id) => async (dispatch) => {


  const data1 = await fetch('http://localhost:3002/statusdone', {
  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ id }),
  });
  const res = await data1.json();
  dispatch(setStDone(res));
};