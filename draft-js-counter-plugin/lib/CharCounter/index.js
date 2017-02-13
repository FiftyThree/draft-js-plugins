'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _unionClassNames = require('union-class-names');

var _unionClassNames2 = _interopRequireDefault(_unionClassNames);

var _punycode = require('punycode');

var _punycode2 = _interopRequireDefault(_punycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharCounter = function (_Component) {
  _inherits(CharCounter, _Component);

  function CharCounter() {
    _classCallCheck(this, CharCounter);

    return _possibleConstructorReturn(this, (CharCounter.__proto__ || Object.getPrototypeOf(CharCounter)).apply(this, arguments));
  }

  _createClass(CharCounter, [{
    key: 'getCharCount',
    value: function getCharCount(editorState) {
      var decodeUnicode = function decodeUnicode(str) {
        return _punycode2.default.ucs2.decode(str);
      }; // func to handle unicode characters
      var plainText = editorState.getCurrentContent().getPlainText('');
      var regex = /(?:\r\n|\r|\n)/g; // new line, carriage return, line feed
      var cleanString = plainText.replace(regex, '').trim(); // replace above characters w/ nothing
      return decodeUnicode(cleanString).length;
    }
  }, {
    key: 'getClassNames',
    value: function getClassNames(count, limit) {
      var _props = this.props,
          _props$theme = _props.theme,
          theme = _props$theme === undefined ? {} : _props$theme,
          className = _props.className;

      var defaultStyle = (0, _unionClassNames2.default)(theme.counter, className);
      var overLimitStyle = (0, _unionClassNames2.default)(theme.counterOverLimit, className);
      return count > limit ? overLimitStyle : defaultStyle;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          store = _props2.store,
          limit = _props2.limit;

      var count = this.getCharCount(store.getEditorState());
      var classNames = this.getClassNames(count, limit);

      return _react2.default.createElement(
        'span',
        { className: classNames },
        count
      );
    }
  }]);

  return CharCounter;
}(_react.Component);

CharCounter.propTypes = {
  theme: _react.PropTypes.any
};
exports.default = CharCounter;