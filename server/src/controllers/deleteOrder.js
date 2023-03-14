const { Orders } = require('../../db/models');

const deleteOrder = async (req, res) => {
   const { id } = req.body;
   
   try {
         await Orders.destroy({ where: {id:id}});
     
         const newStatus = await Orders.findAll();  
         const plainOrders = newStatus.map((item) => item.get({ plain: true }));
         const result = plainOrders.sort((a, b) => a.id > b.id ? 1 : -1);
         res.json(result);

   } catch (error) {
      console.log("ERROR==>", error);
   }
}

module.exports = {deleteOrder};