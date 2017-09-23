
const ProfileSelector  = require('./Selectors/ProfileSelector');
//const UserSelector  = require('./Selectors/UserSelector');
//const AuthActions   = require('./Actions/Creators');
//const AuthSaga      = require('./Sagas/AuthSaga');
//const AuthApi       = require('./Services/AuthApi');
//const AuthReducer   = require('./Reducers/AuthReducer');
const ProfileRoutes    = require('./routes');

module.exports = {
  getUsername:        ProfileSelector.getUsername,
  getSlug:            ProfileSelector.getSlug,
  //AuthActions:      AuthActions.default,
  //AuthSaga:         AuthSaga.default,
  //AuthApi:          AuthApi.default,
  //AuthReducer:      AuthReducer.default,
  ProfileRoutes:       ProfileRoutes.default
}
