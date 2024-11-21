module.exports = (sequelize, DataTypes) => {
  const Order=sequelize.define(
    'Order',
    {
    user_id: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    order_reference: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
    invoice: DataTypes.STRING
  }, {});
  Order.associate=function(models){
    Order.hasMany(models.Item,{
      foreignKey:'order_id',
      as:'items',
      onDelete:'CASCADE'
    });
    Order.belongsTo(models.User,{
      foreignKey:'user_id',
      as:'user_orders',
      onDelete:'CASCADE'
    });
  }
  return Order;
};