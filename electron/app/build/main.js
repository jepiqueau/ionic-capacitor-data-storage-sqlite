webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__capacitor_core__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    HomePage.prototype.testPlugin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var CapacitorDataStorageSqlite, retpopulate, retiskey, retkeys, retvalues, retkeysvalues, retremove, retclear, result, ret1, data, ret2, data1, ret3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        CapacitorDataStorageSqlite = __WEBPACK_IMPORTED_MODULE_2__capacitor_core__["a" /* Plugins */].CapacitorDataStorageSqlite;
                        retpopulate = false;
                        retiskey = false;
                        retkeys = false;
                        retvalues = false;
                        retkeysvalues = false;
                        retremove = false;
                        retclear = false;
                        return [4 /*yield*/, CapacitorDataStorageSqlite.set({ key: "session", value: "Session Opened" })];
                    case 1:
                        result = _a.sent();
                        console.log("Save Data : " + result.result);
                        return [4 /*yield*/, CapacitorDataStorageSqlite.get({ key: "session" })];
                    case 2:
                        result = _a.sent();
                        console.log('result ', result);
                        console.log("Get Data : " + result.value);
                        ret1 = false;
                        if (result.value === "Session Opened")
                            ret1 = true;
                        data = { 'a': 20, 'b': 'Hello World', 'c': { 'c1': 40, 'c2': 'cool' } };
                        return [4 /*yield*/, CapacitorDataStorageSqlite.set({ key: 'testJson', value: JSON.stringify(data) })];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, CapacitorDataStorageSqlite.get({ key: "testJson" })];
                    case 4:
                        result = _a.sent();
                        console.log("Get Data : " + result.value);
                        ret2 = false;
                        if (result.value === JSON.stringify(data))
                            ret2 = true;
                        data1 = 243.567;
                        return [4 /*yield*/, CapacitorDataStorageSqlite.set({ key: 'testNumber', value: data1.toString() })];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, CapacitorDataStorageSqlite.get({ key: "testNumber" })];
                    case 6:
                        result = _a.sent();
                        console.log("Get Data : " + result.value);
                        ret3 = false;
                        if (result.value === data1.toString())
                            ret3 = true;
                        if (ret1 && ret2 && ret3)
                            retpopulate = true;
                        if (retpopulate)
                            document.querySelector('.populate').classList.remove('hidden');
                        return [4 /*yield*/, CapacitorDataStorageSqlite.iskey({ key: "testNumber" })];
                    case 7:
                        result = _a.sent();
                        console.log("isKey testNumber " + result.result);
                        ret1 = result.result;
                        return [4 /*yield*/, CapacitorDataStorageSqlite.iskey({ key: "foo" })];
                    case 8:
                        result = _a.sent();
                        console.log("isKey foo " + result.result);
                        ret2 = result.result;
                        if (ret1 && !ret2)
                            retiskey = true;
                        if (retiskey)
                            document.querySelector('.iskey').classList.remove('hidden');
                        return [4 /*yield*/, CapacitorDataStorageSqlite.keys()];
                    case 9:
                        result = _a.sent();
                        console.log("Get keys : " + result.keys);
                        console.log("Keys length " + result.keys.length);
                        if (result.keys.length === 3 && result.keys[0] === "session"
                            && result.keys[1] === "testJson" && result.keys[2] === "testNumber") {
                            retkeys = true;
                            document.querySelector('.keys').classList.remove('hidden');
                        }
                        return [4 /*yield*/, CapacitorDataStorageSqlite.values()];
                    case 10:
                        result = _a.sent();
                        console.log("Get values : " + result.values);
                        console.log("Values length " + result.values.length);
                        if (result.values.length === 3 && result.values[0] === "Session Opened"
                            && result.values[1] === JSON.stringify(data) && result.values[2] === data1.toString()) {
                            retvalues = true;
                            document.querySelector('.values').classList.remove('hidden');
                        }
                        CapacitorDataStorageSqlite.keysvalues().then(function (result) {
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
                                CapacitorDataStorageSqlite.remove({ key: "testJson" }).then(function (result) {
                                    if (result.result) {
                                        CapacitorDataStorageSqlite.keysvalues().then(function (res) { return __awaiter(_this, void 0, void 0, function () {
                                            var res_1;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (res.keysvalues.length === 2 &&
                                                            res.keysvalues[0].key === "session" && res.keysvalues[0].value === "Session Opened" &&
                                                            res.keysvalues[1].key === "testNumber" && res.keysvalues[1].value === data1.toString()) {
                                                            retremove = true;
                                                            document.querySelector('.remove').classList.remove('hidden');
                                                        }
                                                        return [4 /*yield*/, CapacitorDataStorageSqlite.clear()];
                                                    case 1:
                                                        result = _a.sent();
                                                        if (!result.result) return [3 /*break*/, 3];
                                                        return [4 /*yield*/, CapacitorDataStorageSqlite.keysvalues()];
                                                    case 2:
                                                        res_1 = _a.sent();
                                                        console.log("after clear res.keysvalues.length " + res_1.keysvalues.length);
                                                        if (res_1.keysvalues.length === 0) {
                                                            retclear = true;
                                                            document.querySelector('.clear').classList.remove('hidden');
                                                        }
                                                        if (retpopulate && retiskey && retkeys && retvalues && retkeysvalues && retremove && retclear) {
                                                            document.querySelector('.success').classList.remove('hidden');
                                                        }
                                                        else {
                                                            document.querySelector('.failure').classList.remove('hidden');
                                                        }
                                                        return [3 /*break*/, 4];
                                                    case 3:
                                                        document.querySelector('.failure').classList.remove('hidden');
                                                        _a.label = 4;
                                                    case 4: return [2 /*return*/];
                                                }
                                            });
                                        }); });
                                    }
                                    else {
                                        document.querySelector('.failure').classList.remove('hidden');
                                    }
                                });
                            }
                            else {
                                document.querySelector('.failure').classList.remove('hidden');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/queaujeanpierre/Documents/ProjectswithCapacitor/ionic-capacitor-data-storage-sqlite/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n  <button full ion-button (click)="testPlugin()">Test Plugin</button>\n  <p class="populate hidden">\n    Storing data successful\n  </p>\n  <p class="iskey hidden">\n    Iskey successful\n  </p>\n  <p class="keys hidden">\n    Get keys successful\n  </p>\n  <p class="values hidden">\n    Get values successful\n  </p>\n  <p class="keysvalues hidden">\n    Get keys/values successful\n  </p>\n  <p class="remove hidden">\n    Remove key successful\n  </p>\n  <p class="clear hidden">\n    Clear keys successful\n  </p>\n  <p class="success hidden">\n    The test was successful\n  </p>\n  <p class="failure hidden">\n    The test failed\n  </p>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/queaujeanpierre/Documents/ProjectswithCapacitor/ionic-capacitor-data-storage-sqlite/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/queaujeanpierre/Documents/ProjectswithCapacitor/ionic-capacitor-data-storage-sqlite/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/queaujeanpierre/Documents/ProjectswithCapacitor/ionic-capacitor-data-storage-sqlite/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map