module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Categories',
    [
      {
        title:'man',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title:'woman',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:'child',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        title:'made in Rwanda',
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ],
    {},
  ),

  down:(queryInterface, Sequelize)=>queryInterface.bulkDelete('Categories',null,{})
};
