'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Products',
    [
      {
        name:'shirt',
        category_id:1,
        price:345,
        discount:5,
        quantity:34,
        description:'white XL shirt',
        image_url:'',
        is_featured:'True',
        rating:3,
        brand:'gucci',
        is_available:true,
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ],
    {},
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Products',null,{})
};
