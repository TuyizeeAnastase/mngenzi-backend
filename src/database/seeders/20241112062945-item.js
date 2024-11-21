module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
  'Items',
  [
    {
      order_id:1,
      product_id:1,
      quantity:5,
      price:345,
      total_price:1725,
      reference:445,
      createdAt:new Date(),
      updatedAt:new Date(),
    }
  ],
  {}
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Items',null,{})
};
