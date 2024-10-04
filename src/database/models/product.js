module.exports = (sequelize, DataTypes) => {
  const Product=sequelize.define(
    'Product',
    {
    name: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    is_featured: DataTypes.BOOLEAN,
    rating: DataTypes.FLOAT,
    brand: DataTypes.STRING,
    is_available: DataTypes.BOOLEAN
  }, {});
  Product.associate=function(models){
    Product.belongsTo(models.Category,{
      foreignKey:'category_id',
      as:'category',
      onDelete:'CASCADE'
    })
  }
  return Product;
};