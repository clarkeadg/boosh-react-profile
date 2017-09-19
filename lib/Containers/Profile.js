'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _booshReactUsers = require('boosh-react-users');

var _booshReactAuth = require('boosh-react-auth');

var _ProfileSelector = require('../Selectors/ProfileSelector');

var _booshReactActivity = require('boosh-react-activity');

var _booshReactFavorites = require('boosh-react-favorites');

var _booshReactMessages = require('boosh-react-messages');

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import ProfileActions from '../Components/ProfileActions'

//import Time from 'react-time';
//import ReactDataGrid from 'react-data-grid'

//import { FollowersCollection, FollowingCollection, FollowersSuggestionsCollection, FollowersButton } from 'boosh-react-followers'
//import { FriendsCollection, FriendsButton } from 'boosh-react-friends'
//import { GroupsCollection } from 'boosh-react-groups'


/* Sagas */
//import GetUsersSaga from '../Sagas/Preloaders/GetUsersSaga'

/* Actions */
var Profile = function (_React$Component) {
  (0, _inherits3.default)(Profile, _React$Component);

  function Profile() {
    (0, _classCallCheck3.default)(this, Profile);
    return (0, _possibleConstructorReturn3.default)(this, (Profile.__proto__ || (0, _getPrototypeOf2.default)(Profile)).apply(this, arguments));
  }

  (0, _createClass3.default)(Profile, [{
    key: 'getData',
    value: function getData(username) {
      this.props.dispatch(_booshReactUsers.UsersActions.getUsersAttempt({ username: username }));
      //this.props.dispatch(Actions.getCommentsAttempt('profile', username))
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var username = this.props.username;

      if (username) {
        this.getData(username);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      if (newProps.username !== this.props.username) {
        this.getData(newProps.username);
      }
    }
  }, {
    key: 'renderEditProfileButton',
    value: function renderEditProfileButton() {
      var _props = this.props,
          me = _props.me,
          user = _props.user;

      if (me.id != user.id) return false;
      return _react2.default.createElement(
        _reactRouter.Link,
        { to: "/settings/profile" },
        _react2.default.createElement(
          _reactFoundation.Button,
          { isHollow: true },
          'Edit Profile'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          me = _props2.me,
          user = _props2.user,
          username = _props2.username,
          slug = _props2.slug,
          pageNumber = _props2.pageNumber;

      console.log('RENDER PROFILE', user, username, slug, pageNumber);
      if (!user) return false;

      var title = "Profile";
      var html = "";

      var UserCoverPhotoStyle = {
        backgroundImage: 'url(' + user.coverphoto + ')'
      };

      return _react2.default.createElement(
        'div',
        { className: 'profile' },
        _react2.default.createElement('div', { className: 'UserCoverPhotoProfile', style: UserCoverPhotoStyle }),
        _react2.default.createElement(
          'div',
          { className: 'profile-main' },
          _react2.default.createElement(
            _reactFoundation.Row,
            { className: 'display' },
            _react2.default.createElement(
              _reactFoundation.Column,
              { small: 12 },
              _react2.default.createElement(_booshReactComponents.Portlet, { className: 'profile-nav-top', title: '', items: _react2.default.createElement(
                  _reactFoundation.Row,
                  { className: 'display' },
                  _react2.default.createElement(
                    _reactFoundation.Column,
                    { small: 12, medium: 12, large: 3 },
                    _react2.default.createElement('img', { className: 'UserPhoto UserPhotoLarge', src: user.photo })
                  ),
                  _react2.default.createElement(
                    _reactFoundation.Column,
                    { small: 12, medium: 12, large: 9 },
                    _react2.default.createElement(
                      _reactFoundation.Menu,
                      null,
                      _react2.default.createElement(
                        _reactFoundation.MenuItem,
                        null,
                        _react2.default.createElement(
                          _reactRouter.Link,
                          { activeClassName: 'active', to: "/" + user.username + "/activity" },
                          _react2.default.createElement(
                            'span',
                            { className: 'label' },
                            'Activity'
                          ),
                          _react2.default.createElement(
                            'span',
                            { className: 'count' },
                            '0'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactFoundation.MenuItem,
                        null,
                        _react2.default.createElement(
                          _reactRouter.Link,
                          { activeClassName: 'active', to: "/" + user.username + "/following" },
                          _react2.default.createElement(
                            'span',
                            { className: 'label' },
                            'Following'
                          ),
                          _react2.default.createElement(
                            'span',
                            { className: 'count' },
                            '0'
                          )
                        )
                      ),
                      _react2.default.createElement(
                        _reactFoundation.MenuItem,
                        null,
                        _react2.default.createElement(
                          _reactRouter.Link,
                          { activeClassName: 'active', to: "/" + user.username + "/followers" },
                          _react2.default.createElement(
                            'span',
                            { className: 'label' },
                            'Followers'
                          ),
                          _react2.default.createElement(
                            'span',
                            { className: 'count' },
                            '0'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'float-right' },
                      this.renderEditProfileButton()
                    ),
                    _react2.default.createElement('div', { className: 'clearfix' })
                  )
                ) })
            )
          ),
          _react2.default.createElement(
            _reactFoundation.Row,
            { className: 'display' },
            _react2.default.createElement(
              _reactFoundation.Column,
              { small: 12, medium: 4, large: 3 },
              _react2.default.createElement(_booshReactComponents.Portlet, { className: 'portlet-clear', items: _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(
                    'div',
                    { className: 'profile-meta' },
                    user.username
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'profile-meta' },
                    '@',
                    user.username
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'profile-meta' },
                    '#CHANTAJE Feat. @maluma El Nuevo Sencillo / The New Single http://smarturl.it/Chantaje'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'profile-meta' },
                    _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-map' }),
                    'Los Angeles'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'profile-meta' },
                    _react2.default.createElement(_reactFoundation.Icon, { name: 'fi-link' }),
                    _react2.default.createElement(
                      'a',
                      { href: 'http://www.clarkeanimation.com', target: '_blank' },
                      'clarkeanimation.com'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'ProfileButtons' },
                    _react2.default.createElement(_booshReactMessages.MessageButton, { user_id: user.id })
                  )
                ) })
            ),
            _react2.default.createElement(
              _reactFoundation.Column,
              { small: 12, medium: 8, large: 9 },
              _react2.default.createElement(
                'div',
                null,
                this.renderSection(slug, user, pageNumber)
              )
            )
          )
        )
      );
    }
  }, {
    key: 'renderSection',
    value: function renderSection(key, user, pageNumber) {
      switch (key) {
        case 'activity':
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactFoundation.Column,
              { medium: 12, large: 8 },
              _react2.default.createElement(_booshReactActivity.ActivitiesCollection, { user_id: user.id, pageNumber: pageNumber })
            ),
            _react2.default.createElement(_reactFoundation.Column, { large: 4 })
          );
          break;
        case 'media':
          return _react2.default.createElement(_booshReactComponents.Portlet, { title: 'Photos', items: _react2.default.createElement(_booshReactComponents.Gallery, { items: [{
                "thumb": "img/ca/portfolio/Web_JewelMintGames.jpg",
                "imgfull": "img/ca/portfolio/Web_JewelMintGamesBig.jpg"
              }, {
                "thumb": "img/ca/portfolio/Web_JewelMintLeaderboards.jpg",
                "imgfull": "img/ca/portfolio/Web_JewelMintLeaderboardsBig.jpg"
              }, {
                "thumb": "img/ca/portfolio/Web_JewelMintMysteryWheel.jpg",
                "imgfull": "img/ca/portfolio/Web_JewelMintMysteryWheelBig.jpg"
              }] }) });
          break;
        /*case 'followers':
          return (
            <Portlet className="portlet-clear" items={
              <FollowersCollection follow_id={user.id}/>
            } />
          )
        break;
         case 'following':
          return (
            <Portlet className="portlet-clear" items={
              <FollowingCollection user_id={user.id}/>
            } />
          )
        break;
        case 'favorites':
          return (
            <Portlet title={'Favorites'} items={
              <FavoritesCollection user_id={user.id}/>
            } />
          )
        break;
        case 'likes':
          return (
            <Portlet title={'Likes'} items={
              <ReactionsCollection user_id={user.id}/>
            } />
          )
        break;
        case 'groups':
          return (
            <Portlet title={'Groups'} items={
              <GroupsCollection user_id={user.id}/>
            } />
          )
        break;
        case 'friends':
          return (
            <Portlet title={'Groups'} items={
              <FriendsCollection user_id={user.id}/>
            } />
          )
        break;*/
        default:
          return _react2.default.createElement('div', null);
          break;
      }
    }
  }]);
  return Profile;
}(_react2.default.Component);
//import { ReactionsCollection, ReactionsButton } from 'boosh-react-reactions'

/* Components */

//import { CommentsCollection } from 'boosh-react-comments'


/* Selectors */

/* React */


Profile.propTypes = {
  me: _react2.default.PropTypes.object,
  username: _react2.default.PropTypes.string,
  slug: _react2.default.PropTypes.string,
  pageNumber: _react2.default.PropTypes.number,
  user: _react2.default.PropTypes.object
};

Profile.defaultProps = {
  me: {},
  username: 'unknown',
  slug: 'activity',
  pageNumber: 1,
  user: {}
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _booshReactAuth.getMe)(state, props),
    username: (0, _ProfileSelector.getUsername)(state, props),
    slug: (0, _ProfileSelector.getSlug)(state, props),
    pageNumber: (0, _ProfileSelector.getPageNumber)(state, props),
    user: (0, _booshReactUsers.getUserByUsername)(state, props)
  };
};

/*function preload(params, req) {
  return [
    [GetUsersSaga, {}]
  ];
}
Profile.preload = preload;*/

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Profile);