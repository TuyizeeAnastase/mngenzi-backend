module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Carts',
    [
      {
         product_id:1,
         user_id:1,
         quantity:5,
         price:345,
         total_price:1725,
         createdAt:new Date(),
         updatedAt:new Date(),
      }
    ],
    {}
  ),

  down:(queryInterface, Sequelize) =>queryInterface.bulkDelete('Carts',null,{})
};
