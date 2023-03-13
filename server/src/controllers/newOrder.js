const { Orders } = require('../../db/models');

async function newOrder  (req, res)  {
   console.log("REQ=======>", req.body);
   const { name, addres, comment } = req.body;
   try {
    await Orders.create({ name:name, addres:addres, status: 'Новый', comment:comment });
      res.json({new: 'Новый заказ создан'});  
   } catch (error) {
      res.send(`ERROR---> ${error}`);
   }
}

module.exports = {newOrder};