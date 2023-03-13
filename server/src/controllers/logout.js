
const logoutUser = async (req, res) => {
   console.log('logout server')
    req.session.destroy(() => {
     res.clearCookie('Test');
     res.json({ message: 'Сессия завершена', credentials: 'include' });
   });
 };
 
 module.exports = logoutUser;

 
