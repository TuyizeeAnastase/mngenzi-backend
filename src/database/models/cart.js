module.exports = (sequelize, DataTypes) => {
  const Cart=sequelize.define(
    'Cart',
    {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {});
  Cart.associate=function(models){
    Cart.belongsTo(models.Product,{
      foreignKey:'product_id',
      as:'products',
      onDelete:'CASCADE'
    }),
    Cart.belongsTo(models.User,{
      foreignKey:'user_id',
      as:'user',
      onDelete:'CASCADE'
    })
  }
  return Cart;
};