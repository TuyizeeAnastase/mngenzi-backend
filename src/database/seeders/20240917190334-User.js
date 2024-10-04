module.exports = {
  up:(queryInterface, Sequelize)=>queryInterface.bulkInsert(
    'Users',
    [
      {
        name:'anastase',
        email:'tuyizereanastase1@gmail.com',
        password:'$2a$12$8Yy4JHbtY/2HoZNPq5CG5O2YgJtJ3/Rvhy10YhOpm6bbDie1LKOsa',
        role_id:1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'tuyizere',
        email:'tuyizere@gmail.com',
        password:'$2a$12$8Yy4JHbtY/2HoZNPq5CG5O2YgJtJ3/Rvhy10YhOpm6bbDie1LKOsa',
        role_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'joe',
        email:'joe@gmail.com',
        password:'$2a$12$8Yy4JHbtY/2HoZNPq5CG5O2YgJtJ3/Rvhy10YhOpm6bbDie1LKOsa',
        role_id:2,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {},
  ),

  down:(queryInterface, Sequelize) =>queryInterface.bulkDelete('Users',null,{})
};
