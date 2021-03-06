"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./style/list.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = /*#__PURE__*/(0, _react.memo)( /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var title = props.title,
      city = props.city,
      className = props.className;
  var listRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (props.io) {
      props.io.observe(listRef.current);
    }

    return function () {
      if (props.io) {
        props.io.unobserve(listRef.current);
      }
    };
  }, [props.io]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "citySelect-city-list " + className,
    ref: listRef
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "citySelect-city-tit",
    ref: ref
  }, title), /*#__PURE__*/_react.default.createElement("ul", null, city.map(function (item) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: item.id,
      onClick: function onClick() {
        props.select(item);
      }
    }, item.chineseFullnm);
  })));
}));

exports.default = _default;