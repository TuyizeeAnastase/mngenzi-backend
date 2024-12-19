"use strict";

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var envConfigs = require('../config/config');
var basename = path.basename(__filename);
var env = process.env.NODE_ENV || 'development';
var config = envConfigs[env];
var db = {};
var sequelize;
if (config.url) {
  sequelize = new Sequelize(config.url, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
fs.readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

//models/index.js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJwYXRoIiwiU2VxdWVsaXplIiwiZW52Q29uZmlncyIsImJhc2VuYW1lIiwiX19maWxlbmFtZSIsImVudiIsInByb2Nlc3MiLCJOT0RFX0VOViIsImNvbmZpZyIsImRiIiwic2VxdWVsaXplIiwidXJsIiwiZGF0YWJhc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicmVhZGRpclN5bmMiLCJfX2Rpcm5hbWUiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIkRhdGFUeXBlcyIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xuY29uc3QgZW52Q29uZmlncyA9ICByZXF1aXJlKCcuLi9jb25maWcvY29uZmlnJyk7XG5cbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSBlbnZDb25maWdzW2Vudl07XG5jb25zdCBkYiA9IHt9O1xuXG5sZXQgc2VxdWVsaXplO1xuaWYgKGNvbmZpZy51cmwpIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcudXJsLCBjb25maWcpO1xufSBlbHNlIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShjb25maWcuZGF0YWJhc2UsIGNvbmZpZy51c2VybmFtZSwgY29uZmlnLnBhc3N3b3JkLCBjb25maWcpO1xufVxuXG5mc1xuICAucmVhZGRpclN5bmMoX19kaXJuYW1lKVxuICAuZmlsdGVyKGZpbGUgPT4ge1xuICAgIHJldHVybiAoZmlsZS5pbmRleE9mKCcuJykgIT09IDApICYmIChmaWxlICE9PSBiYXNlbmFtZSkgJiYgKGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJyk7XG4gIH0pXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgIGNvbnN0IG1vZGVsID0gcmVxdWlyZShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSkoc2VxdWVsaXplLCBTZXF1ZWxpemUuRGF0YVR5cGVzKTtcbiAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xuICB9KTtcblxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICB9XG59KTtcblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuXG4vL21vZGVscy9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxFQUFFLEdBQUdDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDeEIsSUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsTUFBTSxDQUFDO0FBQzVCLElBQU1FLFNBQVMsR0FBR0YsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUN0QyxJQUFNRyxVQUFVLEdBQUlILE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUUvQyxJQUFNSSxRQUFRLEdBQUdILElBQUksQ0FBQ0csUUFBUSxDQUFDQyxVQUFVLENBQUM7QUFDMUMsSUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNELEdBQUcsQ0FBQ0UsUUFBUSxJQUFJLGFBQWE7QUFDakQsSUFBTUMsTUFBTSxHQUFHTixVQUFVLENBQUNHLEdBQUcsQ0FBQztBQUM5QixJQUFNSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBRWIsSUFBSUMsU0FBUztBQUNiLElBQUlGLE1BQU0sQ0FBQ0csR0FBRyxFQUFFO0VBQ2RELFNBQVMsR0FBRyxJQUFJVCxTQUFTLENBQUNPLE1BQU0sQ0FBQ0csR0FBRyxFQUFFSCxNQUFNLENBQUM7QUFDL0MsQ0FBQyxNQUFNO0VBQ0xFLFNBQVMsR0FBRyxJQUFJVCxTQUFTLENBQUNPLE1BQU0sQ0FBQ0ksUUFBUSxFQUFFSixNQUFNLENBQUNLLFFBQVEsRUFBRUwsTUFBTSxDQUFDTSxRQUFRLEVBQUVOLE1BQU0sQ0FBQztBQUN0RjtBQUVBVixFQUFFLENBQ0NpQixXQUFXLENBQUNDLFNBQVMsQ0FBQyxDQUN0QkMsTUFBTSxDQUFDLFVBQUFDLElBQUksRUFBSTtFQUNkLE9BQVFBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBTUQsSUFBSSxLQUFLZixRQUFTLElBQUtlLElBQUksQ0FBQ0UsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBTTtBQUN2RixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLFVBQUFILElBQUksRUFBSTtFQUNmLElBQU1JLEtBQUssR0FBR3ZCLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDdUIsSUFBSSxDQUFDUCxTQUFTLEVBQUVFLElBQUksQ0FBQyxDQUFDLENBQUNSLFNBQVMsRUFBRVQsU0FBUyxDQUFDdUIsU0FBUyxDQUFDO0VBQ2pGZixFQUFFLENBQUNhLEtBQUssQ0FBQ0csSUFBSSxDQUFDLEdBQUdILEtBQUs7QUFDeEIsQ0FBQyxDQUFDO0FBRUpJLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbEIsRUFBRSxDQUFDLENBQUNZLE9BQU8sQ0FBQyxVQUFBTyxTQUFTLEVBQUk7RUFDbkMsSUFBSW5CLEVBQUUsQ0FBQ21CLFNBQVMsQ0FBQyxDQUFDQyxTQUFTLEVBQUU7SUFDM0JwQixFQUFFLENBQUNtQixTQUFTLENBQUMsQ0FBQ0MsU0FBUyxDQUFDcEIsRUFBRSxDQUFDO0VBQzdCO0FBQ0YsQ0FBQyxDQUFDO0FBRUZBLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0FBQ3hCRCxFQUFFLENBQUNSLFNBQVMsR0FBR0EsU0FBUztBQUV4QjZCLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHdEIsRUFBRTs7QUFFbkIiLCJpZ25vcmVMaXN0IjpbXX0=