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

var _SettingsSelector = require('../Selectors/SettingsSelector');

var _reactFoundation = require('react-foundation');

var _booshReactComponents = require('boosh-react-components');

var _ProfileSettingsForm = require('../Forms/ProfileSettingsForm');

var _ProfileSettingsForm2 = _interopRequireDefault(_ProfileSettingsForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Actions */
//import Actions from '../Actions/Creators'

/* Selectors */
//import { getMe } from 'boosh-react-auth'

/* React */
var ProfileSettings = function (_React$Component) {
  (0, _inherits3.default)(ProfileSettings, _React$Component);

  function ProfileSettings() {
    (0, _classCallCheck3.default)(this, ProfileSettings);
    return (0, _possibleConstructorReturn3.default)(this, (ProfileSettings.__proto__ || (0, _getPrototypeOf2.default)(ProfileSettings)).apply(this, arguments));
  }

  (0, _createClass3.default)(ProfileSettings, [{
    key: 'render',
    value: function render() {
      var nav = this.props.nav;


      var title = "Profile Settings";

      return _react2.default.createElement(
        'div',
        { className: 'page' },
        _react2.default.createElement(
          _reactFoundation.Row,
          { className: 'display' },
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12, medium: 4 },
            _react2.default.createElement(_booshReactComponents.Portlet, { className: 'portlet-nopad', title: title, items: _react2.default.createElement(_booshReactComponents.Nav, { isVertical: true, items: nav }) })
          ),
          _react2.default.createElement(
            _reactFoundation.Column,
            { small: 12, medium: 8 },
            _react2.default.createElement(_booshReactComponents.Portlet, { title: title, items: _react2.default.createElement(_ProfileSettingsForm2.default, null) })
          )
        )
      );
    }
  }]);
  return ProfileSettings;
}(_react2.default.Component);

/* Forms */


/* Components */


ProfileSettings.propTypes = {
  nav: _react2.default.PropTypes.array
};

ProfileSettings.defaultProps = {
  nav: []
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    //me: getMe(state, props),
    nav: (0, _SettingsSelector.getNav)(state, props)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProfileSettings);