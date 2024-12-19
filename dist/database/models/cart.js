"use strict";

module.exports = function (sequelize, DataTypes) {
  var Cart = sequelize.define('Cart', {
    product_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER
  }, {});
  Cart.associate = function (models) {
    Cart.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'products',
      onDelete: 'CASCADE'
    }), Cart.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user',
      onDelete: 'CASCADE'
    });
  };
  return Cart;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwic2VxdWVsaXplIiwiRGF0YVR5cGVzIiwiQ2FydCIsImRlZmluZSIsInByb2R1Y3RfaWQiLCJJTlRFR0VSIiwidXNlcl9pZCIsInF1YW50aXR5IiwicHJpY2UiLCJ0b3RhbF9wcmljZSIsImFzc29jaWF0ZSIsIm1vZGVscyIsImJlbG9uZ3NUbyIsIlByb2R1Y3QiLCJmb3JlaWduS2V5IiwiYXMiLCJvbkRlbGV0ZSIsIlVzZXIiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGF0YWJhc2UvbW9kZWxzL2NhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoc2VxdWVsaXplLCBEYXRhVHlwZXMpID0+IHtcbiAgY29uc3QgQ2FydD1zZXF1ZWxpemUuZGVmaW5lKFxuICAgICdDYXJ0JyxcbiAgICB7XG4gICAgcHJvZHVjdF9pZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgdXNlcl9pZDogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgcXVhbnRpdHk6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgIHByaWNlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICB0b3RhbF9wcmljZTogRGF0YVR5cGVzLklOVEVHRVJcbiAgfSwge30pO1xuICBDYXJ0LmFzc29jaWF0ZT1mdW5jdGlvbihtb2RlbHMpe1xuICAgIENhcnQuYmVsb25nc1RvKG1vZGVscy5Qcm9kdWN0LHtcbiAgICAgIGZvcmVpZ25LZXk6J3Byb2R1Y3RfaWQnLFxuICAgICAgYXM6J3Byb2R1Y3RzJyxcbiAgICAgIG9uRGVsZXRlOidDQVNDQURFJ1xuICAgIH0pLFxuICAgIENhcnQuYmVsb25nc1RvKG1vZGVscy5Vc2VyLHtcbiAgICAgIGZvcmVpZ25LZXk6J3VzZXJfaWQnLFxuICAgICAgYXM6J3VzZXInLFxuICAgICAgb25EZWxldGU6J0NBU0NBREUnXG4gICAgfSlcbiAgfVxuICByZXR1cm4gQ2FydDtcbn07Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRyxVQUFDQyxTQUFTLEVBQUVDLFNBQVMsRUFBSztFQUN6QyxJQUFNQyxJQUFJLEdBQUNGLFNBQVMsQ0FBQ0csTUFBTSxDQUN6QixNQUFNLEVBQ047SUFDQUMsVUFBVSxFQUFFSCxTQUFTLENBQUNJLE9BQU87SUFDN0JDLE9BQU8sRUFBRUwsU0FBUyxDQUFDSSxPQUFPO0lBQzFCRSxRQUFRLEVBQUVOLFNBQVMsQ0FBQ0ksT0FBTztJQUMzQkcsS0FBSyxFQUFFUCxTQUFTLENBQUNJLE9BQU87SUFDeEJJLFdBQVcsRUFBRVIsU0FBUyxDQUFDSTtFQUN6QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDTkgsSUFBSSxDQUFDUSxTQUFTLEdBQUMsVUFBU0MsTUFBTSxFQUFDO0lBQzdCVCxJQUFJLENBQUNVLFNBQVMsQ0FBQ0QsTUFBTSxDQUFDRSxPQUFPLEVBQUM7TUFDNUJDLFVBQVUsRUFBQyxZQUFZO01BQ3ZCQyxFQUFFLEVBQUMsVUFBVTtNQUNiQyxRQUFRLEVBQUM7SUFDWCxDQUFDLENBQUMsRUFDRmQsSUFBSSxDQUFDVSxTQUFTLENBQUNELE1BQU0sQ0FBQ00sSUFBSSxFQUFDO01BQ3pCSCxVQUFVLEVBQUMsU0FBUztNQUNwQkMsRUFBRSxFQUFDLE1BQU07TUFDVEMsUUFBUSxFQUFDO0lBQ1gsQ0FBQyxDQUFDO0VBQ0osQ0FBQztFQUNELE9BQU9kLElBQUk7QUFDYixDQUFDIiwiaWdub3JlTGlzdCI6W119