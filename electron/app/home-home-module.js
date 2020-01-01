(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js ***!
  \**************************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return HapticsImpactStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return HapticsNotificationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return KeyboardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return KeyboardResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return ActionSheetOptionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return PermissionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return PhotosAlbumType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return StatusBarStyle; });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
var FilesystemDirectory;
(function (FilesystemDirectory) {
    /**
     * The Application directory
     */
    FilesystemDirectory["Application"] = "APPLICATION";
    /**
     * The Documents directory
     */
    FilesystemDirectory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     */
    FilesystemDirectory["Data"] = "DATA";
    /**
     * The Cache directory
     */
    FilesystemDirectory["Cache"] = "CACHE";
    /**
     * The external directory (Android only)
     */
    FilesystemDirectory["External"] = "EXTERNAL";
    /**
     * The external storage directory (Android only)
     */
    FilesystemDirectory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(FilesystemDirectory || (FilesystemDirectory = {}));
var FilesystemEncoding;
(function (FilesystemEncoding) {
    FilesystemEncoding["UTF8"] = "utf8";
    FilesystemEncoding["ASCII"] = "ascii";
    FilesystemEncoding["UTF16"] = "utf16";
})(FilesystemEncoding || (FilesystemEncoding = {}));
var HapticsImpactStyle;
(function (HapticsImpactStyle) {
    HapticsImpactStyle["Heavy"] = "HEAVY";
    HapticsImpactStyle["Medium"] = "MEDIUM";
    HapticsImpactStyle["Light"] = "LIGHT";
})(HapticsImpactStyle || (HapticsImpactStyle = {}));
var HapticsNotificationType;
(function (HapticsNotificationType) {
    HapticsNotificationType["SUCCESS"] = "SUCCESS";
    HapticsNotificationType["WARNING"] = "WARNING";
    HapticsNotificationType["ERROR"] = "ERROR";
})(HapticsNotificationType || (HapticsNotificationType = {}));
var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Dark"] = "DARK";
    KeyboardStyle["Light"] = "LIGHT";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResize;
(function (KeyboardResize) {
    KeyboardResize["Body"] = "body";
    KeyboardResize["Ionic"] = "ionic";
    KeyboardResize["Native"] = "native";
    KeyboardResize["None"] = "none";
})(KeyboardResize || (KeyboardResize = {}));
var ActionSheetOptionStyle;
(function (ActionSheetOptionStyle) {
    ActionSheetOptionStyle["Default"] = "DEFAULT";
    ActionSheetOptionStyle["Destructive"] = "DESTRUCTIVE";
    ActionSheetOptionStyle["Cancel"] = "CANCEL";
})(ActionSheetOptionStyle || (ActionSheetOptionStyle = {}));
//
var PermissionType;
(function (PermissionType) {
    PermissionType["Camera"] = "camera";
    PermissionType["Photos"] = "photos";
    PermissionType["Geolocation"] = "geolocation";
    PermissionType["Notifications"] = "notifications";
    PermissionType["ClipboardRead"] = "clipboard-read";
    PermissionType["ClipboardWrite"] = "clipboard-write";
})(PermissionType || (PermissionType = {}));
var PhotosAlbumType;
(function (PhotosAlbumType) {
    /**
     * Album is a "smart" album (such as Favorites or Recently Added)
     */
    PhotosAlbumType["Smart"] = "smart";
    /**
     * Album is a cloud-shared album
     */
    PhotosAlbumType["Shared"] = "shared";
    /**
     * Album is a user-created album
     */
    PhotosAlbumType["User"] = "user";
})(PhotosAlbumType || (PhotosAlbumType = {}));
var StatusBarStyle;
(function (StatusBarStyle) {
    /**
     * Light text for dark backgrounds.
     */
    StatusBarStyle["Dark"] = "DARK";
    /**
     * Dark text for light backgrounds.
     */
    StatusBarStyle["Light"] = "LIGHT";
})(StatusBarStyle || (StatusBarStyle = {}));
//# sourceMappingURL=core-plugin-definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/global.js":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/global.js ***!
  \*********************************************************/
/*! exports provided: Capacitor, Plugins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return Capacitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return Plugins; });
/* harmony import */ var _web_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-runtime */ "./node_modules/@capacitor/core/dist/esm/web-runtime.js");

// Create our default Capacitor instance, which will be
// overridden on native platforms
var Capacitor = (function (globalThis) {
    // Create a new CapacitorWeb instance if one doesn't already exist on globalThis
    // Ensure the global is assigned the same Capacitor instance,
    // then export Capacitor so it can be imported in other modules
    return globalThis.Capacitor = (globalThis.Capacitor || new _web_runtime__WEBPACK_IMPORTED_MODULE_0__["CapacitorWeb"]());
})(
// figure out the current globalThis, such as "window", "self" or "global"
// ensure errors are not thrown in an node SSR environment or web worker
typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
var Plugins = Capacitor.Plugins;

//# sourceMappingURL=global.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/index.js ***!
  \********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, FilesystemDirectory, FilesystemEncoding, HapticsImpactStyle, HapticsNotificationType, KeyboardStyle, KeyboardResize, ActionSheetOptionStyle, PermissionType, PhotosAlbumType, StatusBarStyle, Capacitor, Plugins, registerWebPlugin, WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["CameraResultType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["FilesystemEncoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsImpactStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsImpactStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HapticsNotificationType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["HapticsNotificationType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyboardResize", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["KeyboardResize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSheetOptionStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["ActionSheetOptionStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PermissionType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotosAlbumType", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["PhotosAlbumType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StatusBarStyle", function() { return _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_0__["StatusBarStyle"]; });

/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Capacitor", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Capacitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Plugins", function() { return _global__WEBPACK_IMPORTED_MODULE_1__["Plugins"]; });

/* harmony import */ var _web_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-plugins */ "./node_modules/@capacitor/core/dist/esm/web-plugins.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["registerWebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["App"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Browser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Camera"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Clipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Filesystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Device"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["LocalNotifications"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Modals"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Motion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Network"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Permissions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Storage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_plugins__WEBPACK_IMPORTED_MODULE_2__["Toast"]; });

/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPluginRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["WebPlugin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugins"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return _web_index__WEBPACK_IMPORTED_MODULE_3__["mergeWebPlugin"]; });





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/util.js ***!
  \*******************************************************/
/*! exports provided: extend, uuid4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid4", function() { return uuid4; });
var extend = function (target) {
    var objs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objs[_i - 1] = arguments[_i];
    }
    objs.forEach(function (o) {
        if (o && typeof (o) === 'object') {
            for (var k in o) {
                if (o.hasOwnProperty(k)) {
                    target[k] = o[k];
                }
            }
        }
    });
    return target;
};
var uuid4 = function () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-plugins.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-plugins.js ***!
  \**************************************************************/
/*! exports provided: registerWebPlugin, AccessibilityPluginWeb, Accessibility, AppPluginWeb, App, BrowserPluginWeb, Browser, CameraPluginWeb, Camera, ClipboardPluginWeb, Clipboard, FilesystemPluginWeb, Filesystem, GeolocationPluginWeb, Geolocation, DevicePluginWeb, Device, LocalNotificationsPluginWeb, LocalNotifications, SharePluginWeb, Share, ModalsPluginWeb, Modals, MotionPluginWeb, Motion, NetworkPluginWeb, Network, PermissionsPluginWeb, Permissions, SplashScreenPluginWeb, SplashScreen, StoragePluginWeb, Storage, ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWebPlugin", function() { return registerWebPlugin; });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./node_modules/@capacitor/core/dist/esm/global.js");
/* harmony import */ var _web_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web/index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _web_accessibility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web/accessibility */ "./node_modules/@capacitor/core/dist/esm/web/accessibility.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["AccessibilityPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return _web_accessibility__WEBPACK_IMPORTED_MODULE_2__["Accessibility"]; });

/* harmony import */ var _web_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web/app */ "./node_modules/@capacitor/core/dist/esm/web/app.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["AppPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "App", function() { return _web_app__WEBPACK_IMPORTED_MODULE_3__["App"]; });

/* harmony import */ var _web_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web/browser */ "./node_modules/@capacitor/core/dist/esm/web/browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return _web_browser__WEBPACK_IMPORTED_MODULE_4__["Browser"]; });

/* harmony import */ var _web_camera__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web/camera */ "./node_modules/@capacitor/core/dist/esm/web/camera.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["CameraPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return _web_camera__WEBPACK_IMPORTED_MODULE_5__["Camera"]; });

/* harmony import */ var _web_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web/clipboard */ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return _web_clipboard__WEBPACK_IMPORTED_MODULE_6__["Clipboard"]; });

/* harmony import */ var _web_filesystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web/filesystem */ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["FilesystemPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return _web_filesystem__WEBPACK_IMPORTED_MODULE_7__["Filesystem"]; });

/* harmony import */ var _web_geolocation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./web/geolocation */ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["GeolocationPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return _web_geolocation__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]; });

/* harmony import */ var _web_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./web/device */ "./node_modules/@capacitor/core/dist/esm/web/device.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["DevicePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return _web_device__WEBPACK_IMPORTED_MODULE_9__["Device"]; });

/* harmony import */ var _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./web/local-notifications */ "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotificationsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return _web_local_notifications__WEBPACK_IMPORTED_MODULE_10__["LocalNotifications"]; });

/* harmony import */ var _web_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./web/share */ "./node_modules/@capacitor/core/dist/esm/web/share.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["SharePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _web_share__WEBPACK_IMPORTED_MODULE_11__["Share"]; });

/* harmony import */ var _web_modals__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./web/modals */ "./node_modules/@capacitor/core/dist/esm/web/modals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["ModalsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return _web_modals__WEBPACK_IMPORTED_MODULE_12__["Modals"]; });

/* harmony import */ var _web_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./web/motion */ "./node_modules/@capacitor/core/dist/esm/web/motion.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["MotionPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return _web_motion__WEBPACK_IMPORTED_MODULE_13__["Motion"]; });

/* harmony import */ var _web_network__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./web/network */ "./node_modules/@capacitor/core/dist/esm/web/network.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["NetworkPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return _web_network__WEBPACK_IMPORTED_MODULE_14__["Network"]; });

/* harmony import */ var _web_permissions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./web/permissions */ "./node_modules/@capacitor/core/dist/esm/web/permissions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["PermissionsPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return _web_permissions__WEBPACK_IMPORTED_MODULE_15__["Permissions"]; });

/* harmony import */ var _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./web/splash-screen */ "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreenPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return _web_splash_screen__WEBPACK_IMPORTED_MODULE_16__["SplashScreen"]; });

/* harmony import */ var _web_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./web/storage */ "./node_modules/@capacitor/core/dist/esm/web/storage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["StoragePluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return _web_storage__WEBPACK_IMPORTED_MODULE_17__["Storage"]; });

/* harmony import */ var _web_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./web/toast */ "./node_modules/@capacitor/core/dist/esm/web/toast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["ToastPluginWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return _web_toast__WEBPACK_IMPORTED_MODULE_18__["Toast"]; });




















Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugins"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"]);
var registerWebPlugin = function (plugin) {
    Object(_web_index__WEBPACK_IMPORTED_MODULE_1__["mergeWebPlugin"])(_global__WEBPACK_IMPORTED_MODULE_0__["Plugins"], plugin);
};
//# sourceMappingURL=web-plugins.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web-runtime.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web-runtime.js ***!
  \**************************************************************/
/*! exports provided: CapacitorWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorWeb", function() { return CapacitorWeb; });
var CapacitorWeb = /** @class */ (function () {
    function CapacitorWeb() {
        var _this = this;
        this.platform = 'web';
        this.isNative = false;
        // Need to assign here to avoid having to define every plugin but still
        // get the typed benefits of the provided plugins in PluginRegistry
        this.Plugins = {};
        // Build a proxy for the Plugins object that returns the "Noop Plugin"
        // if a plugin isn't available
        this.Plugins = new Proxy(this.Plugins, {
            get: function (target, prop) {
                if (typeof target[prop] === 'undefined') {
                    var thisRef_1 = _this;
                    return new Proxy({}, {
                        get: function (_target, _prop) {
                            if (typeof _target[_prop] === 'undefined') {
                                return thisRef_1.pluginMethodNoop.bind(thisRef_1, _target, _prop, prop);
                            }
                            else {
                                return _target[_prop];
                            }
                        }
                    });
                }
                else {
                    return target[prop];
                }
            }
        });
    }
    CapacitorWeb.prototype.pluginMethodNoop = function (_target, _prop, pluginName) {
        return Promise.reject(pluginName + " does not have web implementation.");
    };
    CapacitorWeb.prototype.getPlatform = function () {
        return this.platform;
    };
    CapacitorWeb.prototype.isPluginAvailable = function (name) {
        return this.Plugins.hasOwnProperty(name);
    };
    CapacitorWeb.prototype.convertFileSrc = function (filePath) {
        return filePath;
    };
    CapacitorWeb.prototype.handleError = function (e) {
        console.error(e);
    };
    return CapacitorWeb;
}());

//# sourceMappingURL=web-runtime.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/accessibility.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/accessibility.js ***!
  \********************************************************************/
/*! exports provided: AccessibilityPluginWeb, Accessibility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessibilityPluginWeb", function() { return AccessibilityPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accessibility", function() { return Accessibility; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var AccessibilityPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AccessibilityPluginWeb, _super);
    function AccessibilityPluginWeb() {
        return _super.call(this, {
            name: 'Accessibility',
            platforms: ['web']
        }) || this;
    }
    AccessibilityPluginWeb.prototype.isScreenReaderEnabled = function () {
        throw new Error('Feature not available in the browser');
    };
    AccessibilityPluginWeb.prototype.speak = function (options) {
        if (!('speechSynthesis' in window)) {
            return Promise.reject('Browser does not support the Speech Synthesis API');
        }
        var utterance = new SpeechSynthesisUtterance(options.value);
        if (options.language) {
            utterance.lang = options.language;
        }
        window.speechSynthesis.speak(utterance);
        return Promise.resolve();
    };
    return AccessibilityPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Accessibility = new AccessibilityPluginWeb();

//# sourceMappingURL=accessibility.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/app.js":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/app.js ***!
  \**********************************************************/
/*! exports provided: AppPluginWeb, App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPluginWeb", function() { return AppPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var AppPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppPluginWeb, _super);
    function AppPluginWeb() {
        var _this = _super.call(this, {
            name: 'App',
            platforms: ['web']
        }) || this;
        if (typeof document !== 'undefined') {
            document.addEventListener('visibilitychange', _this.handleVisibilityChange.bind(_this), false);
        }
        return _this;
    }
    AppPluginWeb.prototype.exitApp = function () {
        throw new Error('Method not implemented.');
    };
    AppPluginWeb.prototype.canOpenUrl = function (_options) {
        return Promise.resolve({ value: true });
    };
    AppPluginWeb.prototype.openUrl = function (_options) {
        return Promise.resolve({ completed: true });
    };
    AppPluginWeb.prototype.getLaunchUrl = function () {
        return Promise.resolve({ url: '' });
    };
    AppPluginWeb.prototype.handleVisibilityChange = function () {
        var data = {
            isActive: document.hidden !== true
        };
        this.notifyListeners('appStateChange', data);
    };
    return AppPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var App = new AppPluginWeb();

//# sourceMappingURL=app.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/browser.js ***!
  \**************************************************************/
/*! exports provided: BrowserPluginWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserPluginWeb", function() { return BrowserPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var BrowserPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BrowserPluginWeb, _super);
    function BrowserPluginWeb() {
        return _super.call(this, {
            name: 'Browser',
            platforms: ['web']
        }) || this;
    }
    BrowserPluginWeb.prototype.open = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow = window.open(options.url, options.windowName || '_blank');
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.prefetch = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                // Does nothing
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    BrowserPluginWeb.prototype.close = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this._lastWindow && this._lastWindow.close();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    return BrowserPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Browser = new BrowserPluginWeb();

//# sourceMappingURL=browser.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/camera.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/camera.js ***!
  \*************************************************************/
/*! exports provided: CameraPluginWeb, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraPluginWeb", function() { return CameraPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var CameraPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(CameraPluginWeb, _super);
    function CameraPluginWeb() {
        return _super.call(this, {
            name: 'Camera',
            platforms: ['web']
        }) || this;
    }
    CameraPluginWeb.prototype.getPhoto = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                options;
                return [2 /*return*/, new Promise(function (resolve, reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var cameraModal;
                        var _this = this;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    cameraModal = document.createElement('pwa-camera-modal');
                                    document.body.appendChild(cameraModal);
                                    return [4 /*yield*/, cameraModal.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    cameraModal.addEventListener('onPhoto', function (e) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                                        var photo, _a;
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    photo = e.detail;
                                                    if (!(photo === null)) return [3 /*break*/, 1];
                                                    reject('User cancelled photos app');
                                                    return [3 /*break*/, 4];
                                                case 1:
                                                    if (!(photo instanceof Error)) return [3 /*break*/, 2];
                                                    reject(photo.message);
                                                    return [3 /*break*/, 4];
                                                case 2:
                                                    _a = resolve;
                                                    return [4 /*yield*/, this._getCameraPhoto(photo, options)];
                                                case 3:
                                                    _a.apply(void 0, [_b.sent()]);
                                                    _b.label = 4;
                                                case 4:
                                                    cameraModal.dismiss();
                                                    document.body.removeChild(cameraModal);
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    cameraModal.present();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    CameraPluginWeb.prototype._getCameraPhoto = function (photo, options) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            var format = photo.type.split('/')[1];
            if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri) {
                resolve({
                    webPath: URL.createObjectURL(photo),
                    format: format
                });
            }
            else {
                reader.readAsDataURL(photo);
                reader.onloadend = function () {
                    var r = reader.result;
                    if (options.resultType === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl) {
                        resolve({
                            dataUrl: r,
                            format: format
                        });
                    }
                    else {
                        resolve({
                            base64String: r.split(',')[1],
                            format: format
                        });
                    }
                };
                reader.onerror = function (e) {
                    reject(e);
                };
            }
        });
    };
    return CameraPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Camera = new CameraPluginWeb();

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/clipboard.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/clipboard.js ***!
  \****************************************************************/
/*! exports provided: ClipboardPluginWeb, Clipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipboardPluginWeb", function() { return ClipboardPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clipboard", function() { return Clipboard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ClipboardPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClipboardPluginWeb, _super);
    function ClipboardPluginWeb() {
        return _super.call(this, {
            name: 'Clipboard',
            platforms: ['web']
        }) || this;
    }
    ClipboardPluginWeb.prototype.write = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(options.string || options.url)) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.writeText(options.string || options.url)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        if (options.image) {
                            return [2 /*return*/, Promise.reject('Setting images not supported on the web')];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    ClipboardPluginWeb.prototype.read = function (_options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var text, data, _i, _a, item;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!navigator.clipboard) {
                            return [2 /*return*/, Promise.reject('Clipboard API not available in this browser')];
                        }
                        if (!(_options.type === 'string' || _options.type === 'url')) return [3 /*break*/, 2];
                        return [4 /*yield*/, navigator.clipboard.readText()];
                    case 1:
                        text = _b.sent();
                        return [2 /*return*/, Promise.resolve({ value: text })];
                    case 2: return [4 /*yield*/, navigator.clipboard.read()];
                    case 3:
                        data = _b.sent();
                        for (_i = 0, _a = data.items; _i < _a.length; _i++) {
                            item = _a[_i];
                            if (item.type === 'text/plain') {
                                return [2 /*return*/, Promise.resolve({ value: item.getAs('text/plain') })];
                            }
                        }
                        _b.label = 4;
                    case 4: return [2 /*return*/, Promise.reject('Unable to get data from clipboard')];
                }
            });
        });
    };
    return ClipboardPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Clipboard = new ClipboardPluginWeb();

//# sourceMappingURL=clipboard.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/device.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/device.js ***!
  \*************************************************************/
/*! exports provided: DevicePluginWeb, Device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePluginWeb", function() { return DevicePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var DevicePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DevicePluginWeb, _super);
    function DevicePluginWeb() {
        return _super.call(this, {
            name: 'Device',
            platforms: ['web']
        }) || this;
    }
    DevicePluginWeb.prototype.getInfo = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var ua, uaFields, battery, e_1;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ua = navigator.userAgent;
                        uaFields = this.parseUa(ua);
                        battery = {};
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.getBattery()];
                    case 2:
                        battery = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, Promise.resolve({
                            model: uaFields.model,
                            platform: 'web',
                            appVersion: '',
                            appBuild: '',
                            operatingSystem: uaFields.operatingSystem,
                            osVersion: uaFields.osVersion,
                            manufacturer: navigator.vendor,
                            isVirtual: false,
                            batteryLevel: battery.level,
                            isCharging: battery.charging,
                            uuid: this.getUid()
                        })];
                }
            });
        });
    };
    DevicePluginWeb.prototype.getLanguageCode = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, {
                        value: navigator.language
                    }];
            });
        });
    };
    DevicePluginWeb.prototype.parseUa = function (_ua) {
        var uaFields = {};
        var start = _ua.indexOf('(') + 1;
        var end = _ua.indexOf(') AppleWebKit');
        if (_ua.indexOf(') Gecko') !== -1) {
            end = _ua.indexOf(') Gecko');
        }
        var fields = _ua.substring(start, end);
        if (_ua.indexOf('Android') !== -1) {
            uaFields.model = fields.replace('; wv', '').split('; ').pop().split(' Build')[0];
            uaFields.osVersion = fields.split('; ')[1];
        }
        else {
            uaFields.model = fields.split('; ')[0];
            if (navigator.oscpu) {
                uaFields.osVersion = navigator.oscpu;
            }
            else {
                if (_ua.indexOf('Windows') !== -1) {
                    uaFields.osVersion = fields;
                }
                else {
                    var lastParts = fields.split('; ').pop().replace(' like Mac OS X', '').split(' ');
                    uaFields.osVersion = lastParts[lastParts.length - 1].replace(/_/g, '.');
                }
            }
        }
        if (/android/i.test(_ua)) {
            uaFields.operatingSystem = 'android';
        }
        else if (/iPad|iPhone|iPod/.test(_ua) && !window.MSStream) {
            uaFields.operatingSystem = 'ios';
        }
        else if (/Win/.test(_ua)) {
            uaFields.operatingSystem = 'windows';
        }
        else if (/Mac/i.test(_ua)) {
            uaFields.operatingSystem = 'mac';
        }
        else {
            uaFields.operatingSystem = 'unknown';
        }
        return uaFields;
    };
    DevicePluginWeb.prototype.getUid = function () {
        var uid = window.localStorage.getItem('_capuid');
        if (uid) {
            return uid;
        }
        uid = Object(_util__WEBPACK_IMPORTED_MODULE_2__["uuid4"])();
        window.localStorage.setItem('_capuid', uid);
        return uid;
    };
    return DevicePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Device = new DevicePluginWeb();

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/filesystem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/filesystem.js ***!
  \*****************************************************************/
/*! exports provided: FilesystemPluginWeb, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemPluginWeb", function() { return FilesystemPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var FilesystemPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FilesystemPluginWeb, _super);
    function FilesystemPluginWeb() {
        var _this = _super.call(this, {
            name: 'Filesystem',
            platforms: ['web']
        }) || this;
        _this.DEFAULT_DIRECTORY = _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data;
        _this.DB_VERSION = 1;
        _this.DB_NAME = 'Disc';
        _this._writeCmds = ['add', 'put', 'delete'];
        return _this;
    }
    FilesystemPluginWeb.prototype.initDb = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (this._db !== undefined) {
                    return [2 /*return*/, this._db];
                }
                if (!('indexedDB' in window)) {
                    throw new Error('This browser doesn\'t support IndexedDB');
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var request = indexedDB.open(_this.DB_NAME, _this.DB_VERSION);
                        request.onupgradeneeded = FilesystemPluginWeb.doUpgrade;
                        request.onsuccess = function () {
                            _this._db = request.result;
                            resolve(request.result);
                        };
                        request.onerror = function () { return reject(request.error); };
                        request.onblocked = function () {
                            console.warn('db blocked');
                        };
                    })];
            });
        });
    };
    FilesystemPluginWeb.doUpgrade = function (event) {
        var eventTarget = event.target;
        var db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default:
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                var store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
        }
    };
    FilesystemPluginWeb.prototype.dbRequest = function (cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var req = store[cmd].apply(store, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.dbIndexRequest = function (indexName, cmd, args) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var readFlag;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
                return [2 /*return*/, this.initDb()
                        .then(function (conn) {
                        return new Promise(function (resolve, reject) {
                            var tx = conn.transaction(['FileStorage'], readFlag);
                            var store = tx.objectStore('FileStorage');
                            var index = store.index(indexName);
                            var req = index[cmd].apply(index, args);
                            req.onsuccess = function () { return resolve(req.result); };
                            req.onerror = function () { return reject(req.error); };
                        });
                    })];
            });
        });
    };
    FilesystemPluginWeb.prototype.getPath = function (directory, uriPath) {
        directory = directory || this.DEFAULT_DIRECTORY;
        var cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        var fsPath = '/' + directory;
        if (uriPath !== '')
            fsPath += '/' + cleanedUriPath;
        return fsPath;
    };
    FilesystemPluginWeb.prototype.clear = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var conn, tx, store;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initDb()];
                    case 1:
                        conn = _a.sent();
                        tx = conn.transaction(['FileStorage'], 'readwrite');
                        store = tx.objectStore('FileStorage');
                        store.clear();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    FilesystemPluginWeb.prototype.readFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [2 /*return*/, { data: entry.content }];
                }
            });
        });
    };
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.writeFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, occupiedEntry, encoding, parentPath, parentEntry, subDirIndex, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        encoding = options.encoding;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        subDirIndex = parentPath.indexOf('/', 1);
                        if (!(subDirIndex !== -1)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(subDirIndex);
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: now,
                            mtime: now,
                            content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data,
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    FilesystemPluginWeb.prototype.appendFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, data, parentPath, now, ctime, occupiedEntry, parentEntry, parentArgPath, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        data = options.data;
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        now = Date.now();
                        ctime = now;
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        occupiedEntry = _a.sent();
                        if (occupiedEntry && occupiedEntry.type === 'directory')
                            throw ('The supplied path is a directory.');
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 2:
                        parentEntry = _a.sent();
                        if (!(parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({ path: parentArgPath, directory: options.directory, recursive: true })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        if (occupiedEntry !== undefined) {
                            data = occupiedEntry.content + data;
                            ctime = occupiedEntry.ctime;
                        }
                        pathObj = {
                            path: path,
                            folder: parentPath,
                            type: 'file',
                            size: data.length,
                            ctime: ctime,
                            mtime: now,
                            content: data
                        };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    FilesystemPluginWeb.prototype.deleteFile = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (entry === undefined)
                            throw Error('File does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        if (entries.length !== 0)
                            throw Error('Folder is not empty.');
                        return [4 /*yield*/, this.dbRequest('delete', [path])];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    FilesystemPluginWeb.prototype.mkdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, createIntermediateDirectories, recursive, doRecursive, parentPath, depth, parentEntry, occupiedEntry, parentArgPath, now, pathObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        createIntermediateDirectories = options.createIntermediateDirectories;
                        if (options.createIntermediateDirectories !== undefined) {
                            console.warn('createIntermediateDirectories is deprecated, use recursive');
                        }
                        recursive = options.recursive;
                        doRecursive = (createIntermediateDirectories || recursive);
                        parentPath = path.substr(0, path.lastIndexOf('/'));
                        depth = (path.match(/\//g) || []).length;
                        return [4 /*yield*/, this.dbRequest('get', [parentPath])];
                    case 1:
                        parentEntry = _a.sent();
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 2:
                        occupiedEntry = _a.sent();
                        if (depth === 1)
                            throw Error('Cannot create Root directory');
                        if (occupiedEntry !== undefined)
                            throw Error('Current directory does already exist.');
                        if (!doRecursive && depth !== 2 && parentEntry === undefined)
                            throw Error('Parent directory must exist');
                        if (!(doRecursive && depth !== 2 && parentEntry === undefined)) return [3 /*break*/, 4];
                        parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
                        return [4 /*yield*/, this.mkdir({
                                path: parentArgPath,
                                directory: options.directory,
                                recursive: doRecursive
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        now = Date.now();
                        pathObj = { path: path, folder: parentPath, type: 'directory', size: 0, ctime: now, mtime: now };
                        return [4 /*yield*/, this.dbRequest('put', [pathObj])];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    FilesystemPluginWeb.prototype.rmdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, directory, recursive, fullPath, entry, readDirResult, _i, _a, entry_1, entryPath, entryObj;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        path = options.path, directory = options.directory, recursive = options.recursive;
                        fullPath = this.getPath(directory, path);
                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                    case 1:
                        entry = _b.sent();
                        if (entry === undefined)
                            throw Error('Folder does not exist.');
                        if (entry.type !== 'directory')
                            throw Error('Requested path is not a directory');
                        return [4 /*yield*/, this.readdir({ path: path, directory: directory })];
                    case 2:
                        readDirResult = _b.sent();
                        if (readDirResult.files.length !== 0 && !recursive)
                            throw Error('Folder is not empty');
                        _i = 0, _a = readDirResult.files;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        entry_1 = _a[_i];
                        entryPath = path + "/" + entry_1;
                        return [4 /*yield*/, this.stat({ path: entryPath, directory: directory })];
                    case 4:
                        entryObj = _b.sent();
                        if (!(entryObj.type === 'file')) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.deleteFile({ path: entryPath, directory: directory })];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rmdir({ path: entryPath, directory: directory, recursive: recursive })];
                    case 7:
                        _b.sent();
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9: return [4 /*yield*/, this.dbRequest('delete', [fullPath])];
                    case 10:
                        _b.sent();
                        return [2 /*return*/, {}];
                }
            });
        });
    };
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    FilesystemPluginWeb.prototype.readdir = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry, entries, names;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (options.path !== '' && entry === undefined)
                            throw Error('Folder does not exist.');
                        return [4 /*yield*/, this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)])];
                    case 2:
                        entries = _a.sent();
                        names = entries.map(function (e) {
                            return e.substring(path.length + 1);
                        });
                        return [2 /*return*/, { files: names }];
                }
            });
        });
    };
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.getUri = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    FilesystemPluginWeb.prototype.stat = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var path, entry;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.getPath(options.directory, options.path);
                        return [4 /*yield*/, this.dbRequest('get', [path])];
                    case 1:
                        entry = _a.sent();
                        if (!(entry === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.dbRequest('get', [path + '/'])];
                    case 2:
                        entry = (_a.sent());
                        _a.label = 3;
                    case 3:
                        if (entry === undefined)
                            throw Error('Entry does not exist.');
                        return [2 /*return*/, {
                                type: entry.type,
                                size: entry.size,
                                ctime: entry.ctime,
                                mtime: entry.mtime,
                                uri: entry.path
                            }];
                }
            });
        });
    };
    /**
     * Rename a file or directory
     * @param options the options for the rename operation
     * @return a promise that resolves with the rename result
     */
    FilesystemPluginWeb.prototype.rename = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, true)];
            });
        });
    };
    /**
     * Copy a file or directory
     * @param options the options for the copy operation
     * @return a promise that resolves with the copy result
     */
    FilesystemPluginWeb.prototype.copy = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, this._copy(options, false)];
            });
        });
    };
    /**
     * Function that can perform a copy or a rename
     * @param options the options for the rename operation
     * @param doRename whether to perform a rename or copy operation
     * @return a promise that resolves with the result
     */
    FilesystemPluginWeb.prototype._copy = function (options, doRename) {
        if (doRename === void 0) { doRename = false; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var to, from, fromDirectory, toDirectory, fromPath, toPath, toObj, e_1, toPathComponents, toPath_1, toParentDirectory, fromObj, updateTime, _a, file, e_2, contents, _i, contents_1, filename;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        to = options.to, from = options.from, fromDirectory = options.directory, toDirectory = options.toDirectory;
                        if (!to || !from) {
                            throw Error('Both to and from must be provided');
                        }
                        // If no "to" directory is provided, use the "from" directory
                        if (!toDirectory) {
                            toDirectory = fromDirectory;
                        }
                        fromPath = this.getPath(fromDirectory, from);
                        toPath = this.getPath(toDirectory, to);
                        // Test that the "to" and "from" locations are different
                        if (fromPath === toPath) {
                            return [2 /*return*/, {}];
                        }
                        if (toPath.startsWith(fromPath)) {
                            throw Error('To path cannot contain the from path');
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 6]);
                        return [4 /*yield*/, this.stat({
                                path: to,
                                directory: toDirectory
                            })];
                    case 2:
                        toObj = _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        e_1 = _b.sent();
                        toPathComponents = to.split('/');
                        toPathComponents.pop();
                        toPath_1 = toPathComponents.join('/');
                        if (!(toPathComponents.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.stat({
                                path: toPath_1,
                                directory: toDirectory,
                            })];
                    case 4:
                        toParentDirectory = _b.sent();
                        if (toParentDirectory.type !== 'directory') {
                            throw new Error('Parent directory of the to path is a file');
                        }
                        _b.label = 5;
                    case 5: return [3 /*break*/, 6];
                    case 6:
                        // Cannot overwrite a directory
                        if (toObj && toObj.type === 'directory') {
                            throw new Error('Cannot overwrite a directory with a file');
                        }
                        return [4 /*yield*/, this.stat({
                                path: from,
                                directory: fromDirectory,
                            })];
                    case 7:
                        fromObj = _b.sent();
                        updateTime = function (path, ctime, mtime) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                            var fullPath, entry;
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fullPath = this.getPath(toDirectory, path);
                                        return [4 /*yield*/, this.dbRequest('get', [fullPath])];
                                    case 1:
                                        entry = _a.sent();
                                        entry.ctime = ctime;
                                        entry.mtime = mtime;
                                        return [4 /*yield*/, this.dbRequest('put', [entry])];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        _a = fromObj.type;
                        switch (_a) {
                            case 'file': return [3 /*break*/, 8];
                            case 'directory': return [3 /*break*/, 15];
                        }
                        return [3 /*break*/, 28];
                    case 8: return [4 /*yield*/, this.readFile({
                            path: from,
                            directory: fromDirectory
                        })];
                    case 9:
                        file = _b.sent();
                        if (!doRename) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.deleteFile({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: 
                    // Write the file to the new location
                    return [4 /*yield*/, this.writeFile({
                            path: to,
                            directory: toDirectory,
                            data: file.data
                        })];
                    case 12:
                        // Write the file to the new location
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 14];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 13:
                        _b.sent();
                        _b.label = 14;
                    case 14: 
                    // Resolve promise
                    return [2 /*return*/, {}];
                    case 15:
                        if (toObj) {
                            throw Error('Cannot move a directory over an existing object');
                        }
                        _b.label = 16;
                    case 16:
                        _b.trys.push([16, 20, , 21]);
                        // Create the to directory
                        return [4 /*yield*/, this.mkdir({
                                path: to,
                                directory: toDirectory,
                                recursive: false,
                            })];
                    case 17:
                        // Create the to directory
                        _b.sent();
                        if (!doRename) return [3 /*break*/, 19];
                        return [4 /*yield*/, updateTime(to, fromObj.ctime, fromObj.mtime)];
                    case 18:
                        _b.sent();
                        _b.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        e_2 = _b.sent();
                        return [3 /*break*/, 21];
                    case 21: return [4 /*yield*/, this.readdir({
                            path: from,
                            directory: fromDirectory,
                        })];
                    case 22:
                        contents = (_b.sent()).files;
                        _i = 0, contents_1 = contents;
                        _b.label = 23;
                    case 23:
                        if (!(_i < contents_1.length)) return [3 /*break*/, 26];
                        filename = contents_1[_i];
                        // Move item from the from directory to the to directory
                        return [4 /*yield*/, this._copy({
                                from: from + "/" + filename,
                                to: to + "/" + filename,
                                directory: fromDirectory,
                                toDirectory: toDirectory,
                            }, doRename)];
                    case 24:
                        // Move item from the from directory to the to directory
                        _b.sent();
                        _b.label = 25;
                    case 25:
                        _i++;
                        return [3 /*break*/, 23];
                    case 26:
                        if (!doRename) return [3 /*break*/, 28];
                        return [4 /*yield*/, this.rmdir({
                                path: from,
                                directory: fromDirectory
                            })];
                    case 27:
                        _b.sent();
                        _b.label = 28;
                    case 28: return [2 /*return*/, {}];
                }
            });
        });
    };
    FilesystemPluginWeb._debug = true;
    return FilesystemPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Filesystem = new FilesystemPluginWeb();

//# sourceMappingURL=filesystem.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/geolocation.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/geolocation.js ***!
  \******************************************************************/
/*! exports provided: GeolocationPluginWeb, Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPluginWeb", function() { return GeolocationPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./node_modules/@capacitor/core/dist/esm/util.js");



var GeolocationPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GeolocationPluginWeb, _super);
    function GeolocationPluginWeb() {
        return _super.call(this, {
            name: 'Geolocation',
            platforms: ['web']
        }) || this;
    }
    GeolocationPluginWeb.prototype.getCurrentPosition = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.requestPermissions().then(function (_result) {
                window.navigator.geolocation.getCurrentPosition(function (pos) {
                    resolve(pos);
                }, function (err) {
                    reject(err);
                }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    };
    GeolocationPluginWeb.prototype.watchPosition = function (options, callback) {
        var id = window.navigator.geolocation.watchPosition(function (pos) {
            callback(pos);
        }, function (err) {
            callback(null, err);
        }, Object(_util__WEBPACK_IMPORTED_MODULE_2__["extend"])({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));
        return "" + id;
    };
    GeolocationPluginWeb.prototype.clearWatch = function (options) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    };
    return GeolocationPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Geolocation = new GeolocationPluginWeb();

//# sourceMappingURL=geolocation.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/index.js ***!
  \************************************************************/
/*! exports provided: WebPluginRegistry, WebPlugins, WebPlugin, mergeWebPlugins, mergeWebPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPluginRegistry", function() { return WebPluginRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugins", function() { return WebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebPlugin", function() { return WebPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugins", function() { return mergeWebPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeWebPlugin", function() { return mergeWebPlugin; });
var WebPluginRegistry = /** @class */ (function () {
    function WebPluginRegistry() {
        this.plugins = {};
        this.loadedPlugins = {};
    }
    WebPluginRegistry.prototype.addPlugin = function (plugin) {
        this.plugins[plugin.config.name] = plugin;
    };
    WebPluginRegistry.prototype.getPlugin = function (name) {
        return this.plugins[name];
    };
    WebPluginRegistry.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            console.error("Unable to load web plugin " + name + ", no such plugin found.");
            return;
        }
        plugin.load();
    };
    WebPluginRegistry.prototype.getPlugins = function () {
        var p = [];
        for (var name_1 in this.plugins) {
            p.push(this.plugins[name_1]);
        }
        return p;
    };
    return WebPluginRegistry;
}());

var WebPlugins = new WebPluginRegistry();

var WebPlugin = /** @class */ (function () {
    function WebPlugin(config, pluginRegistry) {
        this.config = config;
        this.loaded = false;
        this.listeners = {};
        this.windowListeners = {};
        if (!pluginRegistry) {
            WebPlugins.addPlugin(this);
        }
        else {
            pluginRegistry.addPlugin(this);
        }
    }
    WebPlugin.prototype.addWindowListener = function (handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    };
    WebPlugin.prototype.removeWindowListener = function (handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    };
    WebPlugin.prototype.addListener = function (eventName, listenerFunc) {
        var _this = this;
        var listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        var windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        return {
            remove: function () {
                _this.removeListener(eventName, listenerFunc);
            }
        };
    };
    WebPlugin.prototype.removeListener = function (eventName, listenerFunc) {
        var listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        var index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    };
    WebPlugin.prototype.notifyListeners = function (eventName, data) {
        var listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(function (listener) { return listener(data); });
        }
    };
    WebPlugin.prototype.hasListeners = function (eventName) {
        return !!this.listeners[eventName].length;
    };
    WebPlugin.prototype.registerWindowListener = function (windowEventName, pluginEventName) {
        var _this = this;
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName: windowEventName,
            pluginEventName: pluginEventName,
            handler: function (event) {
                _this.notifyListeners(pluginEventName, event);
            }
        };
    };
    WebPlugin.prototype.requestPermissions = function () {
        if (Capacitor.isNative) {
            return Capacitor.nativePromise(this.config.name, 'requestPermissions', {});
        }
        else {
            return Promise.resolve({ results: [] });
        }
    };
    WebPlugin.prototype.load = function () {
        this.loaded = true;
    };
    return WebPlugin;
}());

var shouldMergeWebPlugin = function (plugin) {
    return plugin.config.platforms && plugin.config.platforms.indexOf(Capacitor.platform) >= 0;
};
/**
 * For all our known web plugins, merge them into the global plugins
 * registry if they aren't already existing. If they don't exist, that
 * means there's no existing native implementation for it.
 * @param knownPlugins the Capacitor.Plugins global registry.
 */
var mergeWebPlugins = function (knownPlugins) {
    var plugins = WebPlugins.getPlugins();
    for (var _i = 0, plugins_1 = plugins; _i < plugins_1.length; _i++) {
        var plugin = plugins_1[_i];
        mergeWebPlugin(knownPlugins, plugin);
    }
};
var mergeWebPlugin = function (knownPlugins, plugin) {
    // If we already have a plugin registered (meaning it was defined in the native layer),
    // then we should only overwrite it if the corresponding web plugin activates on
    // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
    if (knownPlugins.hasOwnProperty(plugin.config.name) && !shouldMergeWebPlugin(plugin)) {
        return;
    }
    knownPlugins[plugin.config.name] = plugin;
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/local-notifications.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/local-notifications.js ***!
  \**************************************************************************/
/*! exports provided: LocalNotificationsPluginWeb, LocalNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotificationsPluginWeb", function() { return LocalNotificationsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalNotifications", function() { return LocalNotifications; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var LocalNotificationsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LocalNotificationsPluginWeb, _super);
    function LocalNotificationsPluginWeb() {
        var _this = _super.call(this, {
            name: 'LocalNotifications',
            platforms: ['web']
        }) || this;
        _this.pending = [];
        return _this;
    }
    LocalNotificationsPluginWeb.prototype.sendPending = function () {
        var _this = this;
        var toRemove = [];
        var now = +new Date;
        this.pending.forEach(function (localNotification) {
            if (localNotification.schedule && localNotification.schedule.at) {
                if (+localNotification.schedule.at <= now) {
                    _this.buildNotification(localNotification);
                    toRemove.push(localNotification);
                }
            }
        });
        console.log('Sent pending, removing', toRemove);
        this.pending = this.pending.filter(function (localNotification) { return !toRemove.find(function (ln) { return ln === localNotification; }); });
    };
    LocalNotificationsPluginWeb.prototype.sendNotification = function (localNotification) {
        var _this = this;
        var l = localNotification;
        if (localNotification.schedule && localNotification.schedule.at) {
            var diff = +localNotification.schedule.at - +new Date;
            this.pending.push(l);
            setTimeout(function () {
                _this.sendPending();
            }, diff);
            return;
        }
        this.buildNotification(localNotification);
    };
    LocalNotificationsPluginWeb.prototype.buildNotification = function (localNotification) {
        var l = localNotification;
        return new Notification(l.title, {
            body: l.body
        });
    };
    LocalNotificationsPluginWeb.prototype.schedule = function (options) {
        var _this = this;
        var notifications = [];
        options.notifications.forEach(function (notification) {
            notifications.push(_this.sendNotification(notification));
        });
        return Promise.resolve({
            notifications: notifications.map(function (_) { return { id: '' }; })
        });
    };
    LocalNotificationsPluginWeb.prototype.getPending = function () {
        return Promise.resolve({
            notifications: this.pending.map(function (localNotification) {
                return {
                    id: '' + localNotification.id
                };
            })
        });
    };
    LocalNotificationsPluginWeb.prototype.registerActionTypes = function (_options) {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.cancel = function (pending) {
        console.log('Cancel these', pending);
        this.pending = this.pending.filter(function (localNotification) { return !pending.notifications.find(function (ln) { return ln.id === '' + localNotification.id; }); });
        return Promise.resolve();
    };
    LocalNotificationsPluginWeb.prototype.areEnabled = function () {
        throw new Error('Method not implemented.');
    };
    LocalNotificationsPluginWeb.prototype.requestPermissions = function () {
        return new Promise(function (resolve, reject) {
            Notification.requestPermission(function (result) {
                if (result === 'denied' || result === 'default') {
                    reject(result);
                    return;
                }
                resolve({
                    results: [result]
                });
            });
        });
    };
    return LocalNotificationsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var LocalNotifications = new LocalNotificationsPluginWeb();

//# sourceMappingURL=local-notifications.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/modals.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/modals.js ***!
  \*************************************************************/
/*! exports provided: ModalsPluginWeb, Modals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsPluginWeb", function() { return ModalsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modals", function() { return Modals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ModalsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ModalsPluginWeb, _super);
    function ModalsPluginWeb() {
        return _super.call(this, {
            name: 'Modals',
            platforms: ['web']
        }) || this;
    }
    ModalsPluginWeb.prototype.alert = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                window.alert(options.message);
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    ModalsPluginWeb.prototype.prompt = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.prompt(options.message, options.inputPlaceholder || '');
                return [2 /*return*/, Promise.resolve({
                        value: val,
                        cancelled: val === null
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.confirm = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var val;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                val = window.confirm(options.message);
                return [2 /*return*/, Promise.resolve({
                        value: val
                    })];
            });
        });
    };
    ModalsPluginWeb.prototype.showActions = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, _reject) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
                        var controller, items, actionSheetElement;
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    controller = document.querySelector('ion-action-sheet-controller');
                                    if (!controller) {
                                        controller = document.createElement('ion-action-sheet-controller');
                                        document.body.appendChild(controller);
                                    }
                                    return [4 /*yield*/, controller.componentOnReady()];
                                case 1:
                                    _a.sent();
                                    items = options.options.map(function (o, i) {
                                        return {
                                            text: o.title,
                                            role: o.style && o.style.toLowerCase() || '',
                                            icon: o.icon || '',
                                            handler: function () {
                                                resolve({
                                                    index: i
                                                });
                                            }
                                        };
                                    });
                                    return [4 /*yield*/, controller.create({
                                            title: options.title,
                                            buttons: items
                                        })];
                                case 2:
                                    actionSheetElement = _a.sent();
                                    return [4 /*yield*/, actionSheetElement.present()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    return ModalsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Modals = new ModalsPluginWeb();

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/motion.js":
/*!*************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/motion.js ***!
  \*************************************************************/
/*! exports provided: MotionPluginWeb, Motion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotionPluginWeb", function() { return MotionPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Motion", function() { return Motion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var MotionPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MotionPluginWeb, _super);
    function MotionPluginWeb() {
        var _this = _super.call(this, {
            name: 'Motion'
        }) || this;
        _this.registerWindowListener('devicemotion', 'accel');
        _this.registerWindowListener('deviceorientation', 'orientation');
        return _this;
    }
    return MotionPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Motion = new MotionPluginWeb();

//# sourceMappingURL=motion.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/network.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/network.js ***!
  \**************************************************************/
/*! exports provided: NetworkPluginWeb, Network */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkPluginWeb", function() { return NetworkPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Network", function() { return Network; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var NetworkPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(NetworkPluginWeb, _super);
    function NetworkPluginWeb() {
        var _this = _super.call(this, {
            name: 'Network',
            platforms: ['web']
        }) || this;
        _this.listenerFunction = null;
        return _this;
    }
    NetworkPluginWeb.prototype.getStatus = function () {
        return new Promise(function (resolve, reject) {
            if (!window.navigator) {
                reject('Network info not available');
                return;
            }
            var connected = window.navigator.onLine;
            var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
            var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
            resolve({
                connected: connected,
                connectionType: connected ? connectionType : 'none'
            });
        });
    };
    NetworkPluginWeb.prototype.addListener = function (eventName, listenerFunc) {
        var thisRef = this;
        var connection = window.navigator.connection || window.navigator.mozConnection || window.navigator.webkitConnection;
        var connectionType = connection ? (connection.type || connection.effectiveType) : 'wifi';
        var onlineBindFunc = listenerFunc.bind(thisRef, { connected: true, connectionType: connectionType });
        var offlineBindFunc = listenerFunc.bind(thisRef, { connected: false, connectionType: 'none' });
        if (eventName.localeCompare('networkStatusChange') === 0) {
            window.addEventListener('online', onlineBindFunc);
            window.addEventListener('offline', offlineBindFunc);
            return {
                remove: function () {
                    window.removeEventListener('online', onlineBindFunc);
                    window.removeEventListener('offline', offlineBindFunc);
                }
            };
        }
    };
    return NetworkPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Network = new NetworkPluginWeb();

//# sourceMappingURL=network.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/permissions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/permissions.js ***!
  \******************************************************************/
/*! exports provided: PermissionsPluginWeb, Permissions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsPluginWeb", function() { return PermissionsPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Permissions", function() { return Permissions; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");
/* harmony import */ var _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core-plugin-definitions */ "./node_modules/@capacitor/core/dist/esm/core-plugin-definitions.js");



var PermissionsPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PermissionsPluginWeb, _super);
    function PermissionsPluginWeb() {
        return _super.call(this, {
            name: 'Permissions'
        }) || this;
    }
    PermissionsPluginWeb.prototype.query = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var navigator, name, ret;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        navigator = window.navigator;
                        if (!navigator.permissions) {
                            return [2 /*return*/, Promise.reject('This browser does not support the Permissions API')];
                        }
                        name = options.name === _core_plugin_definitions__WEBPACK_IMPORTED_MODULE_2__["PermissionType"].Photos ? 'camera' : options.name;
                        return [4 /*yield*/, navigator.permissions.query({ name: name })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, {
                                state: ret.state
                            }];
                }
            });
        });
    };
    return PermissionsPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Permissions = new PermissionsPluginWeb();

//# sourceMappingURL=permissions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/share.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/share.js ***!
  \************************************************************/
/*! exports provided: SharePluginWeb, Share */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePluginWeb", function() { return SharePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return Share; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SharePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SharePluginWeb, _super);
    function SharePluginWeb() {
        return _super.call(this, {
            name: 'Share',
            platforms: ['web']
        }) || this;
    }
    SharePluginWeb.prototype.share = function (options) {
        if (!navigator.share) {
            return Promise.reject('Web Share API not available');
        }
        return navigator.share({
            title: options.title,
            text: options.text,
            url: options.url
        });
    };
    return SharePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Share = new SharePluginWeb();

//# sourceMappingURL=share.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/splash-screen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/splash-screen.js ***!
  \********************************************************************/
/*! exports provided: SplashScreenPluginWeb, SplashScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenPluginWeb", function() { return SplashScreenPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return SplashScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var SplashScreenPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SplashScreenPluginWeb, _super);
    function SplashScreenPluginWeb() {
        return _super.call(this, {
            name: 'SplashScreen',
            platforms: ['web']
        }) || this;
    }
    SplashScreenPluginWeb.prototype.show = function (_options, _callback) {
        return Promise.resolve();
    };
    SplashScreenPluginWeb.prototype.hide = function (_options, _callback) {
        return Promise.resolve();
    };
    return SplashScreenPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var SplashScreen = new SplashScreenPluginWeb();

//# sourceMappingURL=splash-screen.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/storage.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/storage.js ***!
  \**************************************************************/
/*! exports provided: StoragePluginWeb, Storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePluginWeb", function() { return StoragePluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Storage", function() { return Storage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var StoragePluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StoragePluginWeb, _super);
    function StoragePluginWeb() {
        var _this = _super.call(this, {
            name: 'Storage',
            platforms: ['web']
        }) || this;
        _this.KEY_PREFIX = '_cap_';
        return _this;
    }
    StoragePluginWeb.prototype.get = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                value: window.localStorage.getItem(_this.makeKey(options.key))
            });
        });
    };
    StoragePluginWeb.prototype.set = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.setItem(_this.makeKey(options.key), options.value);
            resolve();
        });
    };
    StoragePluginWeb.prototype.remove = function (options) {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            window.localStorage.removeItem(_this.makeKey(options.key));
            resolve();
        });
    };
    StoragePluginWeb.prototype.keys = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            resolve({
                keys: Object.keys(localStorage).filter(function (k) { return _this.isKey(k); }).map(function (k) { return _this.getKey(k); })
            });
        });
    };
    StoragePluginWeb.prototype.clear = function () {
        var _this = this;
        return new Promise(function (resolve, _reject) {
            Object.keys(localStorage)
                .filter(function (k) { return _this.isKey(k); })
                .forEach(function (k) { return window.localStorage.removeItem(k); });
            resolve();
        });
    };
    StoragePluginWeb.prototype.makeKey = function (key) {
        return this.KEY_PREFIX + key;
    };
    StoragePluginWeb.prototype.isKey = function (key) {
        return key.indexOf(this.KEY_PREFIX) === 0;
    };
    StoragePluginWeb.prototype.getKey = function (key) {
        return key.substr(this.KEY_PREFIX.length);
    };
    return StoragePluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Storage = new StoragePluginWeb();

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ "./node_modules/@capacitor/core/dist/esm/web/toast.js":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/esm/web/toast.js ***!
  \************************************************************/
/*! exports provided: ToastPluginWeb, Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPluginWeb", function() { return ToastPluginWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@capacitor/core/dist/esm/web/index.js");


var ToastPluginWeb = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ToastPluginWeb, _super);
    function ToastPluginWeb() {
        return _super.call(this, {
            name: 'Toast',
            platforms: ['web']
        }) || this;
    }
    ToastPluginWeb.prototype.show = function (options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var duration, toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                duration = 3000;
                if (options.duration) {
                    duration = options.duration === 'long' ? 5000 : 3000;
                }
                toast = document.createElement('pwa-toast');
                toast.duration = duration;
                toast.message = options.text;
                document.body.appendChild(toast);
                return [2 /*return*/];
            });
        });
    };
    return ToastPluginWeb;
}(_index__WEBPACK_IMPORTED_MODULE_1__["WebPlugin"]));

var Toast = new ToastPluginWeb();

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ "./node_modules/capacitor-data-storage-sqlite/dist/esm/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/capacitor-data-storage-sqlite/dist/esm/index.js ***!
  \**********************************************************************/
/*! exports provided: CapacitorDataStorageSqliteWeb, CapacitorDataStorageSqlite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web */ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapacitorDataStorageSqliteWeb", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["CapacitorDataStorageSqliteWeb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CapacitorDataStorageSqlite", function() { return _web__WEBPACK_IMPORTED_MODULE_0__["CapacitorDataStorageSqlite"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/Data.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/Data.js ***!
  \*******************************************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
class Data {
}
//# sourceMappingURL=Data.js.map

/***/ }),

/***/ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/StorageDatabaseHelper.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/StorageDatabaseHelper.js ***!
  \************************************************************************************************/
/*! exports provided: StorageDatabaseHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageDatabaseHelper", function() { return StorageDatabaseHelper; });
/* harmony import */ var jeep_localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jeep-localforage */ "./node_modules/jeep-localforage/dist/jeep-localforage.js");
/* harmony import */ var jeep_localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jeep_localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Data */ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/Data.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


//const DATABASE: string = "storageIDB";
//const STORAGESTORE: string = "storage_store";
class StorageDatabaseHelper {
    constructor(dbName, tableName) {
        this._db = null;
        this.openStore(dbName, tableName);
    }
    openStore(dbName, tableName) {
        let ret = false;
        const config = this.setConfig(dbName, tableName);
        this._db = jeep_localforage__WEBPACK_IMPORTED_MODULE_0___default.a.createInstance(config);
        if (this._db != null) {
            this._dbName = dbName;
            ret = true;
        }
        return ret;
    }
    setConfig(dbName, tableName) {
        let config = {
            name: dbName,
            storeName: tableName,
            driver: [jeep_localforage__WEBPACK_IMPORTED_MODULE_0___default.a.INDEXEDDB, jeep_localforage__WEBPACK_IMPORTED_MODULE_0___default.a.WEBSQL],
            version: 1
        };
        return config;
    }
    setTable(tableName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.openStore(this._dbName, tableName);
        });
    }
    set(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._db.setItem(data.name, data.value).then(() => {
                return Promise.resolve(true);
            })
                .catch((error) => {
                console.log('set: Error Data insertion failed: ' + error);
                return Promise.resolve(false);
            });
        });
    }
    get(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._db.getItem(name).then((value) => {
                let data = new _Data__WEBPACK_IMPORTED_MODULE_1__["Data"]();
                data.name = name;
                data.value = value;
                return Promise.resolve(data);
            })
                .catch((error) => {
                console.log('get: Error Data retrieve failed: ' + error);
                return Promise.resolve(null);
            });
        });
    }
    remove(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._db.removeItem(name).then(() => {
                return Promise.resolve(true);
            })
                .catch((error) => {
                console.log('remove: Error Data remove failed: ' + error);
                return Promise.resolve(false);
            });
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._db.clear().then(() => {
                return Promise.resolve(true);
            })
                .catch((error) => {
                console.log('clear: Error Data clear failed: ' + error);
                return Promise.resolve(false);
            });
        });
    }
    keys() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._db.keys().then((keys) => {
                return Promise.resolve(keys);
            })
                .catch((error) => {
                console.log('keys: Error Data retrieve keys failed: ' + error);
                return Promise.resolve(null);
            });
        });
    }
    values() {
        return __awaiter(this, void 0, void 0, function* () {
            let values = [];
            return this._db.iterate(((value) => {
                values.push(value);
            })).then(() => {
                return Promise.resolve(values);
            })
                .catch((error) => {
                console.log('values: Error Data retrieve values failed: ' + error);
                return Promise.resolve(null);
            });
        });
    }
    keysvalues() {
        return __awaiter(this, void 0, void 0, function* () {
            let keysvalues = [];
            return this._db.iterate(((value, key) => {
                let data = new _Data__WEBPACK_IMPORTED_MODULE_1__["Data"]();
                data.name = key;
                data.value = value;
                keysvalues.push(data);
            })).then(() => {
                return Promise.resolve(keysvalues);
            })
                .catch((error) => {
                console.log('keysvalues: Error Data retrieve keys/values failed: ' + error);
                return Promise.resolve(null);
            });
        });
    }
    iskey(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(name).then((data) => {
                if (data.value != null) {
                    return Promise.resolve(true);
                }
                else {
                    return Promise.resolve(false);
                }
            })
                .catch((error) => {
                console.log('iskey: Error Data retrieve iskey failed: ' + error);
                return Promise.resolve(false);
            });
        });
    }
}
//# sourceMappingURL=StorageDatabaseHelper.js.map

/***/ }),

/***/ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web.js":
/*!********************************************************************!*\
  !*** ./node_modules/capacitor-data-storage-sqlite/dist/esm/web.js ***!
  \********************************************************************/
/*! exports provided: CapacitorDataStorageSqliteWeb, CapacitorDataStorageSqlite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorDataStorageSqliteWeb", function() { return CapacitorDataStorageSqliteWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapacitorDataStorageSqlite", function() { return CapacitorDataStorageSqlite; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _web_utils_StorageDatabaseHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-utils/StorageDatabaseHelper */ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/StorageDatabaseHelper.js");
/* harmony import */ var _web_utils_Data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-utils/Data */ "./node_modules/capacitor-data-storage-sqlite/dist/esm/web-utils/Data.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



class CapacitorDataStorageSqliteWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super({
            name: 'CapacitorDataStorageSqlite',
            platforms: ['web']
        });
    }
    echo(options) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('ECHO', options);
            return options;
        });
    }
    openStore(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = false;
            let dbName = options.database ? `${options.database}IDB` : "storageIDB";
            let tableName = options.table ? options.table : "storage_store";
            this.mDb = new _web_utils_StorageDatabaseHelper__WEBPACK_IMPORTED_MODULE_1__["StorageDatabaseHelper"](dbName, tableName);
            if (this.mDb)
                ret = true;
            return Promise.resolve({ result: ret });
        });
    }
    setTable(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let tableName = options.table;
            if (tableName == null) {
                return Promise.reject("Must provide a table name");
            }
            let ret = false;
            let message = "";
            if (this.mDb) {
                ret = yield this.mDb.setTable(tableName);
                if (ret) {
                    return Promise.resolve({ result: ret, message: message });
                }
                else {
                    return Promise.resolve({ result: ret, message: "failed in adding table" });
                }
            }
            else {
                return Promise.resolve({ result: ret, message: "Must open a store first" });
            }
        });
    }
    set(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            let key = options.key;
            if (key == null) {
                return Promise.reject("Must provide key");
            }
            let value = options.value;
            if (value == null) {
                return Promise.reject("Must provide value");
            }
            let data = new _web_utils_Data__WEBPACK_IMPORTED_MODULE_2__["Data"]();
            data.name = key;
            data.value = value;
            ret = yield this.mDb.set(data);
            return Promise.resolve({ result: ret });
        });
    }
    get(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            let key = options.key;
            if (key == null) {
                return Promise.reject("Must provide key");
            }
            let data = yield this.mDb.get(key);
            ret = data != null ? data.value : null;
            return Promise.resolve({ value: ret });
        });
    }
    remove(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            let key = options.key;
            if (key == null) {
                return Promise.reject("Must provide key");
            }
            ret = yield this.mDb.remove(key);
            return Promise.resolve({ result: ret });
        });
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            ret = yield this.mDb.clear();
            return Promise.resolve({ result: ret });
        });
    }
    iskey(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            let key = options.key;
            if (key == null) {
                return Promise.reject("Must provide key");
            }
            ret = yield this.mDb.iskey(key);
            return Promise.resolve({ result: ret });
        });
    }
    keys() {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            ret = yield this.mDb.keys();
            return Promise.resolve({ keys: ret });
        });
    }
    values() {
        return __awaiter(this, void 0, void 0, function* () {
            let ret;
            ret = yield this.mDb.values();
            return Promise.resolve({ values: ret });
        });
    }
    keysvalues() {
        return __awaiter(this, void 0, void 0, function* () {
            let ret = [];
            let results;
            results = yield this.mDb.keysvalues();
            for (let i = 0; i < results.length; i++) {
                let res = { "key": results[i].name, "value": results[i].value };
                ret.push(res);
            }
            return Promise.resolve({ keysvalues: ret });
        });
    }
}
const CapacitorDataStorageSqlite = new CapacitorDataStorageSqliteWeb();


Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerWebPlugin"])(CapacitorDataStorageSqlite);
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/jeep-localforage/dist/jeep-localforage.js":
/*!****************************************************************!*\
  !*** ./node_modules/jeep-localforage/dist/jeep-localforage.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*!
    jeep-localForage -- Offline Storage, Improved
    Version 1.7.5-4
    https://localforage.github.io/localForage
    (c) 2013-2017 Mozilla, Apache License 2.0
*/
(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw (f.code="MODULE_NOT_FOUND", f)}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
'use strict';
var Mutation = global.MutationObserver || global.WebKitMutationObserver;

var scheduleDrain;

{
  if (Mutation) {
    var called = 0;
    var observer = new Mutation(nextTick);
    var element = global.document.createTextNode('');
    observer.observe(element, {
      characterData: true
    });
    scheduleDrain = function () {
      element.data = (called = ++called % 2);
    };
  } else if (!global.setImmediate && typeof global.MessageChannel !== 'undefined') {
    var channel = new global.MessageChannel();
    channel.port1.onmessage = nextTick;
    scheduleDrain = function () {
      channel.port2.postMessage(0);
    };
  } else if ('document' in global && 'onreadystatechange' in global.document.createElement('script')) {
    scheduleDrain = function () {

      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var scriptEl = global.document.createElement('script');
      scriptEl.onreadystatechange = function () {
        nextTick();

        scriptEl.onreadystatechange = null;
        scriptEl.parentNode.removeChild(scriptEl);
        scriptEl = null;
      };
      global.document.documentElement.appendChild(scriptEl);
    };
  } else {
    scheduleDrain = function () {
      setTimeout(nextTick, 0);
    };
  }
}

var draining;
var queue = [];
//named nextTick for less confusing stack traces
function nextTick() {
  draining = true;
  var i, oldQueue;
  var len = queue.length;
  while (len) {
    oldQueue = queue;
    queue = [];
    i = -1;
    while (++i < len) {
      oldQueue[i]();
    }
    len = queue.length;
  }
  draining = false;
}

module.exports = immediate;
function immediate(task) {
  if (queue.push(task) === 1 && !draining) {
    scheduleDrain();
  }
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(_dereq_,module,exports){
'use strict';
var immediate = _dereq_(1);

/* istanbul ignore next */
function INTERNAL() {}

var handlers = {};

var REJECTED = ['REJECTED'];
var FULFILLED = ['FULFILLED'];
var PENDING = ['PENDING'];

module.exports = Promise;

function Promise(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('resolver must be a function');
  }
  this.state = PENDING;
  this.queue = [];
  this.outcome = void 0;
  if (resolver !== INTERNAL) {
    safelyResolveThenable(this, resolver);
  }
}

Promise.prototype["catch"] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  if (typeof onFulfilled !== 'function' && this.state === FULFILLED ||
    typeof onRejected !== 'function' && this.state === REJECTED) {
    return this;
  }
  var promise = new this.constructor(INTERNAL);
  if (this.state !== PENDING) {
    var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
    unwrap(promise, resolver, this.outcome);
  } else {
    this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
  }

  return promise;
};
function QueueItem(promise, onFulfilled, onRejected) {
  this.promise = promise;
  if (typeof onFulfilled === 'function') {
    this.onFulfilled = onFulfilled;
    this.callFulfilled = this.otherCallFulfilled;
  }
  if (typeof onRejected === 'function') {
    this.onRejected = onRejected;
    this.callRejected = this.otherCallRejected;
  }
}
QueueItem.prototype.callFulfilled = function (value) {
  handlers.resolve(this.promise, value);
};
QueueItem.prototype.otherCallFulfilled = function (value) {
  unwrap(this.promise, this.onFulfilled, value);
};
QueueItem.prototype.callRejected = function (value) {
  handlers.reject(this.promise, value);
};
QueueItem.prototype.otherCallRejected = function (value) {
  unwrap(this.promise, this.onRejected, value);
};

function unwrap(promise, func, value) {
  immediate(function () {
    var returnValue;
    try {
      returnValue = func(value);
    } catch (e) {
      return handlers.reject(promise, e);
    }
    if (returnValue === promise) {
      handlers.reject(promise, new TypeError('Cannot resolve promise with itself'));
    } else {
      handlers.resolve(promise, returnValue);
    }
  });
}

handlers.resolve = function (self, value) {
  var result = tryCatch(getThen, value);
  if (result.status === 'error') {
    return handlers.reject(self, result.value);
  }
  var thenable = result.value;

  if (thenable) {
    safelyResolveThenable(self, thenable);
  } else {
    self.state = FULFILLED;
    self.outcome = value;
    var i = -1;
    var len = self.queue.length;
    while (++i < len) {
      self.queue[i].callFulfilled(value);
    }
  }
  return self;
};
handlers.reject = function (self, error) {
  self.state = REJECTED;
  self.outcome = error;
  var i = -1;
  var len = self.queue.length;
  while (++i < len) {
    self.queue[i].callRejected(error);
  }
  return self;
};

function getThen(obj) {
  // Make sure we only access the accessor once as required by the spec
  var then = obj && obj.then;
  if (obj && (typeof obj === 'object' || typeof obj === 'function') && typeof then === 'function') {
    return function appyThen() {
      then.apply(obj, arguments);
    };
  }
}

function safelyResolveThenable(self, thenable) {
  // Either fulfill, reject or reject with error
  var called = false;
  function onError(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.reject(self, value);
  }

  function onSuccess(value) {
    if (called) {
      return;
    }
    called = true;
    handlers.resolve(self, value);
  }

  function tryToUnwrap() {
    thenable(onSuccess, onError);
  }

  var result = tryCatch(tryToUnwrap);
  if (result.status === 'error') {
    onError(result.value);
  }
}

function tryCatch(func, value) {
  var out = {};
  try {
    out.value = func(value);
    out.status = 'success';
  } catch (e) {
    out.status = 'error';
    out.value = e;
  }
  return out;
}

Promise.resolve = resolve;
function resolve(value) {
  if (value instanceof this) {
    return value;
  }
  return handlers.resolve(new this(INTERNAL), value);
}

Promise.reject = reject;
function reject(reason) {
  var promise = new this(INTERNAL);
  return handlers.reject(promise, reason);
}

Promise.all = all;
function all(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var values = new Array(len);
  var resolved = 0;
  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    allResolver(iterable[i], i);
  }
  return promise;
  function allResolver(value, i) {
    self.resolve(value).then(resolveFromAll, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
    function resolveFromAll(outValue) {
      values[i] = outValue;
      if (++resolved === len && !called) {
        called = true;
        handlers.resolve(promise, values);
      }
    }
  }
}

Promise.race = race;
function race(iterable) {
  var self = this;
  if (Object.prototype.toString.call(iterable) !== '[object Array]') {
    return this.reject(new TypeError('must be an array'));
  }

  var len = iterable.length;
  var called = false;
  if (!len) {
    return this.resolve([]);
  }

  var i = -1;
  var promise = new this(INTERNAL);

  while (++i < len) {
    resolver(iterable[i]);
  }
  return promise;
  function resolver(value) {
    self.resolve(value).then(function (response) {
      if (!called) {
        called = true;
        handlers.resolve(promise, response);
      }
    }, function (error) {
      if (!called) {
        called = true;
        handlers.reject(promise, error);
      }
    });
  }
}

},{"1":1}],3:[function(_dereq_,module,exports){
(function (global){
'use strict';
if (typeof global.Promise !== 'function') {
  global.Promise = _dereq_(2);
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"2":2}],4:[function(_dereq_,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function getIDB() {
    /* global indexedDB,webkitIndexedDB,mozIndexedDB,OIndexedDB,msIndexedDB */
    try {
        if (typeof indexedDB !== 'undefined') {
            return indexedDB;
        }
        if (typeof webkitIndexedDB !== 'undefined') {
            return webkitIndexedDB;
        }
        if (typeof mozIndexedDB !== 'undefined') {
            return mozIndexedDB;
        }
        if (typeof OIndexedDB !== 'undefined') {
            return OIndexedDB;
        }
        if (typeof msIndexedDB !== 'undefined') {
            return msIndexedDB;
        }
    } catch (e) {
        return;
    }
}

var idb = getIDB();

function isIndexedDBValid() {
    try {
        // Initialize IndexedDB; fall back to vendor-prefixed versions
        // if needed.
        if (!idb) {
            return false;
        }
        /* Modified by JPQ as it doesn't work on chrome development tools
        // We mimic PouchDB here;
        //
        // We test for openDatabase because IE Mobile identifies itself
        // as Safari. Oh the lulz...
        var isSafari =
            typeof openDatabase !== 'undefined' &&
            /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) &&
            !/Chrome/.test(navigator.userAgent) &&
            !/BlackBerry/.test(navigator.platform);
         var hasFetch =
            typeof fetch === 'function' &&
            fetch.toString().indexOf('[native code') !== -1;
         // Safari <10.1 does not meet our requirements for IDB support
        // (see: https://github.com/pouchdb/pouchdb/issues/5572).
        // Safari 10.1 shipped with fetch, we can use that to detect it.
        // Note: this creates issues with `window.fetch` polyfills and
        // overrides; see:
        // https://github.com/localForage/localForage/issues/856
        return (
            (!isSafari || hasFetch) &&
            typeof indexedDB !== 'undefined' &&
            // some outdated implementations of IDB that appear on Samsung
            // and HTC Android devices <4.4 are missing IDBKeyRange
            // See: https://github.com/mozilla/localForage/issues/128
            // See: https://github.com/mozilla/localForage/issues/272
            typeof IDBKeyRange !== 'undefined'
        );
        */
        var retValue = false;
        var isApple = /(Macintosh|iPhone|iPad|iPod)/.test(navigator.userAgent);
        if (isApple) {
            var isSafari = typeof openDatabase !== 'undefined' && /(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) && !/Firefox/.test(navigator.userAgent) && !/BlackBerry/.test(navigator.platform) && !/Android/.test(navigator.userAgent);
            var isVersion = /(Version)/.test(navigator.userAgent);
            if (isSafari && isVersion) {
                var versionString = navigator.userAgent.substring(navigator.userAgent.indexOf('Version/'));
                versionString = versionString.substring(0, versionString.indexOf(' ')).replace('Version/', '');
                var versionArray = versionString.split('.');
                var version = Number(versionArray[0]);
                var subversion = versionArray.length > 1 ? Number(versionArray[1]) : -1;
                if (version === 10 && subversion >= 1 || version > 10) {
                    retValue = true;
                }
            } else {
                retValue = !isSafari && typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined';
            }
        } else {
            if (typeof indexedDB !== 'undefined' && typeof IDBKeyRange !== 'undefined') {
                retValue = true;
            }
        }
        return retValue;
    } catch (e) {
        return false;
    }
}

// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
// Abstracts constructing a Blob object, so it also works in older
// browsers that don't support the native Blob constructor. (i.e.
// old QtWebKit versions, at least).
function createBlob(parts, properties) {
    /* global BlobBuilder,MSBlobBuilder,MozBlobBuilder,WebKitBlobBuilder */
    parts = parts || [];
    properties = properties || {};
    try {
        return new Blob(parts, properties);
    } catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}

// This is CommonJS because lie is an external dependency, so Rollup
// can just ignore it.
if (typeof Promise === 'undefined') {
    // In the "nopromises" build this will just throw if you don't have
    // a global promise object, but it would throw anyway later.
    _dereq_(3);
}
var Promise$1 = Promise;

function executeCallback(promise, callback) {
    if (callback) {
        promise.then(function (result) {
            callback(null, result);
        }, function (error) {
            callback(error);
        });
    }
}

function executeTwoCallbacks(promise, callback, errorCallback) {
    if (typeof callback === 'function') {
        promise.then(callback);
    }

    if (typeof errorCallback === 'function') {
        promise["catch"](errorCallback);
    }
}

function normalizeKey(key) {
    // Cast the key to a string, as that's all we can set as a key.
    if (typeof key !== 'string') {
        console.warn(key + ' used as a key, but it is not a string.');
        key = String(key);
    }

    return key;
}

function getCallback() {
    if (arguments.length && typeof arguments[arguments.length - 1] === 'function') {
        return arguments[arguments.length - 1];
    }
}

// Some code originally from async_storage.js in
// [Gaia](https://github.com/mozilla-b2g/gaia).

var DETECT_BLOB_SUPPORT_STORE = 'local-forage-detect-blob-support';
var supportsBlobs = void 0;
var dbContexts = {};
var toString = Object.prototype.toString;

// Transaction Modes
var READ_ONLY = 'readonly';
var READ_WRITE = 'readwrite';

// Transform a binary string to an array buffer, because otherwise
// weird stuff happens when you try to work with the binary string directly.
// It is known.
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
function _binStringToArrayBuffer(bin) {
    var length = bin.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    for (var i = 0; i < length; i++) {
        arr[i] = bin.charCodeAt(i);
    }
    return buf;
}

//
// Blobs are not supported in all versions of IndexedDB, notably
// Chrome <37 and Android <5. In those versions, storing a blob will throw.
//
// Various other blob bugs exist in Chrome v37-42 (inclusive).
// Detecting them is expensive and confusing to users, and Chrome 37-42
// is at very low usage worldwide, so we do a hacky userAgent check instead.
//
// content-type bug: https://code.google.com/p/chromium/issues/detail?id=408120
// 404 bug: https://code.google.com/p/chromium/issues/detail?id=447916
// FileReader bug: https://code.google.com/p/chromium/issues/detail?id=447836
//
// Code borrowed from PouchDB. See:
// https://github.com/pouchdb/pouchdb/blob/master/packages/node_modules/pouchdb-adapter-idb/src/blobSupport.js
//
function _checkBlobSupportWithoutCaching(idb) {
    return new Promise$1(function (resolve) {
        var txn = idb.transaction(DETECT_BLOB_SUPPORT_STORE, READ_WRITE);
        var blob = createBlob(['']);
        txn.objectStore(DETECT_BLOB_SUPPORT_STORE).put(blob, 'key');

        txn.onabort = function (e) {
            // If the transaction aborts now its due to not being able to
            // write to the database, likely due to the disk being full
            e.preventDefault();
            e.stopPropagation();
            resolve(false);
        };

        txn.oncomplete = function () {
            var matchedChrome = navigator.userAgent.match(/Chrome\/(\d+)/);
            var matchedEdge = navigator.userAgent.match(/Edge\//);
            // MS Edge pretends to be Chrome 42:
            // https://msdn.microsoft.com/en-us/library/hh869301%28v=vs.85%29.aspx
            resolve(matchedEdge || !matchedChrome || parseInt(matchedChrome[1], 10) >= 43);
        };
    })["catch"](function () {
        return false; // error, so assume unsupported
    });
}

function _checkBlobSupport(idb) {
    if (typeof supportsBlobs === 'boolean') {
        return Promise$1.resolve(supportsBlobs);
    }
    return _checkBlobSupportWithoutCaching(idb).then(function (value) {
        supportsBlobs = value;
        return supportsBlobs;
    });
}

function _deferReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Create a deferred object representing the current database operation.
    var deferredOperation = {};

    deferredOperation.promise = new Promise$1(function (resolve, reject) {
        deferredOperation.resolve = resolve;
        deferredOperation.reject = reject;
    });

    // Enqueue the deferred operation.
    dbContext.deferredOperations.push(deferredOperation);

    // Chain its promise to the database readiness.
    if (!dbContext.dbReady) {
        dbContext.dbReady = deferredOperation.promise;
    } else {
        dbContext.dbReady = dbContext.dbReady.then(function () {
            return deferredOperation.promise;
        });
    }
}

function _advanceReadiness(dbInfo) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Resolve its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.resolve();
        return deferredOperation.promise;
    }
}

function _rejectReadiness(dbInfo, err) {
    var dbContext = dbContexts[dbInfo.name];

    // Dequeue a deferred operation.
    var deferredOperation = dbContext.deferredOperations.pop();

    // Reject its promise (which is part of the database readiness
    // chain of promises).
    if (deferredOperation) {
        deferredOperation.reject(err);
        return deferredOperation.promise;
    }
}

function _getConnection(dbInfo, upgradeNeeded) {
    return new Promise$1(function (resolve, reject) {
        dbContexts[dbInfo.name] = dbContexts[dbInfo.name] || createDbContext();

        if (dbInfo.db) {
            if (upgradeNeeded) {
                _deferReadiness(dbInfo);
                dbInfo.db.close();
            } else {
                return resolve(dbInfo.db);
            }
        }

        var dbArgs = [dbInfo.name];

        if (upgradeNeeded) {
            dbArgs.push(dbInfo.version);
        }

        var openreq = idb.open.apply(idb, dbArgs);

        if (upgradeNeeded) {
            openreq.onupgradeneeded = function (e) {
                var db = openreq.result;
                try {
                    db.createObjectStore(dbInfo.storeName);
                    if (e.oldVersion <= 1) {
                        // Added when support for blob shims was added
                        db.createObjectStore(DETECT_BLOB_SUPPORT_STORE);
                    }
                } catch (ex) {
                    if (ex.name === 'ConstraintError') {
                        console.warn('The database "' + dbInfo.name + '"' + ' has been upgraded from version ' + e.oldVersion + ' to version ' + e.newVersion + ', but the storage "' + dbInfo.storeName + '" already exists.');
                    } else {
                        throw ex;
                    }
                }
            };
        }

        openreq.onerror = function (e) {
            e.preventDefault();
            reject(openreq.error);
        };

        openreq.onsuccess = function () {
            resolve(openreq.result);
            _advanceReadiness(dbInfo);
        };
    });
}

function _getOriginalConnection(dbInfo) {
    return _getConnection(dbInfo, false);
}

function _getUpgradedConnection(dbInfo) {
    return _getConnection(dbInfo, true);
}

function _isUpgradeNeeded(dbInfo, defaultVersion) {
    if (!dbInfo.db) {
        return true;
    }

    var isNewStore = !dbInfo.db.objectStoreNames.contains(dbInfo.storeName);
    var isDowngrade = dbInfo.version < dbInfo.db.version;
    var isUpgrade = dbInfo.version > dbInfo.db.version;

    if (isDowngrade) {
        // If the version is not the default one
        // then warn for impossible downgrade.
        if (dbInfo.version !== defaultVersion) {
            console.warn('The database "' + dbInfo.name + '"' + " can't be downgraded from version " + dbInfo.db.version + ' to version ' + dbInfo.version + '.');
        }
        // Align the versions to prevent errors.
        dbInfo.version = dbInfo.db.version;
    }

    if (isUpgrade || isNewStore) {
        // If the store is new then increment the version (if needed).
        // This will trigger an "upgradeneeded" event which is required
        // for creating a store.
        if (isNewStore) {
            var incVersion = dbInfo.db.version + 1;
            if (incVersion > dbInfo.version) {
                dbInfo.version = incVersion;
            }
        }

        return true;
    }

    return false;
}

// encode a blob for indexeddb engines that don't support blobs
function _encodeBlob(blob) {
    return new Promise$1(function (resolve, reject) {
        var reader = new FileReader();
        reader.onerror = reject;
        reader.onloadend = function (e) {
            var base64 = btoa(e.target.result || '');
            resolve({
                __local_forage_encoded_blob: true,
                data: base64,
                type: blob.type
            });
        };
        reader.readAsBinaryString(blob);
    });
}

// decode an encoded blob
function _decodeBlob(encodedBlob) {
    var arrayBuff = _binStringToArrayBuffer(atob(encodedBlob.data));
    return createBlob([arrayBuff], { type: encodedBlob.type });
}

// is this one of our fancy encoded blobs?
function _isEncodedBlob(value) {
    return value && value.__local_forage_encoded_blob;
}

// Specialize the default `ready()` function by making it dependent
// on the current database operations. Thus, the driver will be actually
// ready when it's been initialized (default) *and* there are no pending
// operations on the database (initiated by some other instances).
function _fullyReady(callback) {
    var self = this;

    var promise = self._initReady().then(function () {
        var dbContext = dbContexts[self._dbInfo.name];

        if (dbContext && dbContext.dbReady) {
            return dbContext.dbReady;
        }
    });

    executeTwoCallbacks(promise, callback, callback);
    return promise;
}

// Try to establish a new db connection to replace the
// current one which is broken (i.e. experiencing
// InvalidStateError while creating a transaction).
function _tryReconnect(dbInfo) {
    _deferReadiness(dbInfo);

    var dbContext = dbContexts[dbInfo.name];
    var forages = dbContext.forages;

    for (var i = 0; i < forages.length; i++) {
        var forage = forages[i];
        if (forage._dbInfo.db) {
            forage._dbInfo.db.close();
            forage._dbInfo.db = null;
        }
    }
    dbInfo.db = null;

    return _getOriginalConnection(dbInfo).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        // store the latest db reference
        // in case the db was upgraded
        dbInfo.db = dbContext.db = db;
        for (var i = 0; i < forages.length; i++) {
            forages[i]._dbInfo.db = db;
        }
    })["catch"](function (err) {
        _rejectReadiness(dbInfo, err);
        throw err;
    });
}

// FF doesn't like Promises (micro-tasks) and IDDB store operations,
// so we have to do it with callbacks
function createTransaction(dbInfo, mode, callback, retries) {
    if (retries === undefined) {
        retries = 1;
    }

    try {
        var tx = dbInfo.db.transaction(dbInfo.storeName, mode);
        callback(null, tx);
    } catch (err) {
        if (retries > 0 && (!dbInfo.db || err.name === 'InvalidStateError' || err.name === 'NotFoundError')) {
            return Promise$1.resolve().then(function () {
                if (!dbInfo.db || err.name === 'NotFoundError' && !dbInfo.db.objectStoreNames.contains(dbInfo.storeName) && dbInfo.version <= dbInfo.db.version) {
                    // increase the db version, to create the new ObjectStore
                    if (dbInfo.db) {
                        dbInfo.version = dbInfo.db.version + 1;
                    }
                    // Reopen the database for upgrading.
                    return _getUpgradedConnection(dbInfo);
                }
            }).then(function () {
                return _tryReconnect(dbInfo).then(function () {
                    createTransaction(dbInfo, mode, callback, retries - 1);
                });
            })["catch"](callback);
        }

        callback(err);
    }
}

function createDbContext() {
    return {
        // Running localForages sharing a database.
        forages: [],
        // Shared database.
        db: null,
        // Database readiness (promise).
        dbReady: null,
        // Deferred operations on the database.
        deferredOperations: []
    };
}

// Open the IndexedDB database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    // Get the current context of the database;
    var dbContext = dbContexts[dbInfo.name];

    // ...or create a new context.
    if (!dbContext) {
        dbContext = createDbContext();
        // Register the new context in the global container.
        dbContexts[dbInfo.name] = dbContext;
    }

    // Register itself as a running localForage in the current context.
    dbContext.forages.push(self);

    // Replace the default `ready()` function with the specialized one.
    if (!self._initReady) {
        self._initReady = self.ready;
        self.ready = _fullyReady;
    }

    // Create an array of initialization states of the related localForages.
    var initPromises = [];

    function ignoreErrors() {
        // Don't handle errors here,
        // just makes sure related localForages aren't pending.
        return Promise$1.resolve();
    }

    for (var j = 0; j < dbContext.forages.length; j++) {
        var forage = dbContext.forages[j];
        if (forage !== self) {
            // Don't wait for itself...
            initPromises.push(forage._initReady()["catch"](ignoreErrors));
        }
    }

    // Take a snapshot of the related localForages.
    var forages = dbContext.forages.slice(0);

    // Initialize the connection process only when
    // all the related localForages aren't pending.
    return Promise$1.all(initPromises).then(function () {
        dbInfo.db = dbContext.db;
        // Get the connection or open a new one without upgrade.
        return _getOriginalConnection(dbInfo);
    }).then(function (db) {
        dbInfo.db = db;
        if (_isUpgradeNeeded(dbInfo, self._defaultConfig.version)) {
            // Reopen the database for upgrading.
            return _getUpgradedConnection(dbInfo);
        }
        return db;
    }).then(function (db) {
        dbInfo.db = dbContext.db = db;
        self._dbInfo = dbInfo;
        // Share the final connection amongst related localForages.
        for (var k = 0; k < forages.length; k++) {
            var forage = forages[k];
            if (forage !== self) {
                // Self is already up-to-date.
                forage._dbInfo.db = dbInfo.db;
                forage._dbInfo.version = dbInfo.version;
            }
        }
    });
}

function getItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.get(key);

                    req.onsuccess = function () {
                        var value = req.result;
                        if (value === undefined) {
                            value = null;
                        }
                        if (_isEncodedBlob(value)) {
                            value = _decodeBlob(value);
                        }
                        resolve(value);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items stored in database.
function iterate(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var iterationNumber = 1;

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (cursor) {
                            var value = cursor.value;
                            if (_isEncodedBlob(value)) {
                                value = _decodeBlob(value);
                            }
                            var result = iterator(value, cursor.key, iterationNumber++);

                            // when the iterator callback retuns any
                            // (non-`undefined`) value, then we stop
                            // the iteration immediately
                            if (result !== void 0) {
                                resolve(result);
                            } else {
                                cursor["continue"]();
                            }
                        } else {
                            resolve();
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);

    return promise;
}

function setItem(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        var dbInfo;
        self.ready().then(function () {
            dbInfo = self._dbInfo;
            if (toString.call(value) === '[object Blob]') {
                return _checkBlobSupport(dbInfo.db).then(function (blobSupport) {
                    if (blobSupport) {
                        return value;
                    }
                    return _encodeBlob(value);
                });
            }
            return value;
        }).then(function (value) {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);

                    // The reason we don't _save_ null is because IE 10 does
                    // not support saving the `null` type in IndexedDB. How
                    // ironic, given the bug below!
                    // See: https://github.com/mozilla/localForage/issues/161
                    if (value === null) {
                        value = undefined;
                    }

                    var req = store.put(value, key);

                    transaction.oncomplete = function () {
                        // Cast to undefined so the value passed to
                        // callback/promise is the same as what one would get out
                        // of `getItem()` later. This leads to some weirdness
                        // (setItem('foo', undefined) will return `null`), but
                        // it's not my fault localStorage is our baseline and that
                        // it's weird.
                        if (value === undefined) {
                            value = null;
                        }

                        resolve(value);
                    };
                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function removeItem(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    // We use a Grunt task to make this safe for IE and some
                    // versions of Android (including those used by Cordova).
                    // Normally IE won't like `.delete()` and will insist on
                    // using `['delete']()`, but we have a build step that
                    // fixes this for us now.
                    var req = store["delete"](key);
                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onerror = function () {
                        reject(req.error);
                    };

                    // The request will be also be aborted if we've exceeded our storage
                    // space.
                    transaction.onabort = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function clear(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_WRITE, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.clear();

                    transaction.oncomplete = function () {
                        resolve();
                    };

                    transaction.onabort = transaction.onerror = function () {
                        var err = req.error ? req.error : req.transaction.error;
                        reject(err);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function length(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.count();

                    req.onsuccess = function () {
                        resolve(req.result);
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function key(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        if (n < 0) {
            resolve(null);

            return;
        }

        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var advanced = false;
                    var req = store.openCursor();

                    req.onsuccess = function () {
                        var cursor = req.result;
                        if (!cursor) {
                            // this means there weren't enough keys
                            resolve(null);

                            return;
                        }

                        if (n === 0) {
                            // We have the first key, return it if that's what they
                            // wanted.
                            resolve(cursor.key);
                        } else {
                            if (!advanced) {
                                // Otherwise, ask the cursor to skip ahead n
                                // records.
                                advanced = true;
                                cursor.advance(n);
                            } else {
                                // When we get here, we've got the nth key.
                                resolve(cursor.key);
                            }
                        }
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            createTransaction(self._dbInfo, READ_ONLY, function (err, transaction) {
                if (err) {
                    return reject(err);
                }

                try {
                    var store = transaction.objectStore(self._dbInfo.storeName);
                    var req = store.openCursor();
                    var keys = [];

                    req.onsuccess = function () {
                        var cursor = req.result;

                        if (!cursor) {
                            resolve(keys);
                            return;
                        }

                        keys.push(cursor.key);
                        cursor["continue"]();
                    };

                    req.onerror = function () {
                        reject(req.error);
                    };
                } catch (e) {
                    reject(e);
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        var isCurrentDb = options.name === currentConfig.name && self._dbInfo.db;

        var dbPromise = isCurrentDb ? Promise$1.resolve(self._dbInfo.db) : _getOriginalConnection(options).then(function (db) {
            var dbContext = dbContexts[options.name];
            var forages = dbContext.forages;
            dbContext.db = db;
            for (var i = 0; i < forages.length; i++) {
                forages[i]._dbInfo.db = db;
            }
            return db;
        });

        if (!options.storeName) {
            promise = dbPromise.then(function (db) {
                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                }

                var dropDBPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.deleteDatabase(options.name);

                    req.onerror = req.onblocked = function (err) {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        reject(err);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        if (db) {
                            db.close();
                        }
                        resolve(db);
                    };
                });

                return dropDBPromise.then(function (db) {
                    dbContext.db = db;
                    for (var i = 0; i < forages.length; i++) {
                        var _forage = forages[i];
                        _advanceReadiness(_forage._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        } else {
            promise = dbPromise.then(function (db) {
                if (!db.objectStoreNames.contains(options.storeName)) {
                    return;
                }

                var newVersion = db.version + 1;

                _deferReadiness(options);

                var dbContext = dbContexts[options.name];
                var forages = dbContext.forages;

                db.close();
                for (var i = 0; i < forages.length; i++) {
                    var forage = forages[i];
                    forage._dbInfo.db = null;
                    forage._dbInfo.version = newVersion;
                }

                var dropObjectPromise = new Promise$1(function (resolve, reject) {
                    var req = idb.open(options.name, newVersion);

                    req.onerror = function (err) {
                        var db = req.result;
                        db.close();
                        reject(err);
                    };

                    req.onupgradeneeded = function () {
                        var db = req.result;
                        db.deleteObjectStore(options.storeName);
                    };

                    req.onsuccess = function () {
                        var db = req.result;
                        db.close();
                        resolve(db);
                    };
                });

                return dropObjectPromise.then(function (db) {
                    dbContext.db = db;
                    for (var j = 0; j < forages.length; j++) {
                        var _forage2 = forages[j];
                        _forage2._dbInfo.db = db;
                        _advanceReadiness(_forage2._dbInfo);
                    }
                })["catch"](function (err) {
                    (_rejectReadiness(options, err) || Promise$1.resolve())["catch"](function () {});
                    throw err;
                });
            });
        }
    }

    executeCallback(promise, callback);
    return promise;
}

var asyncStorage = {
    _driver: 'asyncStorage',
    _initStorage: _initStorage,
    _support: isIndexedDBValid(),
    iterate: iterate,
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
    clear: clear,
    length: length,
    key: key,
    keys: keys,
    dropInstance: dropInstance
};

function isWebSQLValid() {
    return typeof openDatabase === 'function';
}

// Sadly, the best way to save binary data in WebSQL/localStorage is serializing
// it to Base64, so this is how we store it to prevent very strange errors with less
// verbose ways of binary <-> string data storage.
var BASE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

var BLOB_TYPE_PREFIX = '~~local_forage_type~';
var BLOB_TYPE_PREFIX_REGEX = /^~~local_forage_type~([^~]+)~/;

var SERIALIZED_MARKER = '__lfsc__:';
var SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER.length;

// OMG the serializations!
var TYPE_ARRAYBUFFER = 'arbf';
var TYPE_BLOB = 'blob';
var TYPE_INT8ARRAY = 'si08';
var TYPE_UINT8ARRAY = 'ui08';
var TYPE_UINT8CLAMPEDARRAY = 'uic8';
var TYPE_INT16ARRAY = 'si16';
var TYPE_INT32ARRAY = 'si32';
var TYPE_UINT16ARRAY = 'ur16';
var TYPE_UINT32ARRAY = 'ui32';
var TYPE_FLOAT32ARRAY = 'fl32';
var TYPE_FLOAT64ARRAY = 'fl64';
var TYPE_SERIALIZED_MARKER_LENGTH = SERIALIZED_MARKER_LENGTH + TYPE_ARRAYBUFFER.length;

var toString$1 = Object.prototype.toString;

function stringToBuffer(serializedString) {
    // Fill the string into a ArrayBuffer.
    var bufferLength = serializedString.length * 0.75;
    var len = serializedString.length;
    var i;
    var p = 0;
    var encoded1, encoded2, encoded3, encoded4;

    if (serializedString[serializedString.length - 1] === '=') {
        bufferLength--;
        if (serializedString[serializedString.length - 2] === '=') {
            bufferLength--;
        }
    }

    var buffer = new ArrayBuffer(bufferLength);
    var bytes = new Uint8Array(buffer);

    for (i = 0; i < len; i += 4) {
        encoded1 = BASE_CHARS.indexOf(serializedString[i]);
        encoded2 = BASE_CHARS.indexOf(serializedString[i + 1]);
        encoded3 = BASE_CHARS.indexOf(serializedString[i + 2]);
        encoded4 = BASE_CHARS.indexOf(serializedString[i + 3]);

        /*jslint bitwise: true */
        bytes[p++] = encoded1 << 2 | encoded2 >> 4;
        bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
        bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }
    return buffer;
}

// Converts a buffer to a string to store, serialized, in the backend
// storage library.
function bufferToString(buffer) {
    // base64-arraybuffer
    var bytes = new Uint8Array(buffer);
    var base64String = '';
    var i;

    for (i = 0; i < bytes.length; i += 3) {
        /*jslint bitwise: true */
        base64String += BASE_CHARS[bytes[i] >> 2];
        base64String += BASE_CHARS[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
        base64String += BASE_CHARS[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
        base64String += BASE_CHARS[bytes[i + 2] & 63];
    }

    if (bytes.length % 3 === 2) {
        base64String = base64String.substring(0, base64String.length - 1) + '=';
    } else if (bytes.length % 3 === 1) {
        base64String = base64String.substring(0, base64String.length - 2) + '==';
    }

    return base64String;
}

// Serialize a value, afterwards executing a callback (which usually
// instructs the `setItem()` callback/promise to be executed). This is how
// we store binary data with localStorage.
function serialize(value, callback) {
    var valueType = '';
    if (value) {
        valueType = toString$1.call(value);
    }

    // Cannot use `value instanceof ArrayBuffer` or such here, as these
    // checks fail when running the tests using casper.js...
    //
    // TODO: See why those tests fail and use a better solution.
    if (value && (valueType === '[object ArrayBuffer]' || value.buffer && toString$1.call(value.buffer) === '[object ArrayBuffer]')) {
        // Convert binary arrays to a string and prefix the string with
        // a special marker.
        var buffer;
        var marker = SERIALIZED_MARKER;

        if (value instanceof ArrayBuffer) {
            buffer = value;
            marker += TYPE_ARRAYBUFFER;
        } else {
            buffer = value.buffer;

            if (valueType === '[object Int8Array]') {
                marker += TYPE_INT8ARRAY;
            } else if (valueType === '[object Uint8Array]') {
                marker += TYPE_UINT8ARRAY;
            } else if (valueType === '[object Uint8ClampedArray]') {
                marker += TYPE_UINT8CLAMPEDARRAY;
            } else if (valueType === '[object Int16Array]') {
                marker += TYPE_INT16ARRAY;
            } else if (valueType === '[object Uint16Array]') {
                marker += TYPE_UINT16ARRAY;
            } else if (valueType === '[object Int32Array]') {
                marker += TYPE_INT32ARRAY;
            } else if (valueType === '[object Uint32Array]') {
                marker += TYPE_UINT32ARRAY;
            } else if (valueType === '[object Float32Array]') {
                marker += TYPE_FLOAT32ARRAY;
            } else if (valueType === '[object Float64Array]') {
                marker += TYPE_FLOAT64ARRAY;
            } else {
                callback(new Error('Failed to get type for BinaryArray'));
            }
        }

        callback(marker + bufferToString(buffer));
    } else if (valueType === '[object Blob]') {
        // Conver the blob to a binaryArray and then to a string.
        var fileReader = new FileReader();

        fileReader.onload = function () {
            // Backwards-compatible prefix for the blob type.
            var str = BLOB_TYPE_PREFIX + value.type + '~' + bufferToString(this.result);

            callback(SERIALIZED_MARKER + TYPE_BLOB + str);
        };

        fileReader.readAsArrayBuffer(value);
    } else {
        try {
            callback(JSON.stringify(value));
        } catch (e) {
            console.error("Couldn't convert value into a JSON string: ", value);

            callback(null, e);
        }
    }
}

// Deserialize data we've inserted into a value column/field. We place
// special markers into our strings to mark them as encoded; this isn't
// as nice as a meta field, but it's the only sane thing we can do whilst
// keeping localStorage support intact.
//
// Oftentimes this will just deserialize JSON content, but if we have a
// special marker (SERIALIZED_MARKER, defined above), we will extract
// some kind of arraybuffer/binary data/typed array out of the string.
function deserialize(value) {
    // If we haven't marked this string as being specially serialized (i.e.
    // something other than serialized JSON), we can just return it and be
    // done with it.
    if (value.substring(0, SERIALIZED_MARKER_LENGTH) !== SERIALIZED_MARKER) {
        return JSON.parse(value);
    }

    // The following code deals with deserializing some kind of Blob or
    // TypedArray. First we separate out the type of data we're dealing
    // with from the data itself.
    var serializedString = value.substring(TYPE_SERIALIZED_MARKER_LENGTH);
    var type = value.substring(SERIALIZED_MARKER_LENGTH, TYPE_SERIALIZED_MARKER_LENGTH);

    var blobType;
    // Backwards-compatible blob type serialization strategy.
    // DBs created with older versions of localForage will simply not have the blob type.
    if (type === TYPE_BLOB && BLOB_TYPE_PREFIX_REGEX.test(serializedString)) {
        var matcher = serializedString.match(BLOB_TYPE_PREFIX_REGEX);
        blobType = matcher[1];
        serializedString = serializedString.substring(matcher[0].length);
    }
    var buffer = stringToBuffer(serializedString);

    // Return the right type based on the code/type set during
    // serialization.
    switch (type) {
        case TYPE_ARRAYBUFFER:
            return buffer;
        case TYPE_BLOB:
            return createBlob([buffer], { type: blobType });
        case TYPE_INT8ARRAY:
            return new Int8Array(buffer);
        case TYPE_UINT8ARRAY:
            return new Uint8Array(buffer);
        case TYPE_UINT8CLAMPEDARRAY:
            return new Uint8ClampedArray(buffer);
        case TYPE_INT16ARRAY:
            return new Int16Array(buffer);
        case TYPE_UINT16ARRAY:
            return new Uint16Array(buffer);
        case TYPE_INT32ARRAY:
            return new Int32Array(buffer);
        case TYPE_UINT32ARRAY:
            return new Uint32Array(buffer);
        case TYPE_FLOAT32ARRAY:
            return new Float32Array(buffer);
        case TYPE_FLOAT64ARRAY:
            return new Float64Array(buffer);
        default:
            throw new Error('Unkown type: ' + type);
    }
}

var localforageSerializer = {
    serialize: serialize,
    deserialize: deserialize,
    stringToBuffer: stringToBuffer,
    bufferToString: bufferToString
};

/*
 * Includes code from:
 *
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */

function createDbTable(t, dbInfo, callback, errorCallback) {
    t.executeSql('CREATE TABLE IF NOT EXISTS ' + dbInfo.storeName + ' ' + '(id INTEGER PRIMARY KEY, key unique, value)', [], callback, errorCallback);
}

// Open the WebSQL database (automatically creates one if one didn't
// previously exist), using any options set in the config.
function _initStorage$1(options) {
    var self = this;
    var dbInfo = {
        db: null
    };

    if (options) {
        for (var i in options) {
            dbInfo[i] = typeof options[i] !== 'string' ? options[i].toString() : options[i];
        }
    }

    var dbInfoPromise = new Promise$1(function (resolve, reject) {
        // Open the database; the openDatabase API will automatically
        // create it for us if it doesn't exist.
        try {
            dbInfo.db = openDatabase(dbInfo.name, String(dbInfo.version), dbInfo.description, dbInfo.size);
        } catch (e) {
            return reject(e);
        }

        // Create our key/value table if it doesn't exist.
        dbInfo.db.transaction(function (t) {
            createDbTable(t, dbInfo, function () {
                self._dbInfo = dbInfo;
                resolve();
            }, function (t, error) {
                reject(error);
            });
        }, reject);
    });

    dbInfo.serializer = localforageSerializer;
    return dbInfoPromise;
}

function tryExecuteSql(t, dbInfo, sqlStatement, args, callback, errorCallback) {
    t.executeSql(sqlStatement, args, callback, function (t, error) {
        if (error.code === error.SYNTAX_ERR) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name = ?", [dbInfo.storeName], function (t, results) {
                if (!results.rows.length) {
                    // if the table is missing (was deleted)
                    // re-create it table and retry
                    createDbTable(t, dbInfo, function () {
                        t.executeSql(sqlStatement, args, callback, errorCallback);
                    }, errorCallback);
                } else {
                    errorCallback(t, error);
                }
            }, errorCallback);
        } else {
            errorCallback(t, error);
        }
    }, errorCallback);
}

function getItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).value : null;

                    // Check to see if this is serialized content we need to
                    // unpack.
                    if (result) {
                        result = dbInfo.serializer.deserialize(result);
                    }

                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function iterate$1(iterator, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;

            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT * FROM ' + dbInfo.storeName, [], function (t, results) {
                    var rows = results.rows;
                    var length = rows.length;

                    for (var i = 0; i < length; i++) {
                        var item = rows.item(i);
                        var result = item.value;

                        // Check to see if this is serialized content
                        // we need to unpack.
                        if (result) {
                            result = dbInfo.serializer.deserialize(result);
                        }

                        result = iterator(result, item.key, i + 1);

                        // void(0) prevents problems with redefinition
                        // of `undefined`.
                        if (result !== void 0) {
                            resolve(result);
                            return;
                        }
                    }

                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function _setItem(key, value, callback, retriesLeft) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            // The localStorage API doesn't return undefined values in an
            // "expected" way, so undefined is always cast to null in all
            // drivers. See: https://github.com/mozilla/localForage/pull/42
            if (value === undefined) {
                value = null;
            }

            // Save the original value to pass to the callback.
            var originalValue = value;

            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    dbInfo.db.transaction(function (t) {
                        tryExecuteSql(t, dbInfo, 'INSERT OR REPLACE INTO ' + dbInfo.storeName + ' ' + '(key, value) VALUES (?, ?)', [key, value], function () {
                            resolve(originalValue);
                        }, function (t, error) {
                            reject(error);
                        });
                    }, function (sqlError) {
                        // The transaction failed; check
                        // to see if it's a quota error.
                        if (sqlError.code === sqlError.QUOTA_ERR) {
                            // We reject the callback outright for now, but
                            // it's worth trying to re-run the transaction.
                            // Even if the user accepts the prompt to use
                            // more storage on Safari, this error will
                            // be called.
                            //
                            // Try to re-run the transaction.
                            if (retriesLeft > 0) {
                                resolve(_setItem.apply(self, [key, originalValue, callback, retriesLeft - 1]));
                                return;
                            }
                            reject(sqlError);
                        }
                    });
                }
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function setItem$1(key, value, callback) {
    return _setItem.apply(this, [key, value, callback, 1]);
}

function removeItem$1(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName + ' WHERE key = ?', [key], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Deletes every item in the table.
// TODO: Find out if this resets the AUTO_INCREMENT number.
function clear$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'DELETE FROM ' + dbInfo.storeName, [], function () {
                    resolve();
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Does a simple `COUNT(key)` to get the number of items stored in
// localForage.
function length$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                // Ahhh, SQL makes this one soooooo easy.
                tryExecuteSql(t, dbInfo, 'SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
                    var result = results.rows.item(0).c;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// Return the key located at key index X; essentially gets the key from a
// `WHERE id = ?`. This is the most efficient way I can think to implement
// this rarely-used (in my experience) part of the API, but it can seem
// inconsistent, because we do `INSERT OR REPLACE INTO` on `setItem()`, so
// the ID of each key will change every time it's updated. Perhaps a stored
// procedure for the `setItem()` SQL would solve this problem?
// TODO: Don't change ID on `setItem()`.
function key$1(n, callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
                    var result = results.rows.length ? results.rows.item(0).key : null;
                    resolve(result);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$1(callback) {
    var self = this;

    var promise = new Promise$1(function (resolve, reject) {
        self.ready().then(function () {
            var dbInfo = self._dbInfo;
            dbInfo.db.transaction(function (t) {
                tryExecuteSql(t, dbInfo, 'SELECT key FROM ' + dbInfo.storeName, [], function (t, results) {
                    var keys = [];

                    for (var i = 0; i < results.rows.length; i++) {
                        keys.push(results.rows.item(i).key);
                    }

                    resolve(keys);
                }, function (t, error) {
                    reject(error);
                });
            });
        })["catch"](reject);
    });

    executeCallback(promise, callback);
    return promise;
}

// https://www.w3.org/TR/webdatabase/#databases
// > There is no way to enumerate or delete the databases available for an origin from this API.
function getAllStoreNames(db) {
    return new Promise$1(function (resolve, reject) {
        db.transaction(function (t) {
            t.executeSql('SELECT name FROM sqlite_master ' + "WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'", [], function (t, results) {
                var storeNames = [];

                for (var i = 0; i < results.rows.length; i++) {
                    storeNames.push(results.rows.item(i).name);
                }

                resolve({
                    db: db,
                    storeNames: storeNames
                });
            }, function (t, error) {
                reject(error);
            });
        }, function (sqlError) {
            reject(sqlError);
        });
    });
}

function dropInstance$1(options, callback) {
    callback = getCallback.apply(this, arguments);

    var currentConfig = this.config();
    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            var db;
            if (options.name === currentConfig.name) {
                // use the db reference of the current instance
                db = self._dbInfo.db;
            } else {
                db = openDatabase(options.name, '', '', 0);
            }

            if (!options.storeName) {
                // drop all database tables
                resolve(getAllStoreNames(db));
            } else {
                resolve({
                    db: db,
                    storeNames: [options.storeName]
                });
            }
        }).then(function (operationInfo) {
            return new Promise$1(function (resolve, reject) {
                operationInfo.db.transaction(function (t) {
                    function dropTable(storeName) {
                        return new Promise$1(function (resolve, reject) {
                            t.executeSql('DROP TABLE IF EXISTS ' + storeName, [], function () {
                                resolve();
                            }, function (t, error) {
                                reject(error);
                            });
                        });
                    }

                    var operations = [];
                    for (var i = 0, len = operationInfo.storeNames.length; i < len; i++) {
                        operations.push(dropTable(operationInfo.storeNames[i]));
                    }

                    Promise$1.all(operations).then(function () {
                        resolve();
                    })["catch"](function (e) {
                        reject(e);
                    });
                }, function (sqlError) {
                    reject(sqlError);
                });
            });
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var webSQLStorage = {
    _driver: 'webSQLStorage',
    _initStorage: _initStorage$1,
    _support: isWebSQLValid(),
    iterate: iterate$1,
    getItem: getItem$1,
    setItem: setItem$1,
    removeItem: removeItem$1,
    clear: clear$1,
    length: length$1,
    key: key$1,
    keys: keys$1,
    dropInstance: dropInstance$1
};

function isLocalStorageValid() {
    try {
        return typeof localStorage !== 'undefined' && 'setItem' in localStorage &&
        // in IE8 typeof localStorage.setItem === 'object'
        !!localStorage.setItem;
    } catch (e) {
        return false;
    }
}

function _getKeyPrefix(options, defaultConfig) {
    var keyPrefix = options.name + '/';

    if (options.storeName !== defaultConfig.storeName) {
        keyPrefix += options.storeName + '/';
    }
    return keyPrefix;
}

// Check if localStorage throws when saving an item
function checkIfLocalStorageThrows() {
    var localStorageTestKey = '_localforage_support_test';

    try {
        localStorage.setItem(localStorageTestKey, true);
        localStorage.removeItem(localStorageTestKey);

        return false;
    } catch (e) {
        return true;
    }
}

// Check if localStorage is usable and allows to save an item
// This method checks if localStorage is usable in Safari Private Browsing
// mode, or in any other case where the available quota for localStorage
// is 0 and there wasn't any saved items yet.
function _isLocalStorageUsable() {
    return !checkIfLocalStorageThrows() || localStorage.length > 0;
}

// Config the localStorage backend, using options set in the config.
function _initStorage$2(options) {
    var self = this;
    var dbInfo = {};
    if (options) {
        for (var i in options) {
            dbInfo[i] = options[i];
        }
    }

    dbInfo.keyPrefix = _getKeyPrefix(options, self._defaultConfig);

    if (!_isLocalStorageUsable()) {
        return Promise$1.reject();
    }

    self._dbInfo = dbInfo;
    dbInfo.serializer = localforageSerializer;

    return Promise$1.resolve();
}

// Remove all keys from the datastore, effectively destroying all data in
// the app's key/value store!
function clear$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var keyPrefix = self._dbInfo.keyPrefix;

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var key = localStorage.key(i);

            if (key.indexOf(keyPrefix) === 0) {
                localStorage.removeItem(key);
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Retrieve an item from the store. Unlike the original async_storage
// library in Gaia, we don't modify return values at all. If a key's value
// is `undefined`, we pass that value to the callback function.
function getItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result = localStorage.getItem(dbInfo.keyPrefix + key);

        // If a result was found, parse it from the serialized
        // string into a JS object. If result isn't truthy, the key
        // is likely undefined and we'll pass it straight to the
        // callback.
        if (result) {
            result = dbInfo.serializer.deserialize(result);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

// Iterate over all items in the store.
function iterate$2(iterator, callback) {
    var self = this;

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var keyPrefix = dbInfo.keyPrefix;
        var keyPrefixLength = keyPrefix.length;
        var length = localStorage.length;

        // We use a dedicated iterator instead of the `i` variable below
        // so other keys we fetch in localStorage aren't counted in
        // the `iterationNumber` argument passed to the `iterate()`
        // callback.
        //
        // See: github.com/mozilla/localForage/pull/435#discussion_r38061530
        var iterationNumber = 1;

        for (var i = 0; i < length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(keyPrefix) !== 0) {
                continue;
            }
            var value = localStorage.getItem(key);

            // If a result was found, parse it from the serialized
            // string into a JS object. If result isn't truthy, the
            // key is likely undefined and we'll pass it straight
            // to the iterator.
            if (value) {
                value = dbInfo.serializer.deserialize(value);
            }

            value = iterator(value, key.substring(keyPrefixLength), iterationNumber++);

            if (value !== void 0) {
                return value;
            }
        }
    });

    executeCallback(promise, callback);
    return promise;
}

// Same as localStorage's key() method, except takes a callback.
function key$2(n, callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var result;
        try {
            result = localStorage.key(n);
        } catch (error) {
            result = null;
        }

        // Remove the prefix from the key, if a key is found.
        if (result) {
            result = result.substring(dbInfo.keyPrefix.length);
        }

        return result;
    });

    executeCallback(promise, callback);
    return promise;
}

function keys$2(callback) {
    var self = this;
    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        var length = localStorage.length;
        var keys = [];

        for (var i = 0; i < length; i++) {
            var itemKey = localStorage.key(i);
            if (itemKey.indexOf(dbInfo.keyPrefix) === 0) {
                keys.push(itemKey.substring(dbInfo.keyPrefix.length));
            }
        }

        return keys;
    });

    executeCallback(promise, callback);
    return promise;
}

// Supply the number of keys in the datastore to the callback function.
function length$2(callback) {
    var self = this;
    var promise = self.keys().then(function (keys) {
        return keys.length;
    });

    executeCallback(promise, callback);
    return promise;
}

// Remove an item from the store, nice and simple.
function removeItem$2(key, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        var dbInfo = self._dbInfo;
        localStorage.removeItem(dbInfo.keyPrefix + key);
    });

    executeCallback(promise, callback);
    return promise;
}

// Set a key's value and run an optional callback once the value is set.
// Unlike Gaia's implementation, the callback function is passed the value,
// in case you want to operate on that value only after you're sure it
// saved, or something like that.
function setItem$2(key, value, callback) {
    var self = this;

    key = normalizeKey(key);

    var promise = self.ready().then(function () {
        // Convert undefined values to null.
        // https://github.com/mozilla/localForage/pull/42
        if (value === undefined) {
            value = null;
        }

        // Save the original value to pass to the callback.
        var originalValue = value;

        return new Promise$1(function (resolve, reject) {
            var dbInfo = self._dbInfo;
            dbInfo.serializer.serialize(value, function (value, error) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        localStorage.setItem(dbInfo.keyPrefix + key, value);
                        resolve(originalValue);
                    } catch (e) {
                        // localStorage capacity exceeded.
                        // TODO: Make this a specific error/event.
                        if (e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                            reject(e);
                        }
                        reject(e);
                    }
                }
            });
        });
    });

    executeCallback(promise, callback);
    return promise;
}

function dropInstance$2(options, callback) {
    callback = getCallback.apply(this, arguments);

    options = typeof options !== 'function' && options || {};
    if (!options.name) {
        var currentConfig = this.config();
        options.name = options.name || currentConfig.name;
        options.storeName = options.storeName || currentConfig.storeName;
    }

    var self = this;
    var promise;
    if (!options.name) {
        promise = Promise$1.reject('Invalid arguments');
    } else {
        promise = new Promise$1(function (resolve) {
            if (!options.storeName) {
                resolve(options.name + '/');
            } else {
                resolve(_getKeyPrefix(options, self._defaultConfig));
            }
        }).then(function (keyPrefix) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var key = localStorage.key(i);

                if (key.indexOf(keyPrefix) === 0) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    executeCallback(promise, callback);
    return promise;
}

var localStorageWrapper = {
    _driver: 'localStorageWrapper',
    _initStorage: _initStorage$2,
    _support: isLocalStorageValid(),
    iterate: iterate$2,
    getItem: getItem$2,
    setItem: setItem$2,
    removeItem: removeItem$2,
    clear: clear$2,
    length: length$2,
    key: key$2,
    keys: keys$2,
    dropInstance: dropInstance$2
};

var sameValue = function sameValue(x, y) {
    return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
};

var includes = function includes(array, searchElement) {
    var len = array.length;
    var i = 0;
    while (i < len) {
        if (sameValue(array[i], searchElement)) {
            return true;
        }
        i++;
    }

    return false;
};

var isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
};

// Drivers are stored here when `defineDriver()` is called.
// They are shared across all instances of localForage.
var DefinedDrivers = {};

var DriverSupport = {};

var DefaultDrivers = {
    INDEXEDDB: asyncStorage,
    WEBSQL: webSQLStorage,
    LOCALSTORAGE: localStorageWrapper
};

var DefaultDriverOrder = [DefaultDrivers.INDEXEDDB._driver, DefaultDrivers.WEBSQL._driver, DefaultDrivers.LOCALSTORAGE._driver];

var OptionalDriverMethods = ['dropInstance'];

var LibraryMethods = ['clear', 'getItem', 'iterate', 'key', 'keys', 'length', 'removeItem', 'setItem'].concat(OptionalDriverMethods);

var DefaultConfig = {
    description: '',
    driver: DefaultDriverOrder.slice(),
    name: 'localforage',
    // Default DB size is _JUST UNDER_ 5MB, as it's the highest size
    // we can use without a prompt.
    size: 4980736,
    storeName: 'keyvaluepairs',
    version: 1.0
};

function callWhenReady(localForageInstance, libraryMethod) {
    localForageInstance[libraryMethod] = function () {
        var _args = arguments;
        return localForageInstance.ready().then(function () {
            return localForageInstance[libraryMethod].apply(localForageInstance, _args);
        });
    };
}

function extend() {
    for (var i = 1; i < arguments.length; i++) {
        var arg = arguments[i];

        if (arg) {
            for (var _key in arg) {
                if (arg.hasOwnProperty(_key)) {
                    if (isArray(arg[_key])) {
                        arguments[0][_key] = arg[_key].slice();
                    } else {
                        arguments[0][_key] = arg[_key];
                    }
                }
            }
        }
    }

    return arguments[0];
}

var LocalForage = function () {
    function LocalForage(options) {
        _classCallCheck(this, LocalForage);

        for (var driverTypeKey in DefaultDrivers) {
            if (DefaultDrivers.hasOwnProperty(driverTypeKey)) {
                var driver = DefaultDrivers[driverTypeKey];
                var driverName = driver._driver;
                this[driverTypeKey] = driverName;

                if (!DefinedDrivers[driverName]) {
                    // we don't need to wait for the promise,
                    // since the default drivers can be defined
                    // in a blocking manner
                    this.defineDriver(driver);
                }
            }
        }

        this._defaultConfig = extend({}, DefaultConfig);
        this._config = extend({}, this._defaultConfig, options);
        this._driverSet = null;
        this._initDriver = null;
        this._ready = false;
        this._dbInfo = null;

        this._wrapLibraryMethodsWithReady();
        this.setDriver(this._config.driver)["catch"](function () {});
    }

    // Set any config values for localForage; can be called anytime before
    // the first API call (e.g. `getItem`, `setItem`).
    // We loop through options so we don't overwrite existing config
    // values.


    LocalForage.prototype.config = function config(options) {
        // If the options argument is an object, we use it to set values.
        // Otherwise, we return either a specified config value or all
        // config values.
        if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
            // If localforage is ready and fully initialized, we can't set
            // any new configuration values. Instead, we return an error.
            if (this._ready) {
                return new Error("Can't call config() after localforage " + 'has been used.');
            }

            for (var i in options) {
                if (i === 'storeName') {
                    options[i] = options[i].replace(/\W/g, '_');
                }

                if (i === 'version' && typeof options[i] !== 'number') {
                    return new Error('Database version must be a number.');
                }

                this._config[i] = options[i];
            }

            // after all config options are set and
            // the driver option is used, try setting it
            if ('driver' in options && options.driver) {
                return this.setDriver(this._config.driver);
            }

            return true;
        } else if (typeof options === 'string') {
            return this._config[options];
        } else {
            return this._config;
        }
    };

    // Used to define a custom driver, shared across all instances of
    // localForage.


    LocalForage.prototype.defineDriver = function defineDriver(driverObject, callback, errorCallback) {
        var promise = new Promise$1(function (resolve, reject) {
            try {
                var driverName = driverObject._driver;
                var complianceError = new Error('Custom driver not compliant; see ' + 'https://mozilla.github.io/localForage/#definedriver');

                // A driver name should be defined and not overlap with the
                // library-defined, default drivers.
                if (!driverObject._driver) {
                    reject(complianceError);
                    return;
                }

                var driverMethods = LibraryMethods.concat('_initStorage');
                for (var i = 0, len = driverMethods.length; i < len; i++) {
                    var driverMethodName = driverMethods[i];

                    // when the property is there,
                    // it should be a method even when optional
                    var isRequired = !includes(OptionalDriverMethods, driverMethodName);
                    if ((isRequired || driverObject[driverMethodName]) && typeof driverObject[driverMethodName] !== 'function') {
                        reject(complianceError);
                        return;
                    }
                }

                var configureMissingMethods = function configureMissingMethods() {
                    var methodNotImplementedFactory = function methodNotImplementedFactory(methodName) {
                        return function () {
                            var error = new Error('Method ' + methodName + ' is not implemented by the current driver');
                            var promise = Promise$1.reject(error);
                            executeCallback(promise, arguments[arguments.length - 1]);
                            return promise;
                        };
                    };

                    for (var _i = 0, _len = OptionalDriverMethods.length; _i < _len; _i++) {
                        var optionalDriverMethod = OptionalDriverMethods[_i];
                        if (!driverObject[optionalDriverMethod]) {
                            driverObject[optionalDriverMethod] = methodNotImplementedFactory(optionalDriverMethod);
                        }
                    }
                };

                configureMissingMethods();

                var setDriverSupport = function setDriverSupport(support) {
                    if (DefinedDrivers[driverName]) {
                        console.info('Redefining LocalForage driver: ' + driverName);
                    }
                    DefinedDrivers[driverName] = driverObject;
                    DriverSupport[driverName] = support;
                    // don't use a then, so that we can define
                    // drivers that have simple _support methods
                    // in a blocking manner
                    resolve();
                };

                if ('_support' in driverObject) {
                    if (driverObject._support && typeof driverObject._support === 'function') {
                        driverObject._support().then(setDriverSupport, reject);
                    } else {
                        setDriverSupport(!!driverObject._support);
                    }
                } else {
                    setDriverSupport(true);
                }
            } catch (e) {
                reject(e);
            }
        });

        executeTwoCallbacks(promise, callback, errorCallback);
        return promise;
    };

    LocalForage.prototype.driver = function driver() {
        return this._driver || null;
    };

    LocalForage.prototype.getDriver = function getDriver(driverName, callback, errorCallback) {
        var getDriverPromise = DefinedDrivers[driverName] ? Promise$1.resolve(DefinedDrivers[driverName]) : Promise$1.reject(new Error('Driver not found.'));

        executeTwoCallbacks(getDriverPromise, callback, errorCallback);
        return getDriverPromise;
    };

    LocalForage.prototype.getSerializer = function getSerializer(callback) {
        var serializerPromise = Promise$1.resolve(localforageSerializer);
        executeTwoCallbacks(serializerPromise, callback);
        return serializerPromise;
    };

    LocalForage.prototype.ready = function ready(callback) {
        var self = this;

        var promise = self._driverSet.then(function () {
            if (self._ready === null) {
                self._ready = self._initDriver();
            }

            return self._ready;
        });

        executeTwoCallbacks(promise, callback, callback);
        return promise;
    };

    LocalForage.prototype.setDriver = function setDriver(drivers, callback, errorCallback) {
        var self = this;

        if (!isArray(drivers)) {
            drivers = [drivers];
        }

        var supportedDrivers = this._getSupportedDrivers(drivers);

        function setDriverToConfig() {
            self._config.driver = self.driver();
        }

        function extendSelfWithDriver(driver) {
            self._extend(driver);
            setDriverToConfig();

            self._ready = self._initStorage(self._config);
            return self._ready;
        }

        function initDriver(supportedDrivers) {
            return function () {
                var currentDriverIndex = 0;

                function driverPromiseLoop() {
                    while (currentDriverIndex < supportedDrivers.length) {
                        var driverName = supportedDrivers[currentDriverIndex];
                        currentDriverIndex++;

                        self._dbInfo = null;
                        self._ready = null;

                        return self.getDriver(driverName).then(extendSelfWithDriver)["catch"](driverPromiseLoop);
                    }

                    setDriverToConfig();
                    var error = new Error('No available storage method found.');
                    self._driverSet = Promise$1.reject(error);
                    return self._driverSet;
                }

                return driverPromiseLoop();
            };
        }

        // There might be a driver initialization in progress
        // so wait for it to finish in order to avoid a possible
        // race condition to set _dbInfo
        var oldDriverSetDone = this._driverSet !== null ? this._driverSet["catch"](function () {
            return Promise$1.resolve();
        }) : Promise$1.resolve();

        this._driverSet = oldDriverSetDone.then(function () {
            var driverName = supportedDrivers[0];
            self._dbInfo = null;
            self._ready = null;

            return self.getDriver(driverName).then(function (driver) {
                self._driver = driver._driver;
                setDriverToConfig();
                self._wrapLibraryMethodsWithReady();
                self._initDriver = initDriver(supportedDrivers);
            });
        })["catch"](function () {
            setDriverToConfig();
            var error = new Error('No available storage method found.');
            self._driverSet = Promise$1.reject(error);
            return self._driverSet;
        });

        executeTwoCallbacks(this._driverSet, callback, errorCallback);
        return this._driverSet;
    };

    LocalForage.prototype.supports = function supports(driverName) {
        return !!DriverSupport[driverName];
    };

    LocalForage.prototype._extend = function _extend(libraryMethodsAndProperties) {
        extend(this, libraryMethodsAndProperties);
    };

    LocalForage.prototype._getSupportedDrivers = function _getSupportedDrivers(drivers) {
        var supportedDrivers = [];
        for (var i = 0, len = drivers.length; i < len; i++) {
            var driverName = drivers[i];
            if (this.supports(driverName)) {
                supportedDrivers.push(driverName);
            }
        }
        return supportedDrivers;
    };

    LocalForage.prototype._wrapLibraryMethodsWithReady = function _wrapLibraryMethodsWithReady() {
        // Add a stub for each driver API method that delays the call to the
        // corresponding driver method until localForage is ready. These stubs
        // will be replaced by the driver methods as soon as the driver is
        // loaded, so there is no performance impact.
        for (var i = 0, len = LibraryMethods.length; i < len; i++) {
            callWhenReady(this, LibraryMethods[i]);
        }
    };

    LocalForage.prototype.createInstance = function createInstance(options) {
        return new LocalForage(options);
    };

    return LocalForage;
}();

// The actual localForage object that we expose as a module or via a
// global. It's extended by pulling in one of our other libraries.


var localforage_js = new LocalForage();

module.exports = localforage_js;

},{"3":3}]},{},[4])(4)
});


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ion-padding\">\n    The world is your oyster.\n    <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be your guide.</p>\n    <ion-button (click)=\"testPlugin()\" color='primary' size=\"large\">Test Plugin</ion-button>\n    <ion-button (click)=\"testPluginWithWrapper()\" color='primary' size=\"large\">Test Plugin With Wrapper</ion-button>\n    <div class=\"echo\"></div>\n    <p class=\"populate hidden\">\n      Storing data successful\n    </p>\n    <p class=\"iskey hidden\">\n      Iskey successful\n    </p>\n    <p class=\"keys hidden\">\n      Get keys successful\n    </p>\n    <p class=\"values hidden\">\n      Get values successful\n    </p>\n    <p class=\"keysvalues hidden\">\n      Get keys/values successful\n    </p>\n    <p class=\"remove hidden\">\n      Remove key successful\n    </p>\n    <p class=\"clear hidden\">\n      Clear keys successful\n    </p>\n    <p class=\"success1 display\">\n      The test 1 was successful\n    </p>\n    <p class=\"failure1 display\">\n      The test 1 failed\n    </p>\n    <p class=\"success2 display\">\n      The test 2 was successful\n    </p>\n    <p class=\"failure2 display\">\n      The test 2 failed\n    </p>\n    <p class=\"success3 display\">\n      The test 3 was successful\n    </p>\n    <p class=\"failure3 display\">\n      The test 3 failed\n    </p>\n    <p class=\"success4 display\">\n      The test 4 was successful\n    </p>\n    <p class=\"failure4 display\">\n      The test 4 failed\n    </p>\n    <p class=\"success5 display\">\n      The test 5 was successful\n    </p>\n    <p class=\"failure5 display\">\n      The test 5 failed\n    </p>\n    <p class=\"success6 display\">\n      The test 6 was successful\n    </p>\n    <p class=\"failure6 display\">\n      The test 6 failed\n    </p>\n    <p class=\"success7 display\">\n      The test 7 was successful\n    </p>\n    <p class=\"failure7 display\">\n      The test 7 failed\n    </p>\n    <p class=\"success8 display\">\n      The test 8 was successful\n    </p>\n    <p class=\"failure8 display\">\n      The test 8 failed\n    </p>\n    <p class=\"success9 display\">\n      The test 9 was successful\n    </p>\n    <p class=\"failure9 display\">\n      The test 9 failed\n    </p>\n    <p class=\"success display\">\n      The set of tests was successful\n    </p>\n    <p class=\"failure display\">\n      The set of tests failed\n    </p>\n    <p class=\"wrapper-success display\">\n      The test with wrapper was successful\n    </p>\n    <p class=\"wrapper-failure display\">\n      The test with wrapper failed\n    </p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hidden {\n  visibility: hidden;\n}\n\n.display {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVhdWplYW5waWVycmUvRG9jdW1lbnRzL1Byb2plY3Rzd2l0aENhcGFjaXRvci9wdWJsaXNoUHJvamVjdHMvaW9uaWM0LWNhcGFjaXRvci1hcHBzL2lvbmljLWNhcGFjaXRvci1kYXRhLXN0b3JhZ2Utc3FsaXRlL3NyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmRpc3BsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiIsIi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5kaXNwbGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/util */ "./src/utils/util.ts");
/* harmony import */ var _utils_storageAPIWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/storageAPIWrapper */ "./src/utils/storageAPIWrapper.ts");




var HomePage = /** @class */ (function () {
    function HomePage() {
        this.storage = {};
        this.platform = "web";
    }
    HomePage.prototype.testPluginWithWrapper = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret1, ret2, ret3, ret4, ret5, ret6, result, value, keys, statusTable;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.storage = new _utils_storageAPIWrapper__WEBPACK_IMPORTED_MODULE_3__["StorageAPIWrapper"]();
                        ret1 = false;
                        ret2 = false;
                        ret3 = false;
                        ret4 = false;
                        ret5 = false;
                        ret6 = false;
                        return [4 /*yield*/, this.storage.openStore({})];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 16];
                        this.platform = this.storage.platform;
                        return [4 /*yield*/, this.storage.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.setItem("key-test", "This is a test")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getItem("key-test")];
                    case 4:
                        value = _a.sent();
                        console.log("Get Data : " + value);
                        if (value === "This is a test")
                            ret1 = true;
                        return [4 /*yield*/, this.storage.getAllKeys()];
                    case 5:
                        keys = _a.sent();
                        console.log("Get All Keys : " + keys);
                        if (keys[0] === "key-test")
                            ret2 = true;
                        return [4 /*yield*/, this.storage.removeItem("key-test")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getAllKeys()];
                    case 7:
                        keys = _a.sent();
                        console.log("Get All Keys : " + keys);
                        if (keys.length === 0)
                            ret3 = true;
                        return [4 /*yield*/, this.storage.openStore({ database: "testStore", table: "table1" })];
                    case 8:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.storage.clear()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.storage.setItem("key1-test", "This is a new store")];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getItem("key1-test")];
                    case 11:
                        value = _a.sent();
                        console.log("Get Data : " + value);
                        if (value === "This is a new store")
                            ret4 = true;
                        return [4 /*yield*/, this.storage.setTable({ table: "table2" })];
                    case 12:
                        statusTable = _a.sent();
                        console.log('statusTable[0] ', statusTable[0]);
                        console.log('statusTable[1] ', statusTable[1]);
                        if (statusTable[0])
                            ret5 = true;
                        return [4 /*yield*/, this.storage.clear()];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.storage.setItem("key2-test", "This is a second table")];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.storage.getItem("key2-test")];
                    case 15:
                        value = _a.sent();
                        console.log("Get Data : " + value);
                        if (value === "This is a second table")
                            ret6 = true;
                        _a.label = 16;
                    case 16:
                        if (ret1 && ret2 && ret3 && ret4 && ret5 && ret6) {
                            console.log('testPlugin2 is successful');
                            document.querySelector('.wrapper-success').classList.remove('display');
                        }
                        else {
                            document.querySelector('.wrapper-failure').classList.remove('display');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testPlugin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var store, result, divEchoEl, retTest1, retTest2, retTest3, retEncrypted, retTest4, retTest5, retTest6, retTest7, retTest8, retTest9;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_utils_util__WEBPACK_IMPORTED_MODULE_2__["setStorage"])()];
                    case 1:
                        store = _a.sent();
                        this.storage = store.plugin;
                        this.platform = store.platform;
                        return [4 /*yield*/, this.storage.echo({ value: "Hello from Jeep" })];
                    case 2:
                        result = _a.sent();
                        console.log('in testPlugin value ', JSON.stringify(result));
                        divEchoEl = document.querySelector('.echo');
                        divEchoEl.innerHTML = result.value;
                        return [4 /*yield*/, this.testFirstStore()];
                    case 3:
                        retTest1 = _a.sent();
                        return [4 /*yield*/, this.testSecondStore()];
                    case 4:
                        retTest2 = _a.sent();
                        return [4 /*yield*/, this.testThirdStore()];
                    case 5:
                        retTest3 = _a.sent();
                        retEncrypted = true;
                        if (!(this.platform != "web")) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.testEncryptSecondStore()];
                    case 6:
                        retTest4 = _a.sent();
                        return [4 /*yield*/, this.testSecondStoreReOpenWithWrongSecret()];
                    case 7:
                        retTest5 = _a.sent();
                        return [4 /*yield*/, this.testSecondStoreReOpenWithGoodSecret()];
                    case 8:
                        retTest6 = _a.sent();
                        return [4 /*yield*/, this.testSecondStoreChangeSecret()];
                    case 9:
                        retTest7 = _a.sent();
                        return [4 /*yield*/, this.testSecondStoreReOpenWithNewSecret()];
                    case 10:
                        retTest8 = _a.sent();
                        return [4 /*yield*/, this.testNewEncryptedFourthStore()];
                    case 11:
                        retTest9 = _a.sent();
                        if (!retTest4 || !retTest5
                            || !retTest6 || !retTest7 || !retTest8 || !retTest9)
                            retEncrypted = false;
                        _a.label = 12;
                    case 12:
                        if (retTest1 && retTest2 && retTest3 && retEncrypted) {
                            document.querySelector('.success').classList.remove('display');
                            return [2 /*return*/, true];
                        }
                        else {
                            document.querySelector('.failure').classList.remove('display');
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testFirstStore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var retTest1, retpopulate, retiskey, retkeys, retvalues, retkeysvalues, retremove, retclear, result, ret1, data, ret2, data1, ret3, res, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        retTest1 = false;
                        retpopulate = false;
                        retiskey = false;
                        retkeys = false;
                        retvalues = false;
                        retkeysvalues = false;
                        retremove = false;
                        retclear = false;
                        console.log('in testFirstStore ***** ');
                        return [4 /*yield*/, this.storage.openStore({})];
                    case 1:
                        result = _a.sent();
                        console.log('storage retCreate ', result.result);
                        if (!result.result) return [3 /*break*/, 20];
                        return [4 /*yield*/, this.storage.clear()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.storage.set({ key: "session", value: "Session Opened" })];
                    case 3:
                        // store data in the first store
                        result = _a.sent();
                        console.log("Save Data : " + result.result);
                        return [4 /*yield*/, this.storage.get({ key: "session" })];
                    case 4:
                        result = _a.sent();
                        console.log('result ', result);
                        console.log("Get Data : " + result.value);
                        ret1 = false;
                        if (result.value === "Session Opened")
                            ret1 = true;
                        data = { 'a': 20, 'b': 'Hello World', 'c': { 'c1': 40, 'c2': 'cool' } };
                        return [4 /*yield*/, this.storage.set({ key: 'testJson', value: JSON.stringify(data) })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "testJson" })];
                    case 6:
                        result = _a.sent();
                        console.log("Get Data : " + result.value);
                        ret2 = false;
                        if (result.value === JSON.stringify(data))
                            ret2 = true;
                        data1 = 243.567;
                        return [4 /*yield*/, this.storage.set({ key: 'testNumber', value: data1.toString() })];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "testNumber" })];
                    case 8:
                        result = _a.sent();
                        console.log("Get Data : " + result.value);
                        ret3 = false;
                        if (result.value === data1.toString())
                            ret3 = true;
                        if (ret1 && ret2 && ret3)
                            retpopulate = true;
                        if (retpopulate)
                            document.querySelector('.populate').classList.remove('hidden');
                        console.log(" before isKey testNumber ");
                        return [4 /*yield*/, this.storage.iskey({ key: "testNumber" })];
                    case 9:
                        result = _a.sent();
                        console.log("isKey testNumber " + result.result);
                        ret1 = result.result;
                        return [4 /*yield*/, this.storage.iskey({ key: "foo" })];
                    case 10:
                        result = _a.sent();
                        console.log("isKey foo " + result.result);
                        ret2 = result.result;
                        if (ret1 && !ret2)
                            retiskey = true;
                        if (retiskey)
                            document.querySelector('.iskey').classList.remove('hidden');
                        return [4 /*yield*/, this.storage.keys()];
                    case 11:
                        result = _a.sent();
                        console.log("Get keys : " + result.keys);
                        console.log("Keys length " + result.keys.length);
                        if (result.keys.length === 3 && result.keys[0] === "session"
                            && result.keys[1] === "testJson" && result.keys[2] === "testNumber") {
                            retkeys = true;
                            document.querySelector('.keys').classList.remove('hidden');
                        }
                        return [4 /*yield*/, this.storage.values()];
                    case 12:
                        result = _a.sent();
                        console.log("Get values : " + result.values);
                        console.log("Values length " + result.values.length);
                        if (result.values.length === 3 && result.values[0] === "Session Opened"
                            && result.values[1] === JSON.stringify(data) && result.values[2] === data1.toString()) {
                            retvalues = true;
                            document.querySelector('.values').classList.remove('hidden');
                        }
                        return [4 /*yield*/, this.storage.keysvalues()];
                    case 13:
                        result = _a.sent();
                        result.keysvalues.forEach(function (element) {
                            console.log(element);
                        });
                        console.log("KeysValues length " + result.keysvalues.length);
                        if (result.keysvalues.length === 3 &&
                            result.keysvalues[0].key === "session" && result.keysvalues[0].value === "Session Opened" &&
                            result.keysvalues[1].key === "testJson" && result.keysvalues[1].value === JSON.stringify(data) &&
                            result.keysvalues[2].key === "testNumber" && result.keysvalues[2].value === data1.toString()) {
                            retkeysvalues = true;
                            document.querySelector('.keysvalues').classList.remove('hidden');
                        }
                        return [4 /*yield*/, this.storage.remove({ key: "testJson" })];
                    case 14:
                        result = _a.sent();
                        if (!result.result) return [3 /*break*/, 16];
                        return [4 /*yield*/, this.storage.keysvalues()];
                    case 15:
                        res = _a.sent();
                        if (res.keysvalues.length === 2 &&
                            res.keysvalues[0].key === "session" && res.keysvalues[0].value === "Session Opened" &&
                            res.keysvalues[1].key === "testNumber" && res.keysvalues[1].value === data1.toString()) {
                            retremove = true;
                            document.querySelector('.remove').classList.remove('hidden');
                        }
                        _a.label = 16;
                    case 16: return [4 /*yield*/, this.storage.clear()];
                    case 17:
                        result = _a.sent();
                        if (!result.result) return [3 /*break*/, 19];
                        return [4 /*yield*/, this.storage.keysvalues()];
                    case 18:
                        res = _a.sent();
                        console.log("after clear res.keysvalues.length " + res.keysvalues.length);
                        if (res.keysvalues.length === 0) {
                            retclear = true;
                            document.querySelector('.clear').classList.remove('hidden');
                            if (retpopulate && retiskey && retkeys && retvalues && retkeysvalues && retremove && retclear) {
                                retTest1 = true;
                                document.querySelector('.success1').classList.remove('display');
                            }
                            else {
                                document.querySelector('.failure1').classList.remove('display');
                            }
                        }
                        return [3 /*break*/, 20];
                    case 19:
                        document.querySelector('.failure1').classList.remove('display');
                        _a.label = 20;
                    case 20:
                        console.log('in testFirstStore end ***** ');
                        return [2 /*return*/, retTest1];
                }
            });
        });
    };
    HomePage.prototype.testSecondStore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, data, res;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // open a second store
                        console.log('in testSecondStore ***** ');
                        return [4 /*yield*/, this.storage.openStore({ database: "myStore", table: "saveData" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.clear()];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.set({ key: "app", value: "App Opened" })];
                    case 3:
                        // store data in the second store
                        result = _a.sent();
                        console.log("Save Data : " + result.result);
                        data = { 'age': 40, 'name': 'jeep', 'email': 'jeep@example.com' };
                        return [4 /*yield*/, this.storage.set({ key: 'user', value: JSON.stringify(data) })];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "user" })];
                    case 5:
                        result = _a.sent();
                        console.log("Get Data in Second Store: " + result.value);
                        if (!(result.value === JSON.stringify(data))) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.storage.get({ key: "app" })];
                    case 6:
                        res = _a.sent();
                        if (res.value === "App Opened") {
                            document.querySelector('.success2').classList.remove('display');
                            console.log('in testSecondStore end true ***** ');
                            return [2 /*return*/, true];
                        }
                        else {
                            document.querySelector('.failure2').classList.remove('display');
                            console.log('in testSecondStore end false ***** ');
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        document.querySelector('.failure2').classList.remove('display');
                        console.log('in testSecondStore end false ***** ');
                        return [2 /*return*/, false];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testThirdStore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, retKey1, retKey2, retKey3, result, res, data, data_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = false;
                        retKey1 = false;
                        retKey2 = false;
                        retKey3 = false;
                        console.log('in testThirdStore ***** ');
                        return [4 /*yield*/, this.storage.setTable({ table: "otherData" })];
                    case 1:
                        // open a third store
                        result = _a.sent();
                        console.log('storage2 retCreate ', result.result.toString());
                        return [4 /*yield*/, this.storage.clear()];
                    case 2:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.set({ key: "key1", value: "Hello World!" })];
                    case 3:
                        // store data in the third store
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "key1" })];
                    case 4:
                        res = _a.sent();
                        console.log("Get Data in Third Store key1: " + res.value);
                        if (res.value === "Hello World!")
                            retKey1 = true;
                        data = { 'a': 60, 'pi': '3.141516', 'b': 'cool' };
                        return [4 /*yield*/, this.storage.set({ key: 'key2', value: JSON.stringify(data) })];
                    case 5:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "key2" })];
                    case 6:
                        res = _a.sent();
                        console.log("Get Data in Third Store key2: " + res.value);
                        if (res.value === JSON.stringify(data))
                            retKey2 = true;
                        return [4 /*yield*/, this.storage.setTable({ table: "saveData" })];
                    case 7:
                        // store data in the second store
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.set({ key: "message", value: "Welcome from Jeep" })];
                    case 8:
                        result = _a.sent();
                        console.log("Save Data : " + result.result);
                        return [4 /*yield*/, this.storage.get({ key: "message" })];
                    case 9:
                        res = _a.sent();
                        console.log("Get Data in Second Store message: " + res.value);
                        if (!(res.value === "Welcome from Jeep")) return [3 /*break*/, 12];
                        data_1 = { 'age': 50, 'name': 'jeep', 'email': 'jeep@example.com' };
                        return [4 /*yield*/, this.storage.set({ key: 'user', value: JSON.stringify(data_1) })];
                    case 10:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "user" })];
                    case 11:
                        res = _a.sent();
                        console.log("Get Data in Second Store user: " + res.value);
                        if (res.value === JSON.stringify(data_1)) {
                            retKey3 = true;
                        }
                        _a.label = 12;
                    case 12:
                        if (retKey1 && retKey2 && retKey3) {
                            document.querySelector('.success3').classList.remove('display');
                            console.log('in testThirdStore end true ***** ');
                            return [2 /*return*/, true];
                        }
                        else {
                            document.querySelector('.failure3').classList.remove('display');
                            console.log('in testThirdStore end false ***** ');
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.testEncryptSecondStore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, ret1, ret2, ret3, retKey1, retKey2, resultOpen, res, data, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("*** start testEncryptSecondStore ***");
                        ret = false;
                        ret1 = false;
                        ret2 = false;
                        ret3 = false;
                        retKey1 = false;
                        retKey2 = false;
                        return [4 /*yield*/, this.storage.openStore({ database: "myStore", table: "saveData", encrypted: true, mode: "encryption" })];
                    case 1:
                        resultOpen = _a.sent();
                        if (!resultOpen.result) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.storage.get({ key: "app" })];
                    case 2:
                        res = _a.sent();
                        if (res.value === "App Opened")
                            ret1 = true;
                        data = { 'age': 50, 'name': 'jeep', 'email': 'jeep@example.com' };
                        return [4 /*yield*/, this.storage.get({ key: "user" })];
                    case 3:
                        res = _a.sent();
                        if (res.value === JSON.stringify(data))
                            ret2 = true;
                        return [4 /*yield*/, this.storage.get({ key: "message" })];
                    case 4:
                        res = _a.sent();
                        if (res.value === "Welcome from Jeep")
                            ret3 = true;
                        return [4 /*yield*/, this.storage.setTable({ table: "otherData" })];
                    case 5:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "key1" })];
                    case 6:
                        res = _a.sent();
                        console.log("Get Data in Third Store key1: " + res.value);
                        if (res.value === "Hello World!")
                            retKey1 = true;
                        data = { 'a': 60, 'pi': '3.141516', 'b': 'cool' };
                        return [4 /*yield*/, this.storage.get({ key: "key2" })];
                    case 7:
                        res = _a.sent();
                        console.log("Get Data in Third Store key2: " + res.value);
                        if (res.value === JSON.stringify(data))
                            retKey2 = true;
                        if (ret1 && ret2 && ret3 && retKey1 && retKey2) {
                            ret = true;
                        }
                        _a.label = 8;
                    case 8:
                        if (ret) {
                            document.querySelector('.success4').classList.remove('display');
                            console.log("*** end testEncryptSecondStore true *** ");
                        }
                        else {
                            document.querySelector('.failure4').classList.remove('display');
                            console.log("*** end testEncryptSecondStore false *** ");
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    HomePage.prototype.testSecondStoreReOpenWithWrongSecret = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, resultOpen;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("*** start testSecondStoreReOpenWithWrongSecret ***");
                        ret = false;
                        return [4 /*yield*/, this.storage.openStore({ database: "myStore", table: "saveData", encrypted: true, mode: "wrongsecret" })];
                    case 1:
                        resultOpen = _a.sent();
                        if (resultOpen.result) {
                            console.log("in testSecondStoreReOpenWithWrongSecret true");
                        }
                        else {
                            console.log("in testSecondStoreReOpenWithWrongSecret false");
                        }
                        if (!resultOpen.result) {
                            ret = true;
                        }
                        if (ret) {
                            document.querySelector('.success5').classList.remove('display');
                            console.log("*** end testSecondStoreReOpenWithWrongSecret true *** ");
                        }
                        else {
                            console.log("*** end testSecondStoreReOpenWithWrongSecret false *** ");
                            document.querySelector('.failure5').classList.remove('display');
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    HomePage.prototype.testSecondStoreReOpenWithGoodSecret = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, ret1, ret2, ret3, resultOpen, res, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("*** start testSecondStoreReOpenWithGoodSecret ***");
                        ret = false;
                        ret1 = false;
                        ret2 = false;
                        ret3 = false;
                        return [4 /*yield*/, this.storage.openStore({ database: "myStore", table: "saveData", encrypted: true, mode: "secret" })];
                    case 1:
                        resultOpen = _a.sent();
                        if (!resultOpen.result) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.get({ key: "app" })];
                    case 2:
                        res = _a.sent();
                        if (res.value === "App Opened")
                            ret1 = true;
                        data = { 'age': 50, 'name': 'jeep', 'email': 'jeep@example.com' };
                        return [4 /*yield*/, this.storage.get({ key: "user" })];
                    case 3:
                        res = _a.sent();
                        if (res.value === JSON.stringify(data))
                            ret2 = true;
                        return [4 /*yield*/, this.storage.get({ key: "message" })];
                    case 4:
                        res = _a.sent();
                        if (res.value === "Welcome from Jeep")
                            ret3 = true;
                        if (ret1 && ret2 && ret3) {
                            ret = true;
                        }
                        _a.label = 5;
                    case 5:
                        if (ret) {
                            document.querySelector('.success6').classList.remove('display');
                        }
                        else {
                            document.querySelector('.failure6').classList.remove('display');
                        }
                        console.log("*** end testSecondStoreReOpenWithGoodSecret *** ", ret);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    HomePage.prototype.testSecondStoreChangeSecret = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, ret1, ret2, ret3, resultOpen, res, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("*** start testSecondStoreChangeSecret ***");
                        ret = false;
                        ret1 = false;
                        ret2 = false;
                        ret3 = false;
                        return [4 /*yield*/, this.storage.openStore({ database: "myStore", table: "saveData", encrypted: true,
                                mode: "newsecret" })];
                    case 1:
                        resultOpen = _a.sent();
                        if (!resultOpen.result) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.get({ key: "app" })];
                    case 2:
                        res = _a.sent();
                        if (res.value === "App Opened")
                            ret1 = true;
                        data = { 'age': 50, 'name': 'jeep', 'email': 'jeep@example.com' };
                        return [4 /*yield*/, this.storage.get({ key: "user" })];
                    case 3:
                        res = _a.sent();
                        if (res.value === JSON.stringify(data))
                            ret2 = true;
                        return [4 /*yield*/, this.storage.get({ key: "message" })];
                    case 4:
                        res = _a.sent();
                        if (res.value === "Welcome from Jeep")
                            ret3 = true;
                        if (ret1 && ret2 && ret3) {
                            ret = true;
                        }
                        _a.label = 5;
                    case 5:
                        if (ret) {
                            document.querySelector('.success7').classList.remove('display');
                        }
                        else {
                            document.querySelector('.failure7').classList.remove('display');
                        }
                        console.log("*** end testSecondStoreChangeSecret *** ", ret);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    HomePage.prototype.testSecondStoreReOpenWithNewSecret = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, ret1, ret2, ret3, resultOpen, res, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("*** start testSecondStoreReOpenWithNewSecret ***");
                        ret = false;
                        ret1 = false;
                        ret2 = false;
                        ret3 = false;
                        return [4 /*yield*/, this.storage.openStore({ database: "myStore", table: "saveData", encrypted: true,
                                mode: "secret" })];
                    case 1:
                        resultOpen = _a.sent();
                        if (!resultOpen.result) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.storage.get({ key: "app" })];
                    case 2:
                        res = _a.sent();
                        if (res.value === "App Opened")
                            ret1 = true;
                        data = { 'age': 50, 'name': 'jeep', 'email': 'jeep@example.com' };
                        return [4 /*yield*/, this.storage.get({ key: "user" })];
                    case 3:
                        res = _a.sent();
                        if (res.value === JSON.stringify(data))
                            ret2 = true;
                        return [4 /*yield*/, this.storage.get({ key: "message" })];
                    case 4:
                        res = _a.sent();
                        if (res.value === "Welcome from Jeep")
                            ret3 = true;
                        if (ret1 && ret2 && ret3) {
                            ret = true;
                        }
                        _a.label = 5;
                    case 5:
                        if (ret) {
                            document.querySelector('.success8').classList.remove('display');
                        }
                        else {
                            document.querySelector('.failure8').classList.remove('display');
                        }
                        console.log("*** end testSecondStoreReOpenWithNewSecret *** ", ret);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    HomePage.prototype.testNewEncryptedFourthStore = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ret, result, retKey1, retKey2, resultOpen, res, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("*** start testNewEncryptedFourthStore *** ");
                        ret = false;
                        result = false;
                        retKey1 = false;
                        retKey2 = false;
                        return [4 /*yield*/, this.storage.openStore({ database: "fourthStore", table: "test1_table", encrypted: true,
                                mode: "secret" })];
                    case 1:
                        resultOpen = _a.sent();
                        if (!resultOpen.result) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.storage.set({ key: "my_key1", value: "Hello World from Jeep!" })];
                    case 2:
                        // store data in the fourth store
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "my_key1" })];
                    case 3:
                        res = _a.sent();
                        console.log("Get Data in Fourth Store key1: " + res.value);
                        if (res.value === "Hello World from Jeep!")
                            retKey1 = true;
                        data = { 'radius': 100, 'x': 10, 'y': 50, 'color': 'red', };
                        return [4 /*yield*/, this.storage.set({ key: 'my_key2', value: JSON.stringify(data) })];
                    case 4:
                        result = _a.sent();
                        return [4 /*yield*/, this.storage.get({ key: "my_key2" })];
                    case 5:
                        res = _a.sent();
                        console.log("Get Data in Fourth Store key2: " + res.value);
                        if (res.value === JSON.stringify(data))
                            retKey2 = true;
                        if (retKey1 && retKey2)
                            ret = true;
                        _a.label = 6;
                    case 6:
                        if (ret) {
                            document.querySelector('.success9').classList.remove('display');
                        }
                        else {
                            document.querySelector('.failure9').classList.remove('display');
                        }
                        console.log("*** end testNewEncryptedFourthStore *** ", ret);
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/utils/storageAPIWrapper.ts":
/*!****************************************!*\
  !*** ./src/utils/storageAPIWrapper.ts ***!
  \****************************************/
/*! exports provided: StorageAPIWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageAPIWrapper", function() { return StorageAPIWrapper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/util */ "./src/utils/util.ts");


var StorageAPIWrapper = /** @class */ (function () {
    function StorageAPIWrapper() {
        this.storage = {};
        this.platform = "web";
    }
    StorageAPIWrapper.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var store;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(_utils_util__WEBPACK_IMPORTED_MODULE_1__["setStorage"])()];
                    case 1:
                        store = _a.sent();
                        console.log('in StorageAPIWrapper store ', store);
                        this.storage = store.plugin;
                        this.platform = store.platform;
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.openStore = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.storage.openStore(options)];
                    case 2:
                        result = (_a.sent()).result;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.setTable = function (table) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, result, message;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.storage.setTable(table)];
                    case 1:
                        _a = _b.sent(), result = _a.result, message = _a.message;
                        return [2 /*return*/, Promise.resolve([result, message])];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.setItem = function (key, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.set({ key: key, value: value })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.getItem = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var value;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get({ key: key })];
                    case 1:
                        value = (_a.sent()).value;
                        return [2 /*return*/, value];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.getAllKeys = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var keys;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.keys()];
                    case 1:
                        keys = (_a.sent()).keys;
                        return [2 /*return*/, keys];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.removeItem = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.remove({ key: key })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageAPIWrapper.prototype.clear = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.clear()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return StorageAPIWrapper;
}());



/***/ }),

/***/ "./src/utils/util.ts":
/*!***************************!*\
  !*** ./src/utils/util.ts ***!
  \***************************/
/*! exports provided: setStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var capacitor_data_storage_sqlite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! capacitor-data-storage-sqlite */ "./node_modules/capacitor-data-storage-sqlite/dist/esm/index.js");
var _this = undefined;



var CapacitorDataStorageSqlite = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].CapacitorDataStorageSqlite, Device = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Device;
var setStorage = function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
    var info;
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Device.getInfo()];
            case 1:
                info = _a.sent();
                console.log('platform ', info.platform);
                if (info.platform === "ios" || info.platform === "android") {
                    return [2 /*return*/, { plugin: CapacitorDataStorageSqlite, platform: info.platform }];
                }
                else {
                    return [2 /*return*/, { plugin: capacitor_data_storage_sqlite__WEBPACK_IMPORTED_MODULE_2__["CapacitorDataStorageSqlite"], platform: "web" }];
                }
                return [2 /*return*/];
        }
    });
}); };


/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map