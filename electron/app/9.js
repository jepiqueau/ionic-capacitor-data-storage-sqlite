(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-avatar_3-ios.entry.js ***!
  \*************************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var _core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-5ba38749.js */ "./node_modules/@ionic/core/dist/esm-es5/core-5ba38749.js");
/* harmony import */ var _config_6ccf652f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-6ccf652f.js */ "./node_modules/@ionic/core/dist/esm-es5/config-6ccf652f.js");
/* harmony import */ var _theme_353a032e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme-353a032e.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-353a032e.js");



var Avatar = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    class_1.prototype.render = function () {
        return (Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(class_1, "style", {
        get: function () { return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:48px;height:48px}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var Badge = /** @class */ (function () {
    function class_2(hostRef) {
        Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    class_2.prototype.render = function () {
        var _a;
        var mode = Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        return (Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object.assign({}, Object(_theme_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.color), (_a = {}, _a[mode] = true, _a)) }, Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-top:3px;--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{border-radius:10px}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var Thumbnail = /** @class */ (function () {
    function class_3(hostRef) {
        Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    class_3.prototype.render = function () {
        return (Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this) }, Object(_core_5ba38749_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(class_3, "style", {
        get: function () { return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}"; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());



/***/ })

}]);
//# sourceMappingURL=9.js.map