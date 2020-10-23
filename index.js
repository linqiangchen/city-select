"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _list = _interopRequireDefault(require("./component/list"));

var _AppScroll = _interopRequireDefault(require("./component/AppScroll"));

var _city = _interopRequireDefault(require("./city"));

require("./style/common.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function CitySelect(props) {
  var _useState = (0, _react.useState)('A'),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var _useState3 = (0, _react.useState)(props.city || _city.default),
      _useState4 = _slicedToArray(_useState3, 2),
      city = _useState4[0],
      setCity = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      io = _useState6[0],
      setIo = _useState6[1];

  var refMap = (0, _react.useRef)({});
  var refCb = (0, _react.useCallback)(function (el) {
    el && (refMap.current[el.innerText] = el);
  }, []);
  (0, _react.useEffect)(function () {
    var _io = new IntersectionObserver(function (entries) {
      var current = "";
      var arr = entries.filter(function (item) {
        return item.intersectionRatio;
      });

      for (var index = arr.length - 1; index >= 0; index--) {
        if (arr[index].intersectionRatio) {
          current = arr[index].target.classList[1];
          break;
        }
      }

      active !== current && current && setActive(current);
    });

    setIo(_io);
    return function () {};
  }, []);
  var handleSelected = (0, _react.useCallback)(function (item) {
    typeof props.citySelect === 'function' && props.citySelect(item);
  }, [props.selected]);
  var bs = (0, _react.useRef)(null);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "CitySelect",
    id: "CitySelect"
  }, /*#__PURE__*/_react.default.createElement(_AppScroll.default, {
    className: "citySelect-list-wrap",
    ref: bs
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "citySelect-container"
  }, Object.entries(city.letterMap).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        val = _ref2[1];

    return /*#__PURE__*/_react.default.createElement(_list.default, {
      title: key,
      city: val,
      key: key,
      className: key,
      io: io,
      ref: refCb,
      select: handleSelected
    });
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "citySelect-nav-right"
  }, Object.entries(city.letterMap).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    return /*#__PURE__*/_react.default.createElement("div", {
      className: active === key ? "active" : "",
      key: key,
      onClick: function onClick(ev) {
        setActive(key);
        bs.current.bs.scrollToElement(refMap.current[key], 0);
      }
    }, key);
  })));
}

var _default = /*#__PURE__*/(0, _react.memo)(CitySelect);

exports.default = _default;