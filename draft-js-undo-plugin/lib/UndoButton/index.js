'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _unionClassNames = require('union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UndoButton = function (_Component) {
  _inherits(UndoButton, _Component);

  function UndoButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, UndoButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UndoButton.__proto__ || Object.getPrototypeOf(UndoButton)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function () {
      _this.props.store.setEditorState(_draftJs.EditorState.undo(_this.props.store.getEditorState()));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(UndoButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? {} : _props$theme,
          children = _props.children,
          className = _props.className;

      var combinedClassName = (0, _unionClassNames2.default)(theme.undo, className);
      return _react2.default.createElement(
        'button',
        {
          disabled: this.props.store.getEditorState().getUndoStack().isEmpty(),
          onClick: this.onClick,
          className: combinedClassName
        },
        children
      );
    }
  }]);

  return UndoButton;
}(_react.Component);

UndoButton.propTypes = {
  children: _react.PropTypes.node.isRequired,
  theme: _react.PropTypes.any
};
exports.default = UndoButton;