const { Orders } = require('../../db/models');

async function newOrder  (req, res)  {
   const { name, addres, comment } = req.body;
   try {
    await Orders.create({ name:name, addres:addres, status: 'Новый', comment:comment });
     const allOrders_ = await Orders.findAll();
     const plainOrders = allOrders_.map((item) => item.get({ plain: true }));
     const result = plainOrders.sort((a, b) => a.id > b.id ? 1 : -1);
     res.json(result);  
    
   } catch (error) {
      res.send(`ERROR---> ${error}`);
   }
}

module.exports = {newOrder};