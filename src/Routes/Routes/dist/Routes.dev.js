"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var route = (0, _reactRouterDom.createBrowserRouter)([{
  path: '/'
}]);
exports.route = route;