module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Orders',
    [
      {
        user_id:1,
        total_price:1725,
        order_reference:'4564',
        paid:false,
        invoice:'',
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ],
    {}
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Orders',null,{})
};
