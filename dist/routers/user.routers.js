"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _user = _interopRequireDefault(require("../controllers/user.controllers"));
var _express = _interopRequireDefault(require("express"));
var _user2 = require("../validations/user.validations");
var _user3 = require("../middleware/user.middleware");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = (0, _express["default"])();
router.post('/register', _user2.userValidation, _user3.checkUserExist, _user["default"].registeringUser);
router.post('/login', _user2.loginValidation, _user3.checkUserByEmail, _user["default"].login);
var _default = exports["default"] = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXNlciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2V4cHJlc3MiLCJfdXNlcjIiLCJfdXNlcjMiLCJlIiwiX19lc01vZHVsZSIsInJvdXRlciIsImV4cHJlc3MiLCJwb3N0IiwidXNlclZhbGlkYXRpb24iLCJjaGVja1VzZXJFeGlzdCIsInVzZXJDb250cm9sbGVyIiwicmVnaXN0ZXJpbmdVc2VyIiwibG9naW5WYWxpZGF0aW9uIiwiY2hlY2tVc2VyQnlFbWFpbCIsImxvZ2luIiwiX2RlZmF1bHQiLCJleHBvcnRzIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcnMvdXNlci5yb3V0ZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VyQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyc1wiO1xyXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xyXG5pbXBvcnQgeyB1c2VyVmFsaWRhdGlvbixsb2dpblZhbGlkYXRpb24gfSBmcm9tIFwiLi4vdmFsaWRhdGlvbnMvdXNlci52YWxpZGF0aW9uc1wiO1xyXG5pbXBvcnQgeyBjaGVja1VzZXJFeGlzdCxjaGVja1VzZXJCeUVtYWlsIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvdXNlci5taWRkbGV3YXJlXCI7XHJcblxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcygpO1xyXG5cclxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsdXNlclZhbGlkYXRpb24sY2hlY2tVc2VyRXhpc3QsdXNlckNvbnRyb2xsZXIucmVnaXN0ZXJpbmdVc2VyKVxyXG5yb3V0ZXIucG9zdCgnL2xvZ2luJyxsb2dpblZhbGlkYXRpb24sY2hlY2tVc2VyQnlFbWFpbCx1c2VyQ29udHJvbGxlci5sb2dpbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjsiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFFBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtBQUNBLElBQUFHLE1BQUEsR0FBQUgsT0FBQTtBQUFnRixTQUFBRCx1QkFBQUssQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBR2hGLElBQU1FLE1BQU0sR0FBRyxJQUFBQyxtQkFBTyxFQUFDLENBQUM7QUFFeEJELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBQ0MscUJBQWMsRUFBQ0MscUJBQWMsRUFBQ0MsZ0JBQWMsQ0FBQ0MsZUFBZSxDQUFDO0FBQ3JGTixNQUFNLENBQUNFLElBQUksQ0FBQyxRQUFRLEVBQUNLLHNCQUFlLEVBQUNDLHVCQUFnQixFQUFDSCxnQkFBYyxDQUFDSSxLQUFLLENBQUM7QUFBQSxJQUFBQyxRQUFBLEdBQUFDLE9BQUEsY0FFNURYLE1BQU0iLCJpZ25vcmVMaXN0IjpbXX0=