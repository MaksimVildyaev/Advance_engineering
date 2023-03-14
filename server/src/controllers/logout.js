
const logoutUser = async (req, res) => {
    req.session.destroy(() => {
     res.clearCookie('Test');
     res.json({ message: 'Сессия завершена', credentials: 'include' });
   });
 };
 
 module.exports = logoutUser;

 
