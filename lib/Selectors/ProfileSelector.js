"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPageNumber = exports.getSlug = exports.getUsername = undefined;

var _reselect = require("reselect");

/* Private */

var username = function username(state, props) {
  return props.routeParams.username || "";
};

var slug = function slug(state, props) {
  return props.routeParams.slug || "activity";
};

var pageNumber = function pageNumber(state, props) {
  return props.routeParams.pageNumber || 1;
};

/* Exports */

var getUsername = exports.getUsername = (0, _reselect.createSelector)([username], function (name) {
  return name;
});

var getSlug = exports.getSlug = (0, _reselect.createSelector)([slug], function (id) {
  return id;
});

var getPageNumber = exports.getPageNumber = (0, _reselect.createSelector)([pageNumber], function (id) {
  return id;
});