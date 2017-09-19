"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNav = undefined;

var _reselect = require("reselect");

/* Private */

var nav = function nav(state, props) {
  return [{ "title": "Profile", "url": "/settings/profile" }, { "title": "Account", "url": "/settings/account" }];
};

/* Export */

var getNav = exports.getNav = (0, _reselect.createSelector)([nav], function (rs) {
  return rs;
});