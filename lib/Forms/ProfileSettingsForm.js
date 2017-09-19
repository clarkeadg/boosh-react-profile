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

var _booshReactAuth = require('boosh-react-auth');

var _reactJsonschemaForm = require('react-jsonschema-form');

var _reactJsonschemaForm2 = _interopRequireDefault(_reactJsonschemaForm);

var _reactFoundation = require('react-foundation');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Actions */
//import Actions from '../Actions/Creators'

/* Selectors */

/* React */
var ProfileSettingsForm = function (_React$Component) {
  (0, _inherits3.default)(ProfileSettingsForm, _React$Component);

  function ProfileSettingsForm(props) {
    (0, _classCallCheck3.default)(this, ProfileSettingsForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ProfileSettingsForm.__proto__ || (0, _getPrototypeOf2.default)(ProfileSettingsForm)).call(this, props));

    _this.onSubmit = function (_ref) {
      /*this.state.form.formData.username = formData.username;
      this.props.dispatch(Actions.loginAttempt({
        username: formData.username,
        password: formData.password
      }))*/

      var formData = _ref.formData;
    };

    _this.onChange = function (_ref2) {
      var formData = _ref2.formData;
    };

    _this.onError = function (_ref3) {
      var formData = _ref3.formData;
    };

    _this.state = {
      form: {
        schema: {
          //title: "Account",
          type: "object",
          required: [],
          properties: {
            username: { title: "Username", type: "string", minLength: 3 },
            email: { title: "Email", type: "string", minLength: 3
              //bio: {title: "Bio", type: "string", minLength: 3 },
              //blog: {title: "URL", type: "string", minLength: 3 },
              //company: {title: "Company", type: "string", minLength: 3 },
              //location: {title: "Location", type: "string", minLength: 3 }
            } }
        },
        uiSchema: {
          user_profile_bio: {
            "ui:widget": "textarea"
          }
        },
        formData: {},
        buttons: [{ "type": "Submit", "title": "Update Profile" }]
      }
    };
    return _this;
  }

  (0, _createClass3.default)(ProfileSettingsForm, [{
    key: 'render',
    value: function render() {

      var z = this;
      var me = this.props.me;

      if (!me.email) return false;

      this.state.form.formData.username = me.username;
      this.state.form.formData.email = me.email;

      // { this.props.me.errorCode ? 'There was an error logging in.' : ''}

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactJsonschemaForm2.default,
          {
            schema: z.state.form.schema,
            uiSchema: z.state.form.uiSchema,
            formData: z.state.form.formData,
            onChange: z.onChange,
            onSubmit: z.onSubmit,
            onError: z.onError },
          _react2.default.createElement(
            'div',
            null,
            z.state.form.buttons.map(function (item, id) {
              return _react2.default.createElement(
                _reactFoundation.Button,
                { key: id, type: item.type },
                item.title
              );
            })
          )
        )
      );
    }
  }]);
  return ProfileSettingsForm;
}(_react2.default.Component);

/* Components */


var mapStateToProps = function mapStateToProps(state, props) {
  return {
    me: (0, _booshReactAuth.getMe)(state, props)
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProfileSettingsForm);