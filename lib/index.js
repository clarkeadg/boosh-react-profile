'use strict';

var ProfileSelector = require('./Selectors/ProfileSelector');
//const UserSelector  = require('./Selectors/UserSelector');
//const AuthActions   = require('./Actions/Creators');
//const AuthSaga      = require('./Sagas/AuthSaga');
//const AuthApi       = require('./Services/AuthApi');
//const AuthReducer   = require('./Reducers/AuthReducer');
var ProfileRoutes = require('./routes');

module.exports = {
  getUsername: ProfileSelector.getUsername,
  getSlug: ProfileSelector.getSlug,
  //AuthActions:      AuthActions,
  //AuthSaga:         AuthSaga,
  //AuthApi:          AuthApi,
  //AuthReducer:      AuthReducer.default,
  ProfileRoutes: ProfileRoutes
};