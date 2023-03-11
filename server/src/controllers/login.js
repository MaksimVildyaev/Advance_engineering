const { User } = require('../../db/models');

async function logIn  (req, res)  {
   // console.log("REQ=======>", req.body);
   const { name, password } = req.body;
   try {
   
     const user = await User.findOne({ where: { name } });
 
     if (user) {
      
       const passCheck = await User.findOne( { password } );
      
       if (passCheck) {
         
         req.session.userName = user.username;
         req.session.save(() => {
          });
          res.json(user);
         //  console.log("RES====>", res.json(user));
       } else {
         res.json({ error: 'Неверный логин или пароль'})
       }
     } else {
      res.json({ error: 'Неверный логин или пароль'})
     }
   } catch (error) {
     res.send(`ERROR---> ${error}`);
   }
}

module.exports = {logIn};