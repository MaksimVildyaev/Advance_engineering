export const setLogout = () => ({type: 'LOGOUT'});

export const getLogout = () => async (dispatch) => {
  console.log('fetch logout')
 await fetch('http://localhost:3002/logout', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
   
   })
  
   dispatch(setLogout());
};