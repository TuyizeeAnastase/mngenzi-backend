"use strict";

module.exports = {
  up: function up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Categories', [{
      title: 'man',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'woman',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'child',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: 'made in Rwanda',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: function down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXAiLCJxdWVyeUludGVyZmFjZSIsIlNlcXVlbGl6ZSIsImJ1bGtJbnNlcnQiLCJ0aXRsZSIsImNyZWF0ZWRBdCIsIkRhdGUiLCJ1cGRhdGVkQXQiLCJkb3duIiwiYnVsa0RlbGV0ZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9zZWVkZXJzLzIwMjQwOTE4MTg0MDE3LUNhdGVnb3J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICB1cDoocXVlcnlJbnRlcmZhY2UsIFNlcXVlbGl6ZSk9PnF1ZXJ5SW50ZXJmYWNlLmJ1bGtJbnNlcnQoXG4gICAgJ0NhdGVnb3JpZXMnLFxuICAgIFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6J21hbicsXG4gICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6J3dvbWFuJyxcbiAgICAgICAgY3JlYXRlZEF0Om5ldyBEYXRlKCksXG4gICAgICAgIHVwZGF0ZWRBdDpuZXcgRGF0ZSgpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTonY2hpbGQnLFxuICAgICAgICBjcmVhdGVkQXQ6bmV3IERhdGUoKSxcbiAgICAgICAgdXBkYXRlZEF0Om5ldyBEYXRlKClcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOidtYWRlIGluIFJ3YW5kYScsXG4gICAgICAgIGNyZWF0ZWRBdDpuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkQXQ6bmV3IERhdGUoKSxcbiAgICAgIH1cbiAgICBdLFxuICAgIHt9LFxuICApLFxuXG4gIGRvd246KHF1ZXJ5SW50ZXJmYWNlLCBTZXF1ZWxpemUpPT5xdWVyeUludGVyZmFjZS5idWxrRGVsZXRlKCdDYXRlZ29yaWVzJyxudWxsLHt9KVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDZkMsRUFBRSxFQUFDLFNBQUhBLEVBQUVBLENBQUVDLGNBQWMsRUFBRUMsU0FBUztJQUFBLE9BQUdELGNBQWMsQ0FBQ0UsVUFBVSxDQUN2RCxZQUFZLEVBQ1osQ0FDRTtNQUNFQyxLQUFLLEVBQUMsS0FBSztNQUNYQyxTQUFTLEVBQUUsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDckJDLFNBQVMsRUFBRSxJQUFJRCxJQUFJLENBQUM7SUFDdEIsQ0FBQyxFQUNEO01BQ0VGLEtBQUssRUFBQyxPQUFPO01BQ2JDLFNBQVMsRUFBQyxJQUFJQyxJQUFJLENBQUMsQ0FBQztNQUNwQkMsU0FBUyxFQUFDLElBQUlELElBQUksQ0FBQztJQUNyQixDQUFDLEVBQ0Q7TUFDRUYsS0FBSyxFQUFDLE9BQU87TUFDYkMsU0FBUyxFQUFDLElBQUlDLElBQUksQ0FBQyxDQUFDO01BQ3BCQyxTQUFTLEVBQUMsSUFBSUQsSUFBSSxDQUFDO0lBQ3JCLENBQUMsRUFDRDtNQUNFRixLQUFLLEVBQUMsZ0JBQWdCO01BQ3RCQyxTQUFTLEVBQUMsSUFBSUMsSUFBSSxDQUFDLENBQUM7TUFDcEJDLFNBQVMsRUFBQyxJQUFJRCxJQUFJLENBQUM7SUFDckIsQ0FBQyxDQUNGLEVBQ0QsQ0FBQyxDQUNILENBQUM7RUFBQTtFQUVERSxJQUFJLEVBQUMsU0FBTEEsSUFBSUEsQ0FBRVAsY0FBYyxFQUFFQyxTQUFTO0lBQUEsT0FBR0QsY0FBYyxDQUFDUSxVQUFVLENBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztFQUFBO0FBQ25GLENBQUMiLCJpZ25vcmVMaXN0IjpbXX0=