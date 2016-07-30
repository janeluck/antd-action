"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by Administrator on 2016/7/30.
 */
var Stack = function (_Array) {
    _inherits(Stack, _Array);

    function Stack() {
        _classCallCheck(this, Stack);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Stack).apply(this, arguments));
    }

    _createClass(Stack, [{
        key: "transferName",
        value: function transferName() {
            console.log("my name is stack");
        }
    }, {
        key: "top",
        get: function get() {
            return this[this.length - 1];
        }
    }, {
        key: "bottom",
        get: function get() {
            return this[0];
        }
    }]);

    return Stack;
}(Array);

var a = new Stack();
a.push(1);
a.push(2);
a.push(3);
console.log(a.top());
a.transferName();

var Nobel = function () {
    function Nobel() {
        _classCallCheck(this, Nobel);
    }

    _createClass(Nobel, [{
        key: "transferName",
        value: function transferName() {
            console.log("my name is nobel");
        }
    }]);

    return Nobel;
}();

var b = new Nobel();
