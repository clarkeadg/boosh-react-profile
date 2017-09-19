'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ProfileSettings = require('./Containers/ProfileSettings');

var _ProfileSettings2 = _interopRequireDefault(_ProfileSettings);

var _Profile = require('./Containers/Profile');

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var routes = _react2.default.createElement(
    _reactRouter.Route,
    { path: '' },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: 'settings' },
      _react2.default.createElement(_reactRouter.Route, { path: 'profile', component: _ProfileSettings2.default })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: ':username', component: _Profile2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':username/:slug', component: _Profile2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: ':username/:slug/:pageNumber', component: _Profile2.default })
  );
  return routes;
};