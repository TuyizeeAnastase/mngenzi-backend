module.exports = (sequelize, DataTypes) => {
  const User=sequelize.define(
    'User',
    {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role_id:DataTypes.INTEGER
  }, {});
  User.associate=function(models){
    User.belongsTo(models.Role,{
      foreignKey:'role_id',
      as:'role',
      onDelete:'CASCADE'
    });
    User.hasOne(models.Cart,{
      foreignKey:'user_id',
      as:'user',
      onDelete:'CASCADE'
    });
    User.hasMany(models.Cart,{
      foreignKey:'user_id',
      as:'user_orders',
      onDelete:'CASCADE'
    })
  }
  return User;
};