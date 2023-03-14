const { User } = require('../../db/models');

async function logIn  (req, res)  {
   const { name, password } = req.body;
   try {
   
     const user = await User.findOne({ where: { name } });
 
     if (user) {
      
       const passCheck = await User.findOne( {where: { password } });
       if (passCheck) {
         req.session.userName = user.name;
         req.session.userRole = user.role;
         req.session.save(() => {
          });
          res.json({
            name: req.session.userName,
            role: req.session.userRole,
          });

       } else {
         res.json({ error: 'Неверный пароль'})
       }
     } else {
      res.json({ error: 'Неверный логин'})
     }
   } catch (error) {
     res.send(`ERROR---> ${error}`);
   }
}

module.exports = {logIn};