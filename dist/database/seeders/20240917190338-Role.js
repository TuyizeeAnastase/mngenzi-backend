"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Roles', [{
      title: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'customer',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIlNlcXVlbGl6ZSIsImJ1bGtJbnNlcnQiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiYnVsa0RlbGV0ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9zZWVkZXJzLzIwMjQwOTE3MTkwMzM4LVJvbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVwOihxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKT0+cXVlcnlJbnRlcmZhY2UuYnVsa0luc2VydChcbiAgICAnUm9sZXMnLFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6J2FkbWluJyxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTonY3VzdG9tZXInLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICB7fSxcbiAgKSxcblxuICBkb3duOihxdWVyeUludGVyZmFjZSwgU2VxdWVsaXplKT0+cXVlcnlJbnRlcmZhY2UuYnVsa0RlbGV0ZSgnUm9sZXMnLG51bGwse30pXG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztFQUNmQyxFQUFFLEVBQUMsU0FBSEEsRUFBRUEsQ0FBRUMsY0FBYyxFQUFFQyxTQUFTO0lBQUEsT0FBR0QsY0FBYyxDQUFDRSxVQUFVLENBQ3ZELE9BQU8sRUFDUCxDQUNFO01BQ0VDLEtBQUssRUFBQyxPQUFPO01BQ2JDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUNyQkMsU0FBUyxFQUFFLElBQUlELElBQUksQ0FBQztJQUN0QixDQUFDLEVBQ0Q7TUFDRUYsS0FBSyxFQUFDLFVBQVU7TUFDaEJDLFNBQVMsRUFBRSxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUNyQkMsU0FBUyxFQUFFLElBQUlELElBQUksQ0FBQztJQUN0QixDQUFDLENBQ0YsRUFDRCxDQUFDLENBQ0gsQ0FBQztFQUFBO0VBRURFLElBQUksRUFBQyxTQUFMQSxJQUFJQSxDQUFFUCxjQUFjLEVBQUVDLFNBQVM7SUFBQSxPQUFHRCxjQUFjLENBQUNRLFVBQVUsQ0FBQyxPQUFPLEVBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDO0VBQUE7QUFDOUUsQ0FBQyIsImlnbm9yZUxpc3QiOltdfQ==