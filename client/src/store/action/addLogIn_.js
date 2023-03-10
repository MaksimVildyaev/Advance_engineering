export const setLog = (data) => ({type: 'LOGIN', payload: data  });

export const getLog = (name, password) => async (dispatch) => {


  const data1 = await fetch('http://localhost:3002/login', {
  
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name, password }),
  });
  const res = await data1.json();
  dispatch(setLog(res));
};