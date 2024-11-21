module.exports = (sequelize, DataTypes) => {
  const Item=sequelize.define(
    'Item',
    {
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    reference: DataTypes.INTEGER
  }, {});
  Item.associate=function(models){
    Item.belongsTo(models.Order,{
      foreignKey:'order_id',
      as:'order',
      onDelete:'CASCADE'
    }),
    Item.belongsTo(models.Product,{
      foreignKey:'product_id',
      as:'product',
      onDelete:'CASCADE'
    })
  }
  return Item;
};