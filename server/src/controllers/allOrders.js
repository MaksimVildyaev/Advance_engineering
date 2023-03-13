const { Orders } = require('../../db/models');

async function allOrders  (req, res)  {
   try {
      const allOrders_ = await Orders.findAll();
      const plainOrders = allOrders_.map((item) => item.get({ plain: true }));
      const result = plainOrders.sort((a, b) => a.id > b.id ? 1 : -1);
      // console.log("==================>>", result);
      res.json(result);
   } 
   catch (error) {
      console.log("ERROR==>", error);
   }
}

module.exports = {allOrders};