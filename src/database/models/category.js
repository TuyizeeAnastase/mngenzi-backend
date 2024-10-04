module.exports = (sequelize, DataTypes) => {
  const Category=sequelize.define(
    'Category',
    {
    title: DataTypes.STRING
  }, {});
  Category.associate=function(models){
    Category.hasMany(models.Product,{
      foreignKey:'category_id',
      as:'products',
      onDelete:'CASCADE'
    })
  }
  return Category;
};