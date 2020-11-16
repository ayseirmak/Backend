(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/config/src/index.ts":
/*!********************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/config/src/index.ts ***!
  \********************************************************************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_configureStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configureStore */ "../../../libs/config/src/lib/configureStore.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return _lib_configureStore__WEBPACK_IMPORTED_MODULE_0__["configureStore"]; });



/***/ }),

/***/ "../../../libs/config/src/lib/configureStore.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/config/src/lib/configureStore.ts ***!
  \*********************************************************************************************/
/*! exports provided: configureStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../../node_modules/redux/es/redux.js");
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "../../../libs/config/src/lib/rootReducer.ts");
/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ "../../../libs/config/src/lib/middlewares/index.ts");




const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "../../../node_modules/redux-devtools-extension/index.js");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

const configureStore = () => {
  const middlewares = [_middlewares__WEBPACK_IMPORTED_MODULE_2__["sagaMiddleware"]];
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["rootReducer"], bindMiddleware(middlewares));
  _middlewares__WEBPACK_IMPORTED_MODULE_2__["sagaMiddleware"].run(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["rootSaga"]);
  window['UGLY_STORE'] = store;
  return store;
};



/***/ }),

/***/ "../../../libs/config/src/lib/middlewares/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/config/src/lib/middlewares/index.ts ***!
  \************************************************************************************************/
/*! exports provided: sagaMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _saga_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saga-middleware */ "../../../libs/config/src/lib/middlewares/saga-middleware.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sagaMiddleware", function() { return _saga_middleware__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../../../libs/config/src/lib/middlewares/saga-middleware.ts":
/*!**********************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/config/src/lib/middlewares/saga-middleware.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga */ "../../../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");

const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (sagaMiddleware);

/***/ }),

/***/ "../../../libs/config/src/lib/rootReducer.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/config/src/lib/rootReducer.ts ***!
  \******************************************************************************************/
/*! exports provided: rootReducer, rootSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootReducer", function() { return rootReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootSaga", function() { return rootSaga; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../../../node_modules/redux/es/redux.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _internship_store_temp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/store/temp */ "../../../libs/store/temp/src/index.ts");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "../../../node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ "../../../node_modules/redux-persist/es/index.js");






const AuthenticationPersistConfig = {
  key: 'authentication',
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default()),
  whitelist: ['authenticated']
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  authentication: Object(redux_persist__WEBPACK_IMPORTED_MODULE_5__["persistReducer"])(AuthenticationPersistConfig, _internship_store_authentication__WEBPACK_IMPORTED_MODULE_1__["authenticationReducer"]),
  temp: _internship_store_temp__WEBPACK_IMPORTED_MODULE_3__["tempReducer"]
});
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["fork"])(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_1__["authenticationSaga"])]);
}

/***/ }),

/***/ "../../../libs/shared/api/src/index.ts":
/*!************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/index.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "../../../libs/shared/api/src/lib/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../../libs/shared/api/src/lib/api/Auth/auth-resource.ts":
/*!*********************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/api/Auth/auth-resource.ts ***!
  \*********************************************************************************************************/
/*! exports provided: AuthResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthResource", function() { return AuthResource; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

class AuthResource {
  constructor(axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a, axiosRequestConfig = {}) {
    this.axios = axios;
    this.axiosRequestConfig = axiosRequestConfig;

    this.login = data => this.axios.post('auth/signin', data, this.axiosRequestConfig).then(r => r.data);

    this.register = data => this.axios.post('auth/sign-up', data, this.axiosRequestConfig).then(r => r.data);

    this.update = data => this.axios.put('user/edit', data, this.axiosRequestConfig).then(r => r.data);

    this.newPassword = data => this.axios.post('auth/forgot-password', data, this.axiosRequestConfig).then(r => r.data);

    this.logout = data => this.axios.post('user/logout', data, this.axiosRequestConfig).then(r => r.data);

    this.resetPassword = data => this.axios.post('user/create-new-password', data, this.axiosRequestConfig).then(r => r.data);

    this.userDetail = () => this.axios.get('user/', this.axiosRequestConfig).then(r => r.data);

    this.changePassword = data => this.axios.post('user/change-password', data, this.axiosRequestConfig).then(r => r.data);

    this.sessionDetail = () => this.axios.get('/user/active-sessions', this.axiosRequestConfig).then(r => r.data);

    this.deleteSession = (authorizationToken, refreshToken, accessToken) => this.axios.delete('/user/logout-from-session', {
      headers: {
        Authorization: authorizationToken
      },
      params: {
        token: refreshToken,
        accessToken: accessToken
      }
    }).then(r => r.data);

    this.sendActivation = data => this.axios.get('auth/send-email?email=' + data, this.axiosRequestConfig);

    this.addTopic = data => this.axios.post('entry/addTopic', data, this.axiosRequestConfig).then(r => r.data);

    this.getTopic = () => this.axios.get('entry/getTopics', this.axiosRequestConfig).then(r => r.data);

    this.addContent = data => this.axios.post('entry/addContent', data, this.axiosRequestConfig).then(r => r.data);

    this.getContent = topicName => this.axios.get('entry/getContent', {
      params: {
        topic: topicName
      }
    }).then(r => r.data);

    this.userInfo = userName => this.axios.get('user/info', {
      params: {
        userName: userName
      }
    }).then(r => r.data);

    this.myContents = () => this.axios.get('entry/getMyContents', this.axiosRequestConfig).then(r => r.data);

    this.userContents = userName => this.axios.get('entry/getUserContents', {
      params: {
        userName: userName
      }
    }).then(r => r.data);
  } // TODO change any types according to request/response model


}

/***/ }),

/***/ "../../../libs/shared/api/src/lib/api/Auth/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/api/Auth/index.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "../../../libs/shared/api/src/lib/api/Auth/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../../libs/shared/api/src/lib/api/Auth/types.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/api/Auth/types.ts ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/shared/api/src/lib/api/api.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/api/api.ts ***!
  \******************************************************************************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _Auth_auth_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Auth/auth-resource */ "../../../libs/shared/api/src/lib/api/Auth/auth-resource.ts");
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/axios */ "../../../libs/shared/api/src/lib/config/axios.ts");


const api = {
  auth: new _Auth_auth_resource__WEBPACK_IMPORTED_MODULE_0__["AuthResource"](_config_axios__WEBPACK_IMPORTED_MODULE_1__["default"])
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/api/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/api/index.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "../../../libs/shared/api/src/lib/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "api", function() { return _api__WEBPACK_IMPORTED_MODULE_0__["api"]; });

/* harmony import */ var _Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Auth */ "../../../libs/shared/api/src/lib/api/Auth/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Auth__WEBPACK_IMPORTED_MODULE_1__) if(["api","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Auth__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/axios.ts":
/*!***********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/axios.ts ***!
  \***********************************************************************************************/
/*! exports provided: createAxios, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAxios", function() { return createAxios; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors */ "../../../libs/shared/api/src/lib/config/interceptors/index.ts");


const baseUrl = 'https://tatli-sozluk.herokuapp.com';
const defaultConfig = {
  baseURL: `${baseUrl}/api/`
};
function createAxios(baseConfig) {
  const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create(baseConfig); // Request Interceptors

  instance.interceptors.request.use(_interceptors__WEBPACK_IMPORTED_MODULE_1__["tokenInterceptor"]);
  instance.interceptors.request.use(_interceptors__WEBPACK_IMPORTED_MODULE_1__["captchaInterceptor"]); // Response Interceptors

  instance.interceptors.response.use(_interceptors__WEBPACK_IMPORTED_MODULE_1__["loginInterceptor"]);
  instance.interceptors.response.use(c => c, _interceptors__WEBPACK_IMPORTED_MODULE_1__["captchaRequiredInterceptor"]);
  instance.interceptors.response.use(c => c, _interceptors__WEBPACK_IMPORTED_MODULE_1__["refreshTokenInterceptor"]);
  instance.interceptors.response.use(c => c, _interceptors__WEBPACK_IMPORTED_MODULE_1__["errorInterceptor"]);
  instance.interceptors.response.use(_interceptors__WEBPACK_IMPORTED_MODULE_1__["successInterceptor"]);
  return instance;
}
/* harmony default export */ __webpack_exports__["default"] = (createAxios(defaultConfig));

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/captcha-interceptor.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/captcha-interceptor.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: captchaInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaInterceptor", function() { return captchaInterceptor; });
const captchaInterceptor = config => {
  var _config$data;

  if ((_config$data = config.data) === null || _config$data === void 0 ? void 0 : _config$data.captcha) {
    const data = config.data.captcha;
    config.headers['captcha-response'] = `${data}`;
  } else {
    return config;
  }

  return config;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/captcha-required-interceptor.ts":
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/captcha-required-interceptor.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: captchaRequiredInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaRequiredInterceptor", function() { return captchaRequiredInterceptor; });
const captchaRequiredInterceptor = error => {
  var _error$config, _error$config$url;

  if ((_error$config = error.config) === null || _error$config === void 0 ? void 0 : (_error$config$url = _error$config.url) === null || _error$config$url === void 0 ? void 0 : _error$config$url.endsWith('/signin')) {
    if (error.response.status === 429) {
      //TODO find a better usage to remove this ugly implementation
      window['UGLY_STORE'].dispatch({
        type: '@temp/CAPTCHA_REQUIRED',
        payload: true
      });
    } else {
      window['UGLY_STORE'].dispatch({
        type: '@temp/CAPTCHA_REQUIRED',
        payload: false
      });
    }
  }

  throw error;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/error-interceptor.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/error-interceptor.ts ***!
  \************************************************************************************************************************/
/*! exports provided: errorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorInterceptor", function() { return errorInterceptor; });
const err = {
  'auth/signin': {
    '401': 'Kullanıcı adı veya şifre yanlış',
    '401-2': 'Account not activated. Please activate your account!'
  },
  'auth/sign-up': {
    '102': 'Email is already in use',
    '101': 'Username is already taken'
  },
  'user/change-password': {
    '108': 'Old password is incorrect',
    '109': 'Password fields does not match'
  },
  'user/edit': {
    '400': 'Email is already in use!',
    '500': 'Phone Number Error'
  },
  'auth/forgot-password': {
    '105': 'There is no registered user on this email.'
  },
  'user/create-new-password': {
    '400': 'Something is wrong with that token!'
  },
  'auth/send-email': {
    '400': 'Bu mail ile uygun bir kullanıcı bulamadık. Lütfen kayıt olunuz.'
  }
};
const errorInterceptor = error => {
  var _error$response, _error$response2, _error$response3, _error$response4, _error$response5, _error$response6, _error$response7, _error$response8, _error$response10, _error$response11;

  let errorMessage = null;

  if (((_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data.message.toString()) === '108') {
    errorMessage = err[error.config.url]['108'];
  } else if (((_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data.message.toString()) === '109') {
    errorMessage = err[error.config.url]['109'];
  } else if (((_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.data.message.toString()) === '101') {
    errorMessage = err[error.config.url]['101'];
  } else if (((_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.data.message.toString()) === '102') {
    errorMessage = err[error.config.url]['102'];
  } else if (((_error$response5 = error.response) === null || _error$response5 === void 0 ? void 0 : _error$response5.data.message.toString()) === '105') {
    errorMessage = err[error.config.url]['105'];
  } else if (((_error$response6 = error.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.data.message.toString()) === '108') {
    errorMessage = err[error.config.url]['108'];
  } else if (((_error$response7 = error.response) === null || _error$response7 === void 0 ? void 0 : _error$response7.data.message.toString()) === 'User with given email could not found') {
    errorMessage = err['auth/send-email']['400'];
  } else if (error.config.url === 'auth/signin' && ((_error$response8 = error.response) === null || _error$response8 === void 0 ? void 0 : _error$response8.status) === 401) {
    var _error$response9;

    if (((_error$response9 = error.response) === null || _error$response9 === void 0 ? void 0 : _error$response9.data.error.toString()) === 'Account not activated. Please activate your account!') {
      errorMessage = err[error.config.url]['401-2'];
    } else {
      errorMessage = err[error.config.url]['401'];
    }
  } else if (((_error$response10 = error.response) === null || _error$response10 === void 0 ? void 0 : _error$response10.data.error.toString()) === 'Invalid Login details' && ((_error$response11 = error.response) === null || _error$response11 === void 0 ? void 0 : _error$response11.status) === 401) {
    window['UGLY_STORE'].dispatch({
      type: '@Authentication/UPDATE_LOGOUT'
    });
    errorMessage = null;
  } else {
    var _error$response12;

    errorMessage = err[error.config.url][(_error$response12 = error.response) === null || _error$response12 === void 0 ? void 0 : _error$response12.status];
  }

  window['UGLY_STORE'].dispatch({
    type: '@temp/ERROR_REQUIRED',
    payload: errorMessage
  });
  throw error;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/index.ts":
/*!************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/index.ts ***!
  \************************************************************************************************************/
/*! exports provided: loginInterceptor, tokenInterceptor, captchaRequiredInterceptor, captchaInterceptor, refreshTokenInterceptor, errorInterceptor, successInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/login-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginInterceptor", function() { return _login_interceptor__WEBPACK_IMPORTED_MODULE_0__["loginInterceptor"]; });

/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/token-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tokenInterceptor", function() { return _token_interceptor__WEBPACK_IMPORTED_MODULE_1__["tokenInterceptor"]; });

/* harmony import */ var _captcha_required_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./captcha-required-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/captcha-required-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captchaRequiredInterceptor", function() { return _captcha_required_interceptor__WEBPACK_IMPORTED_MODULE_2__["captchaRequiredInterceptor"]; });

/* harmony import */ var _captcha_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captcha-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/captcha-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captchaInterceptor", function() { return _captcha_interceptor__WEBPACK_IMPORTED_MODULE_3__["captchaInterceptor"]; });

/* harmony import */ var _refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refresh-token-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/refresh-token-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refreshTokenInterceptor", function() { return _refresh_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["refreshTokenInterceptor"]; });

/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/error-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_5__["errorInterceptor"]; });

/* harmony import */ var _success_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./success-interceptor */ "../../../libs/shared/api/src/lib/config/interceptors/success-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "successInterceptor", function() { return _success_interceptor__WEBPACK_IMPORTED_MODULE_6__["successInterceptor"]; });









/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/login-interceptor.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/login-interceptor.ts ***!
  \************************************************************************************************************************/
/*! exports provided: loginInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginInterceptor", function() { return loginInterceptor; });
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");

const loginInterceptor = res => {
  if (res.config.url.endsWith('/signin') || res.config.url.endsWith('/refresh-token')) {
    var _res$data, _res$data2;

    const accessToken = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.accessToken;
    const refreshToken = (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.refreshToken;

    if (res.status === 200) {
      if (accessToken) Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__["setAccessToken"])(accessToken);
      if (refreshToken) Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__["setRefreshToken"])(refreshToken);
      window['UGLY_STORE'].dispatch({
        type: '@temp/CAPTCHA_REQUIRED',
        payload: false
      });
    }
  }

  return res;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/refresh-token-interceptor.ts":
/*!********************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/refresh-token-interceptor.ts ***!
  \********************************************************************************************************************************/
/*! exports provided: refreshTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshTokenInterceptor", function() { return refreshTokenInterceptor; });
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const refreshTokenInterceptor = (error, axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a) => {
  var _error$response$data;

  if (error.response.status === 401 && ((_error$response$data = error.response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error.toString()) === 'JWT Expired.') {
    return new Promise(resolve => {
      axios.get('https://tatli-sozluk.herokuapp.com/api/auth/refresh-token', {
        params: {
          token: Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__["getRefreshToken"])()
        }
      }).then(function (response) {
        var _response$data;

        const accessToken = (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.accessToken;

        if (accessToken) {
          Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__["setAccessToken"])(accessToken);
          error.config.headers['Authorization'] = `Bearer ${accessToken}`;
          const res = axios.request(error.config);
          resolve(res);
        }
      }).catch(error => {
        window['UGLY_STORE'].dispatch({
          type: '@temp/ERROR_REQUIRED',
          payload: 'Your session has expired. Please login again!'
        });
        window['UGLY_STORE'].dispatch({
          type: '@Authentication/UPDATE_LOGOUT'
        });
      });
    });
  }

  throw error;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/success-interceptor.ts":
/*!**************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/success-interceptor.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: successInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successInterceptor", function() { return successInterceptor; });
const success = {
  'auth/signin': {
    '200': 'Giriş işleminiz başarı ile gerçekleşti. Ana sayfaya yönlendiriliyorsunuz.\n'
  },
  'auth/sign-up': {
    '201': 'Kayıt işleminiz başarı ile gerçekleşti. Mailinize aktivasyon kodu gönderildi. Lütfen hesabınızı aktive ediniz.'
  },
  'user/change-password': {
    '200': 'Password is successfully changed'
  },
  'auth/forgot-password': {
    '200': 'Password reset link has been sent to the e-mail address.'
  },
  'user/create-new-password': {
    '200': 'The password was changed'
  },
  'user/edit': {
    '200': 'User update success.'
  },
  'auth/send-email': {
    '200': 'Aktivasyon kodunuz gönderildi.'
  }
};
const successInterceptor = res => {
  let successMessage = null;

  if ((res === null || res === void 0 ? void 0 : res.config.url.endsWith('/signin')) || (res === null || res === void 0 ? void 0 : res.config.url.endsWith('/sign-up')) || (res === null || res === void 0 ? void 0 : res.config.url.endsWith('/change-password')) || (res === null || res === void 0 ? void 0 : res.config.url.endsWith('/create-new-password')) || (res === null || res === void 0 ? void 0 : res.config.url.endsWith('/forgot-password')) || (res === null || res === void 0 ? void 0 : res.config.url.endsWith('/edit'))) {
    successMessage = success[res.config.url][res === null || res === void 0 ? void 0 : res.status];
  } else if ((res === null || res === void 0 ? void 0 : res.config.url.startsWith('auth/send-email')) && (res === null || res === void 0 ? void 0 : res.status) === 200) {
    successMessage = success['auth/send-email']['200'];
  }

  window['UGLY_STORE'].dispatch({
    type: '@temp/SUCCESS_REQUIRED',
    payload: successMessage
  });
  return res;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/config/interceptors/token-interceptor.ts":
/*!************************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/config/interceptors/token-interceptor.ts ***!
  \************************************************************************************************************************/
/*! exports provided: tokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenInterceptor", function() { return tokenInterceptor; });
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");

const tokenInterceptor = config => {
  const accessToken = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_0__["getAccessToken"])();

  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

/***/ }),

/***/ "../../../libs/shared/api/src/lib/index.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/api/src/lib/index.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "../../../libs/shared/api/src/lib/api/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _api__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _api__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../../libs/shared/hooks/src/index.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/hooks/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: useAuthentication, useTemporary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "../../../libs/shared/hooks/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAuthentication", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["useAuthentication"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTemporary", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["useTemporary"]; });



/***/ }),

/***/ "../../../libs/shared/hooks/src/lib/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/hooks/src/lib/index.ts ***!
  \******************************************************************************************/
/*! exports provided: useAuthentication, useTemporary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useAuthentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAuthentication */ "../../../libs/shared/hooks/src/lib/useAuthentication.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useAuthentication", function() { return _useAuthentication__WEBPACK_IMPORTED_MODULE_0__["useAuthentication"]; });

/* harmony import */ var _useTemporary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTemporary */ "../../../libs/shared/hooks/src/lib/useTemporary.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTemporary", function() { return _useTemporary__WEBPACK_IMPORTED_MODULE_1__["useTemporary"]; });




/***/ }),

/***/ "../../../libs/shared/hooks/src/lib/useAuthentication.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/hooks/src/lib/useAuthentication.ts ***!
  \******************************************************************************************************/
/*! exports provided: useAuthentication */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthentication", function() { return useAuthentication; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");

function useAuthentication() {
  const isAuthenticated = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(store => {
    var _store$authentication;

    return (_store$authentication = store.authentication) === null || _store$authentication === void 0 ? void 0 : _store$authentication.authenticated;
  });
  return {
    isAuthenticated
  };
}

/***/ }),

/***/ "../../../libs/shared/hooks/src/lib/useTemporary.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/hooks/src/lib/useTemporary.ts ***!
  \*************************************************************************************************/
/*! exports provided: useTemporary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTemporary", function() { return useTemporary; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");

function useTemporary() {
  const isCaptchaRequired = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(store => {
    var _store$temp;

    return (_store$temp = store.temp) === null || _store$temp === void 0 ? void 0 : _store$temp.captchaRequired;
  });
  const isErrorRequired = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(store => {
    var _store$temp2;

    return (_store$temp2 = store.temp) === null || _store$temp2 === void 0 ? void 0 : _store$temp2.errorRequired;
  });
  const isSuccessRequired = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(store => {
    var _store$temp3;

    return (_store$temp3 = store.temp) === null || _store$temp3 === void 0 ? void 0 : _store$temp3.successRequired;
  });
  return {
    isCaptchaRequired,
    isErrorRequired,
    isSuccessRequired
  };
}

/***/ }),

/***/ "../../../libs/shared/types/src/index.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/types/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: ACCESS_TOKEN, REFRESH_TOKEN, CAPTCHA_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "../../../libs/shared/types/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["REFRESH_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAPTCHA_TOKEN", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["CAPTCHA_TOKEN"]; });



/***/ }),

/***/ "../../../libs/shared/types/src/lib/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/types/src/lib/index.ts ***!
  \******************************************************************************************/
/*! exports provided: ACCESS_TOKEN, REFRESH_TOKEN, CAPTCHA_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared-types */ "../../../libs/shared/types/src/lib/shared-types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return _shared_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN", function() { return _shared_types__WEBPACK_IMPORTED_MODULE_0__["REFRESH_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CAPTCHA_TOKEN", function() { return _shared_types__WEBPACK_IMPORTED_MODULE_0__["CAPTCHA_TOKEN"]; });



/***/ }),

/***/ "../../../libs/shared/types/src/lib/shared-types.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/types/src/lib/shared-types.ts ***!
  \*************************************************************************************************/
/*! exports provided: ACCESS_TOKEN, REFRESH_TOKEN, CAPTCHA_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN", function() { return ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH_TOKEN", function() { return REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPTCHA_TOKEN", function() { return CAPTCHA_TOKEN; });
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';
const CAPTCHA_TOKEN = 'captcha_token';

/***/ }),

/***/ "../../../libs/shared/utils/src/index.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/utils/src/index.ts ***!
  \**************************************************************************************/
/*! exports provided: setAccessToken, getAccessToken, removeAccessToken, setRefreshToken, getRefreshToken, removeRefreshToken, getUrlParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-utils */ "../../../libs/shared/utils/src/lib/shared-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setAccessToken", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["setAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["getAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeAccessToken", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["removeAccessToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRefreshToken", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["setRefreshToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRefreshToken", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["getRefreshToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeRefreshToken", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["removeRefreshToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return _lib_shared_utils__WEBPACK_IMPORTED_MODULE_0__["getUrlParameter"]; });



/***/ }),

/***/ "../../../libs/shared/utils/src/lib/shared-utils.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/shared/utils/src/lib/shared-utils.ts ***!
  \*************************************************************************************************/
/*! exports provided: setAccessToken, getAccessToken, removeAccessToken, setRefreshToken, getRefreshToken, removeRefreshToken, getUrlParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAccessToken", function() { return setAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccessToken", function() { return getAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAccessToken", function() { return removeAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRefreshToken", function() { return setRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRefreshToken", function() { return getRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRefreshToken", function() { return removeRefreshToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUrlParameter", function() { return getUrlParameter; });
/* harmony import */ var _internship_shared_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internship/shared/types */ "../../../libs/shared/types/src/index.ts");

const setAccessToken = token => window.localStorage.setItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"], token);
const getAccessToken = () => window.localStorage.getItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"]);
const removeAccessToken = () => window.localStorage.removeItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_0__["ACCESS_TOKEN"]);
const setRefreshToken = token => window.localStorage.setItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_0__["REFRESH_TOKEN"], token);
const getRefreshToken = () => window.localStorage.getItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_0__["REFRESH_TOKEN"]);
const removeRefreshToken = () => window.localStorage.removeItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_0__["REFRESH_TOKEN"]);
const getUrlParameter = (name, search) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

/***/ }),

/***/ "../../../libs/store/authentication/src/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/authentication/src/index.ts ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "../../../libs/store/authentication/src/lib/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../../libs/store/authentication/src/lib/actions.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/authentication/src/lib/actions.ts ***!
  \****************************************************************************************************/
/*! exports provided: loginAsync, forgotpasswordAsync, registerAsync, updateAsync, logoutAsync, topicAsync, contentAsync, resetpasswordAsync, googleLogin, updateLogout, changePasswordAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAsync", function() { return loginAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotpasswordAsync", function() { return forgotpasswordAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAsync", function() { return registerAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAsync", function() { return updateAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutAsync", function() { return logoutAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topicAsync", function() { return topicAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentAsync", function() { return contentAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetpasswordAsync", function() { return resetpasswordAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleLogin", function() { return googleLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateLogout", function() { return updateLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changePasswordAsync", function() { return changePasswordAsync; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "../../../node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

const loginAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/LOGIN_REQUEST', '@Authentication/LOGIN_SUCCESS', '@Authentication/LOGIN_FAILURE')();
const forgotpasswordAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/FORGOTPASSWORD_REQUEST', '@Authentication/FORGOTPASSWORD_SUCCESS', '@Authentication/FORGOTPASSWORD_FAILURE')();
const registerAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/REGISTER_REQUEST', '@Authentication/REGISTER_SUCCESS', '@Authentication/REGISTER_FAILURE')();
const updateAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/UPDATE_REQUEST', '@Authentication/UPDATE_SUCCESS', '@Authentication/UPDATE_FAILURE')();
const logoutAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/LOGOUT_REQUEST', '@Authentication/LOGOUT_SUCCESS', '@Authentication/LOGOUT_FAILURE')();
const topicAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@TOPIC_REQUEST', '@TOPIC_SUCCESS', '@TOPIC_FAILURE')();
const contentAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@CONTENT_REQUEST', '@CONTENT_SUCCESS', '@CONTENT_FAILURE')();
const resetpasswordAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/RESETPASSWORD_REQUEST', '@Authentication/RESETPASSWORD_SUCCESS', '@Authentication/RESETPASSWORD_FAILURE')();
const googleLogin = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('@Authentication/GOOGLE_LOGIN')();
const updateLogout = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('@Authentication/UPDATE_LOGOUT')();
const changePasswordAsync = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAsyncAction"])('@Authentication/CHANGE_PASSWORD_REQUEST', '@Authentication/CHANGE_PASSWORD_SUCCESS', '@Authentication/CHANGE_PASSWORD_FAILURE')();

/***/ }),

/***/ "../../../libs/store/authentication/src/lib/index.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/authentication/src/lib/index.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "../../../libs/store/authentication/src/lib/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["loginAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forgotpasswordAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["forgotpasswordAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["registerAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["updateAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logoutAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["logoutAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "topicAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["topicAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contentAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["contentAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetpasswordAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["resetpasswordAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "googleLogin", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["googleLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateLogout", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["updateLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changePasswordAsync", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["changePasswordAsync"]; });

/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "../../../libs/store/authentication/src/lib/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticationReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_1__["authenticationReducer"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "../../../libs/store/authentication/src/lib/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_2__) if(["loginAsync","forgotpasswordAsync","registerAsync","updateAsync","logoutAsync","topicAsync","contentAsync","resetpasswordAsync","googleLogin","updateLogout","changePasswordAsync","authenticationReducer","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sagas */ "../../../libs/store/authentication/src/lib/sagas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authenticationSaga", function() { return _sagas__WEBPACK_IMPORTED_MODULE_3__["authenticationSaga"]; });






/***/ }),

/***/ "../../../libs/store/authentication/src/lib/reducer.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/authentication/src/lib/reducer.ts ***!
  \****************************************************************************************************/
/*! exports provided: authenticationReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationReducer", function() { return authenticationReducer; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "../../../node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../../libs/store/authentication/src/lib/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  authenticated: false
};
function authenticationReducer(state = initialState, action) {
  switch (action.type) {
    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loginAsync"].success):
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          authenticated: true
        });
      }

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["loginAsync"].failure):
      return _objectSpread(_objectSpread({}, state), {}, {
        authenticated: false
      });

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["logoutAsync"].success):
      return initialState;

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["googleLogin"]):
      return _objectSpread(_objectSpread({}, state), {}, {
        authenticated: true
      });

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["updateLogout"]):
      return _objectSpread(_objectSpread({}, state), {}, {
        authenticated: false
      });
  }

  return state;
}

/***/ }),

/***/ "../../../libs/store/authentication/src/lib/sagas.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/authentication/src/lib/sagas.ts ***!
  \**************************************************************************************************/
/*! exports provided: authenticationSaga */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticationSaga", function() { return authenticationSaga; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "../../../libs/store/authentication/src/lib/actions.ts");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "../../../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");





function* doLogin({
  payload
}) {
  try {
    const data = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.login, payload);
    if (data === null || data === void 0 ? void 0 : data.accessToken) localStorage.setItem('cloud_users', JSON.stringify(data));
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["loginAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["loginAsync"].failure(e));
  }
}

function* doResetPassword({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.resetPassword, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["resetpasswordAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["resetpasswordAsync"].failure(e));
  }
}

function* doForgotPassword({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.newPassword, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["forgotpasswordAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["forgotpasswordAsync"].failure(e));
  }
}

function doUpdateLogout() {
  if (localStorage.getItem('access_token')) {
    localStorage.removeItem('cloud_users');
    Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_3__["removeAccessToken"])();
    Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_3__["removeRefreshToken"])();
  }
}

function* doLogout({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.logout, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["logoutAsync"].success({}));

    if (localStorage.getItem('access_token')) {
      localStorage.removeItem('cloud_users');
      Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_3__["removeAccessToken"])();
      Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_3__["removeRefreshToken"])();
    }
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["logoutAsync"].failure(e));
  }
}

function* doRegister({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.register, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["registerAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["registerAsync"].failure(e));
  }
}

function* doUpdate({
  payload
}) {
  try {
    /* let requestData = {};
     Object.entries(payload).forEach(([key, value]) => (value !== '' ? (requestData = { ...requestData, [key]: value }) : null));*/
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.update, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["updateAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["updateAsync"].failure(e));
  }
}

function* doChangePassword({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.changePassword, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["changePasswordAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["changePasswordAsync"].failure(e));
  }
}

function* doAddTopic({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.addTopic, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["topicAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["topicAsync"].failure(e));
  }
}

function* doAddContent({
  payload
}) {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["call"])(_internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.addContent, payload);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["contentAsync"].success({}));
  } catch (e) {
    console.error(e);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["put"])(_actions__WEBPACK_IMPORTED_MODULE_0__["contentAsync"].failure(e));
  }
}

function* watchLogin() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["loginAsync"].request, doLogin);
}

function* watchAddTopic() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["topicAsync"].request, doAddTopic);
}

function* watchAddContent() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["contentAsync"].request, doAddContent);
}

function* watchResetPassword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["resetpasswordAsync"].request, doResetPassword);
}

function* watchForgotPassword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["forgotpasswordAsync"].request, doForgotPassword);
}

function* watchLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["logoutAsync"].request, doLogout);
}

function* watchRegister() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["registerAsync"].request, doRegister);
}

function* watchUpdate() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["updateAsync"].request, doUpdate);
}

function* watchChangePassword() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["changePasswordAsync"].request, doChangePassword);
}

function* watchUpdateLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_0__["updateLogout"], doUpdateLogout);
}

function* authenticationSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchRegister), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdate), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchForgotPassword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchResetPassword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchChangePassword), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchUpdateLogout), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddTopic), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__["fork"])(watchAddContent)]);
}

/***/ }),

/***/ "../../../libs/store/authentication/src/lib/types.ts":
/*!**************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/authentication/src/lib/types.ts ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/store/temp/src/index.ts":
/*!************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/temp/src/index.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "../../../libs/store/temp/src/lib/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "../../../libs/store/temp/src/lib/actions.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/temp/src/lib/actions.ts ***!
  \******************************************************************************************/
/*! exports provided: captchaRequired, errorRequired, successRequired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captchaRequired", function() { return captchaRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRequired", function() { return errorRequired; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successRequired", function() { return successRequired; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "../../../node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);

const captchaRequired = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('@temp/CAPTCHA_REQUIRED')();
const errorRequired = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('@temp/ERROR_REQUIRED')();
const successRequired = Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])('@temp/SUCCESS_REQUIRED')();

/***/ }),

/***/ "../../../libs/store/temp/src/lib/index.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/temp/src/lib/index.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "../../../libs/store/temp/src/lib/actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "captchaRequired", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["captchaRequired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "errorRequired", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["errorRequired"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "successRequired", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["successRequired"]; });

/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "../../../libs/store/temp/src/lib/types.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _types__WEBPACK_IMPORTED_MODULE_1__) if(["captchaRequired","errorRequired","successRequired","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _types__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducer */ "../../../libs/store/temp/src/lib/reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tempReducer", function() { return _reducer__WEBPACK_IMPORTED_MODULE_2__["tempReducer"]; });



 // export * from './sagas';

/***/ }),

/***/ "../../../libs/store/temp/src/lib/reducer.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/temp/src/lib/reducer.ts ***!
  \******************************************************************************************/
/*! exports provided: tempReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tempReducer", function() { return tempReducer; });
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typesafe-actions */ "../../../node_modules/typesafe-actions/dist/typesafe-actions.umd.production.js");
/* harmony import */ var typesafe_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "../../../libs/store/temp/src/lib/actions.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  captchaRequired: false,
  errorRequired: null,
  successRequired: null
};
function tempReducer(state = initialState, action) {
  switch (action.type) {
    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["captchaRequired"]):
      return _objectSpread(_objectSpread({}, state), {}, {
        captchaRequired: action.payload
      });

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["errorRequired"]):
      return _objectSpread(_objectSpread({}, state), {}, {
        errorRequired: action.payload
      });

    case Object(typesafe_actions__WEBPACK_IMPORTED_MODULE_0__["getType"])(_actions__WEBPACK_IMPORTED_MODULE_1__["successRequired"]):
      return _objectSpread(_objectSpread({}, state), {}, {
        successRequired: action.payload
      });
  }

  return state;
}

/***/ }),

/***/ "../../../libs/store/temp/src/lib/types.ts":
/*!****************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/store/temp/src/lib/types.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/ui/src/index.ts":
/*!****************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/index.ts ***!
  \****************************************************************************/
/*! exports provided: Button, Captcha, ProfileImage, Input, ErrorMessage, Navigation, UserForm, TopicForm, ContentForm, UserInfo, Popup, PopupButton, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "../../../libs/ui/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Captcha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ProfileImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ErrorMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Navigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["UserForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["TopicForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentForm", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["ContentForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["UserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupButton", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["PopupButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["Search"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Button/Button.tsx":
/*!***********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Button/Button.tsx ***!
  \***********************************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Button = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], Object.assign({
    variant: "primary"
  }, props), children);
};

/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Button/index.ts":
/*!*********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Button/index.ts ***!
  \*********************************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../../../libs/ui/src/lib/atoms/Button/Button.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Captcha/Captcha.tsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Captcha/Captcha.tsx ***!
  \*************************************************************************************************/
/*! exports provided: Captcha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return Captcha; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-recaptcha */ "../../../node_modules/react-google-recaptcha/lib/esm/index.js");


const Captcha = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    onChange,
    name
  } = props;
  const [captchaValue, setCaptchaValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChangeHandler = value => {
    onChange && onChange(value);
    setCaptchaValue(value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_recaptcha__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    sitekey: "6LcQ1tIZAAAAAGNUDStvqDuRoUT4JosqNHUXQg_y"
  }, props, {
    onChange: onChangeHandler
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    defaultValue: captchaValue,
    name: name,
    ref: ref
  }));
});

/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Captcha/index.ts":
/*!**********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Captcha/index.ts ***!
  \**********************************************************************************************/
/*! exports provided: Captcha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Captcha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Captcha */ "../../../libs/ui/src/lib/atoms/Captcha/Captcha.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return _Captcha__WEBPACK_IMPORTED_MODULE_0__["Captcha"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/ErrorMessage/ErrorMessage.tsx":
/*!***********************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/ErrorMessage/ErrorMessage.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");


const StyledP = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "ErrorMessage__StyledP",
  componentId: "s1hisd-0"
})(["color:#bf1650;"]);

const getDefaultMessage = (errors, name) => {
  var _errors$name;

  switch ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name['type']) {
    case 'required':
      return 'This field is required';
  }
};

const ErrorMessage = props => {
  var _errors$name2;

  const {
    errors,
    name
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledP, null, ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2['message']) || getDefaultMessage(errors, name));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/ErrorMessage/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/ErrorMessage/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorMessage */ "../../../libs/ui/src/lib/atoms/ErrorMessage/ErrorMessage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return _ErrorMessage__WEBPACK_IMPORTED_MODULE_0__["ErrorMessage"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Image/ProfileImage.tsx":
/*!****************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Image/ProfileImage.tsx ***!
  \****************************************************************************************************/
/*! exports provided: ProfileImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return ProfileImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const ProfileImage = (_ref) => {
  let {
    image
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["image"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", Object.assign({
    className: "rounded-circle shadow",
    alt: `Profile`,
    src: image
  }, rest));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Image/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Image/index.ts ***!
  \********************************************************************************************/
/*! exports provided: ProfileImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileImage */ "../../../libs/ui/src/lib/atoms/Image/ProfileImage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return _ProfileImage__WEBPACK_IMPORTED_MODULE_0__["ProfileImage"]; });


;

/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Input/Input.tsx":
/*!*********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Input/Input.tsx ***!
  \*********************************************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorMessage */ "../../../libs/ui/src/lib/atoms/ErrorMessage/index.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Input = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef((props, ref) => {
  const {
    errors,
    name,
    className
  } = props,
        rest = _objectWithoutProperties(props, ["errors", "name", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", Object.assign({
    ref: ref,
    name: name
  }, rest, {
    className: `form-control ${errors[name] && 'is-invalid'} ${className}`
  })), errors && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["ErrorMessage"], {
    errors: errors,
    name: name
  }));
});

/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/Input/index.ts":
/*!********************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/Input/index.ts ***!
  \********************************************************************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "../../../libs/ui/src/lib/atoms/Input/Input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["Input"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/atoms/index.ts":
/*!**************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/atoms/index.ts ***!
  \**************************************************************************************/
/*! exports provided: Button, Captcha, ProfileImage, Input, ErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "../../../libs/ui/src/lib/atoms/Button/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var _Captcha__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Captcha */ "../../../libs/ui/src/lib/atoms/Captcha/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return _Captcha__WEBPACK_IMPORTED_MODULE_1__["Captcha"]; });

/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image */ "../../../libs/ui/src/lib/atoms/Image/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return _Image__WEBPACK_IMPORTED_MODULE_2__["ProfileImage"]; });

/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Input */ "../../../libs/ui/src/lib/atoms/Input/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_3__["Input"]; });

/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "../../../libs/ui/src/lib/atoms/ErrorMessage/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["ErrorMessage"]; });







/***/ }),

/***/ "../../../libs/ui/src/lib/index.ts":
/*!********************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/index.ts ***!
  \********************************************************************************/
/*! exports provided: Button, Captcha, ProfileImage, Input, ErrorMessage, Navigation, UserForm, TopicForm, ContentForm, UserInfo, Popup, PopupButton, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./atoms */ "../../../libs/ui/src/lib/atoms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _atoms__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Captcha", function() { return _atoms__WEBPACK_IMPORTED_MODULE_0__["Captcha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileImage", function() { return _atoms__WEBPACK_IMPORTED_MODULE_0__["ProfileImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _atoms__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorMessage", function() { return _atoms__WEBPACK_IMPORTED_MODULE_0__["ErrorMessage"]; });

/* harmony import */ var _organisms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisms */ "../../../libs/ui/src/lib/organisms/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _organisms__WEBPACK_IMPORTED_MODULE_1__["Navigation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return _organisms__WEBPACK_IMPORTED_MODULE_1__["UserForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return _organisms__WEBPACK_IMPORTED_MODULE_1__["TopicForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentForm", function() { return _organisms__WEBPACK_IMPORTED_MODULE_1__["ContentForm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _organisms__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]; });

/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./molecules */ "../../../libs/ui/src/lib/molecules/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _molecules__WEBPACK_IMPORTED_MODULE_2__["Popup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupButton", function() { return _molecules__WEBPACK_IMPORTED_MODULE_2__["PopupButton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _molecules__WEBPACK_IMPORTED_MODULE_2__["Search"]; });





/***/ }),

/***/ "../../../libs/ui/src/lib/molecules/Popup/Popup.tsx":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/molecules/Popup/Popup.tsx ***!
  \*************************************************************************************************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Popup = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, children)));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/molecules/Popup/PopupButton.tsx":
/*!*******************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/molecules/Popup/PopupButton.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: PopupButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupButton", function() { return PopupButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const PopupButton = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], Object.assign({
    className: "m-md-2"
  }, props), children);
};

/***/ }),

/***/ "../../../libs/ui/src/lib/molecules/Popup/index.ts":
/*!************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/molecules/Popup/index.ts ***!
  \************************************************************************************************/
/*! exports provided: Popup, PopupButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "../../../libs/ui/src/lib/molecules/Popup/Popup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });

/* harmony import */ var _PopupButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupButton */ "../../../libs/ui/src/lib/molecules/Popup/PopupButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupButton", function() { return _PopupButton__WEBPACK_IMPORTED_MODULE_1__["PopupButton"]; });




/***/ }),

/***/ "../../../libs/ui/src/lib/molecules/Search/Search.tsx":
/*!***************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/molecules/Search/Search.tsx ***!
  \***************************************************************************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../atoms/Button */ "../../../libs/ui/src/lib/atoms/Button/index.ts");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");





const Search = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    inline: true,
    className: "mr-sm-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    type: "text",
    placeholder: "Search",
    className: "mr-sm-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "light"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSearchengin"],
    style: {
      marginRight: '10px'
    }
  })));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/molecules/Search/index.ts":
/*!*************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/molecules/Search/index.ts ***!
  \*************************************************************************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search */ "../../../libs/ui/src/lib/molecules/Search/Search.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_0__["Search"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/molecules/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/molecules/index.ts ***!
  \******************************************************************************************/
/*! exports provided: Popup, PopupButton, Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "../../../libs/ui/src/lib/molecules/Popup/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_0__["Popup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupButton", function() { return _Popup__WEBPACK_IMPORTED_MODULE_0__["PopupButton"]; });

/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search */ "../../../libs/ui/src/lib/molecules/Search/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _Search__WEBPACK_IMPORTED_MODULE_1__["Search"]; });




/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/ContentForm/ContentForm.tsx":
/*!*************************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/ContentForm/ContentForm.tsx ***!
  \*************************************************************************************************************/
/*! exports provided: ContentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentForm", function() { return ContentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms */ "../../../libs/ui/src/lib/atoms/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "ContentForm__StyledRow",
  componentId: "sc-1d00qkb-0"
})(["margin-bottom:1rem;margin-top:2rem;margin-right:auto;margin-left:auto;"]);
const ContentForm = ({
  setClose,
  setUpdateContents,
  topicName
}) => {
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); //TODO konu ismi daha önce varsa uyarı ver ekle.

  const onBlur = () => {
    console.log('konu ismini araştır');
  };

  const onSubmit = values => {
    values = _objectSpread(_objectSpread({}, values), {}, {
      topicName
    });
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_6__["contentAsync"].request(values));
    setClose(false);
    setShow(false);
    setUpdateContents(true);
  };

  const handleClose = () => {
    setShow(false);
    setClose(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: () => handleClose(),
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, topicName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 mt-2 ml-n2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "i\xE7erik: ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 ml-sm-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "\u0130\xE7eri\u011Fi giriniz",
    name: "content",
    onBlur: onBlur,
    ref: register({
      required: true
    }),
    errors: errors
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "secondary",
    type: "button",
    onClick: () => handleClose()
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit"))));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/ContentForm/index.ts":
/*!******************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/ContentForm/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: ContentForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentForm */ "../../../libs/ui/src/lib/organisms/ContentForm/ContentForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentForm", function() { return _ContentForm__WEBPACK_IMPORTED_MODULE_0__["ContentForm"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/Navigation/Navigation.tsx":
/*!***********************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/Navigation/Navigation.tsx ***!
  \***********************************************************************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "../../../node_modules/react-icons/all.js");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _molecules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules */ "../../../libs/ui/src/lib/molecules/index.ts");
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");









const Navigation = () => {
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_4__["useAuthentication"])();
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  const [isNavCollapsed, setIsNavCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleClose = () => {
    setShow(false);
  };

  const handleOpen = () => {
    setShow(true);
    dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    });
    dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    });
  };

  const tokens = {
    accessToken: Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getAccessToken"])(),
    refreshToken: Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_8__["getRefreshToken"])()
  };

  const handleShow = () => {
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__["logoutAsync"].request(tokens));
    setShow(false);
    history.push('/');
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-sm bg-primary  navbar-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "custom-toggler navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbar",
    "aria-controls": "navbar",
    "aria-expanded": !isNavCollapsed,
    "aria-label": "Toggle navigation",
    onClick: handleNavCollapse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `${isNavCollapsed ? 'collapse' : ''} navbar-collapse`,
    id: "navbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "navbar-brand"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    exact: true,
    to: "/",
    className: "nav-link",
    onClick: () => dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    })
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/about",
    className: "nav-link",
    onClick: () => {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-link"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    to: "/contact",
    className: "nav-link",
    onClick: () => {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, "Contact Us")), isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    className: "nav-link",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaUserAlt"], null),
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "dropdown-item",
    to: "/profile",
    type: "button",
    onClick: () => {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, "Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"].Item, {
    type: "button",
    to: location.pathname,
    onClick: handleOpen
  }, "Logout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules__WEBPACK_IMPORTED_MODULE_7__["Popup"], {
    show: show,
    onHide: handleClose
  }, "Sistemden \xC7\u0131k\u0131yorsunuz Emin misiniz?", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules__WEBPACK_IMPORTED_MODULE_7__["PopupButton"], {
    variant: "secondary",
    onClick: handleClose
  }, "HAYIR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules__WEBPACK_IMPORTED_MODULE_7__["PopupButton"], {
    type: "submit",
    variant: "primary",
    onClick: handleShow
  }, "EVET"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NavDropdown"], {
    className: "nav-link",
    title: "Account",
    id: "basic-nav-dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "dropdown-item",
    to: "/register",
    onClick: () => {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "dropdown-item",
    to: "/login",
    onClick: () => {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, "Sign In"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_molecules__WEBPACK_IMPORTED_MODULE_7__["Search"], null))));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/Navigation/index.ts":
/*!*****************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/Navigation/index.ts ***!
  \*****************************************************************************************************/
/*! exports provided: Navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "../../../libs/ui/src/lib/organisms/Navigation/Navigation.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/TopicForm/TopicForm.tsx":
/*!*********************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/TopicForm/TopicForm.tsx ***!
  \*********************************************************************************************************/
/*! exports provided: TopicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return TopicForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms */ "../../../libs/ui/src/lib/atoms/index.ts");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");







const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "TopicForm__StyledRow",
  componentId: "n8o9zj-0"
})(["margin-bottom:1rem;margin-top:2rem;margin-right:auto;margin-left:auto;"]);
const TopicForm = ({
  setClose,
  setUpdateTopics
}) => {
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); //TODO konu ismi daha önce varsa uyarı ver ekle.

  const onBlur = () => {
    console.log('konu ismini araştır');
  };

  const onSubmit = values => {
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__["topicAsync"].request(values));
    setClose(false);
    setShow(false);
    setUpdateTopics(true);
  };

  const handleClose = () => {
    setShow(false);
    setClose(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: show,
    onHide: () => handleClose(),
    keyboard: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, null, "New Topic")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 mt-2 ml-n2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Konu ismi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 ml-sm-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    placeholder: "Konu ismi",
    name: "topicName",
    onBlur: onBlur,
    ref: register({
      required: true
    }),
    errors: errors
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "secondary",
    type: "button",
    onClick: () => handleClose()
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit"))));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/TopicForm/index.ts":
/*!****************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/TopicForm/index.ts ***!
  \****************************************************************************************************/
/*! exports provided: TopicForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopicForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopicForm */ "../../../libs/ui/src/lib/organisms/TopicForm/TopicForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return _TopicForm__WEBPACK_IMPORTED_MODULE_0__["TopicForm"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/UserForm/UserForm.tsx":
/*!*******************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/UserForm/UserForm.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return UserForm; });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../atoms/Button */ "../../../libs/ui/src/lib/atoms/Button/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _molecules_Popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/Popup */ "../../../libs/ui/src/lib/molecules/Popup/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");









const UserForm = ({
  setEditUserInfo,
  setInEditMode,
  userInfo
}) => {
  const {
    handleSubmit,
    register
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [logoutPopup, setLogoutPopup] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [successPopup, setSuccessPopup] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [changeEmail, setChangeEmail] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["useHistory"])();
  const {
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__["useTemporary"])();

  const onSubmit = values => {
    if (values.email !== (userInfo === null || userInfo === void 0 ? void 0 : userInfo.email)) {
      setChangeEmail(true);
    } else {
      setChangeEmail(false);
    }

    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_3__["updateAsync"].request(values));
  };

  if (isSuccessRequired !== null && !logoutPopup && !successPopup) {
    {
      changeEmail ? setLogoutPopup(true) : setSuccessPopup(true);
    }
  }

  if (isErrorRequired !== null) {
    setInEditMode(true);
  }

  const onChange = () => {
    dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    });
    setOpen(true);
  };

  const forceLogout = () => {
    setLogoutPopup(false);
    dispatch(Object(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_3__["updateLogout"])());
    dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    });
    history.push('/');
  };

  const successPopupFunction = () => {
    setSuccessPopup(false);
    dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    });
    setInEditMode(false);
    setEditUserInfo(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "username"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    name: "username",
    placeholder: userInfo === null || userInfo === void 0 ? void 0 : userInfo.username,
    readOnly: true
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "email"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    name: "email",
    type: "email",
    defaultValue: userInfo === null || userInfo === void 0 ? void 0 : userInfo.email,
    onChange: onChange,
    ref: register({
      required: true
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "name"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    name: "name",
    defaultValue: userInfo === null || userInfo === void 0 ? void 0 : userInfo.name,
    onChange: onChange,
    ref: register({
      required: false
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "lastname"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Last Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    name: "lastname",
    defaultValue: userInfo === null || userInfo === void 0 ? void 0 : userInfo.lastName,
    onChange: onChange,
    ref: register({
      required: false
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "age"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    name: "age",
    defaultValue: userInfo === null || userInfo === void 0 ? void 0 : userInfo.age,
    onChange: onChange,
    ref: register({
      required: false
    })
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "phoneNumber"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Phone Number"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Control, {
    name: "phoneNumber",
    defaultValue: userInfo === null || userInfo === void 0 ? void 0 : userInfo.phoneNumber,
    onChange: onChange,
    ref: register({
      required: false
    })
  }))), isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Alert"], {
    variant: "danger"
  }, isErrorRequired)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_atoms_Button__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    type: "submit",
    disabled: !open
  }, "Update")), logoutPopup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Popup__WEBPACK_IMPORTED_MODULE_7__["Popup"], {
    show: logoutPopup,
    onHide: forceLogout
  }, "E-mail'inizi de\u011Fi\u015Ftirdi\u011Finiz i\xE7in \xE7\u0131k\u0131\u015F yapt\u0131r\u0131l\u0131yorsunuz.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " L\xFCtfen yeni mailinize gelen aktivasyonu onaylay\u0131p tekrardan giri\u015F yap\u0131n\u0131z.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Popup__WEBPACK_IMPORTED_MODULE_7__["PopupButton"], {
    variant: "primary",
    onClick: forceLogout
  }, "Logout")) : null, successPopup ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Popup__WEBPACK_IMPORTED_MODULE_7__["Popup"], {
    show: successPopup,
    onHide: successPopupFunction
  }, isSuccessRequired, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_molecules_Popup__WEBPACK_IMPORTED_MODULE_7__["PopupButton"], {
    variant: "primary",
    onClick: successPopupFunction
  }, "Submit")) : null);
};

/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/UserForm/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/UserForm/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserForm */ "../../../libs/ui/src/lib/organisms/UserForm/UserForm.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return _UserForm__WEBPACK_IMPORTED_MODULE_0__["UserForm"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/UserInfo/UserInfo.tsx":
/*!*******************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/UserInfo/UserInfo.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var _atoms_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/Image */ "../../../libs/ui/src/lib/atoms/Image/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");









const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "UserInfo__StyledRow",
  componentId: "sc-1y7gqsy-0"
})(["margin-top:0.5rem;margin-bottom:0.5rem;"]);
const StyledRowContent = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(StyledRow).withConfig({
  displayName: "UserInfo__StyledRowContent",
  componentId: "sc-1y7gqsy-1"
})(["display:block;"]);
const StyledContainer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "UserInfo__StyledContainer",
  componentId: "sc-1y7gqsy-2"
})(["margin-top:1.5rem;@media (min-width:768px){padding-right:3.2rem;}"]);
const StyledStrong = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].strong.withConfig({
  displayName: "UserInfo__StyledStrong",
  componentId: "sc-1y7gqsy-3"
})(["margin-right:1rem;"]);
const StyledLink = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"]).withConfig({
  displayName: "UserInfo__StyledLink",
  componentId: "sc-1y7gqsy-4"
})(["color:black;"]);
const UserInfo = () => {
  const [detail, setDetail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [editUserInfo, setEditUserInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    userName
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["useParams"])();
  const [contentsInfo, setContentsInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [userContents, setUserContents] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.userInfo(userName).then(r => setDetail(r)).catch(e => console.error(e));
  }, [editUserInfo]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_2__["api"].auth.userContents(userName).then(r => setUserContents(r)).catch(e => console.error(e));
  }, [editUserInfo]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_atoms_Image__WEBPACK_IMPORTED_MODULE_3__["ProfileImage"], {
    width: "200",
    height: "200",
    alt: `${detail === null || detail === void 0 ? void 0 : detail.username} profile picture`,
    image: detail === null || detail === void 0 ? void 0 : detail.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-black-50"
  }, "User Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " UserName: ", detail === null || detail === void 0 ? void 0 : detail.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " Name:", detail === null || detail === void 0 ? void 0 : detail.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " SurName:", detail === null || detail === void 0 ? void 0 : detail.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " Age: ", detail === null || detail === void 0 ? void 0 : detail.age)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn  btn-success mt-2",
    disabled: contentsInfo,
    onClick: () => setContentsInfo(true)
  }, "Contents"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 6
  }, contentsInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn btn-danger mb-3",
    disabled: !contentsInfo,
    onClick: () => setContentsInfo(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTimes"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, userContents === null || userContents === void 0 ? void 0 : userContents.map((d, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: key,
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRowContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Konu Ad\u0131 : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: '/contents/' + d.topic.topicName
  }, d.topic.topicName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, " ", d.content, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Like: ", d.like, " Dislike: ", d.dislike), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Tarih : ", d.createDate.substring(0, 10)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Saat : ", d.createDate.substring(11, 16))))))) : null)));
};

/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/UserInfo/index.ts":
/*!***************************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/UserInfo/index.ts ***!
  \***************************************************************************************************/
/*! exports provided: UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInfo */ "../../../libs/ui/src/lib/organisms/UserInfo/UserInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _UserInfo__WEBPACK_IMPORTED_MODULE_0__["UserInfo"]; });



/***/ }),

/***/ "../../../libs/ui/src/lib/organisms/index.ts":
/*!******************************************************************************************!*\
  !*** C:/Users/MURATHAN/WebstormProjects/Couldnt-Find/libs/ui/src/lib/organisms/index.ts ***!
  \******************************************************************************************/
/*! exports provided: Navigation, UserForm, TopicForm, ContentForm, UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation */ "../../../libs/ui/src/lib/organisms/Navigation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return _Navigation__WEBPACK_IMPORTED_MODULE_0__["Navigation"]; });

/* harmony import */ var _UserForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserForm */ "../../../libs/ui/src/lib/organisms/UserForm/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserForm", function() { return _UserForm__WEBPACK_IMPORTED_MODULE_1__["UserForm"]; });

/* harmony import */ var _TopicForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopicForm */ "../../../libs/ui/src/lib/organisms/TopicForm/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopicForm", function() { return _TopicForm__WEBPACK_IMPORTED_MODULE_2__["TopicForm"]; });

/* harmony import */ var _ContentForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContentForm */ "../../../libs/ui/src/lib/organisms/ContentForm/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContentForm", function() { return _ContentForm__WEBPACK_IMPORTED_MODULE_3__["ContentForm"]; });

/* harmony import */ var _UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserInfo */ "../../../libs/ui/src/lib/organisms/UserInfo/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _UserInfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"]; });







/***/ }),

/***/ "./app/Routes.tsx":
/*!************************!*\
  !*** ./app/Routes.tsx ***!
  \************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./app/pages/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Routes = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], props, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["MainPage"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/about",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["About"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/contact",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["Contact"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/forgotpassword",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["ForgotPasswordPage"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/resetpassword",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["ResetPassword"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/profile",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["Profile"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/auth",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["OAuth2RedirectHandler"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/mailsuccess",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["MailSuccessPage"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    exact: true,
    path: "/mailerror",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["MailErrorPage"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/login",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["Login"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/register",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["Register"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/contents/:topicName",
    component: _pages__WEBPACK_IMPORTED_MODULE_2__["Contents"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/user/:userName",
    component: _internship_ui__WEBPACK_IMPORTED_MODULE_3__["UserInfo"]
  }));
};

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _internship_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/config */ "../../../libs/config/src/index.ts");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes */ "./app/Routes.tsx");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/integration/react */ "../../../node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var redux_persist_es_persistStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist/es/persistStore */ "../../../node_modules/redux-persist/es/persistStore.js");






 // ... normal setup, create store and persistor, import components etc.

const store = Object(_internship_config__WEBPACK_IMPORTED_MODULE_3__["configureStore"])();
const App = () => {
  const persistor = Object(redux_persist_es_persistStore__WEBPACK_IMPORTED_MODULE_6__["default"])(store);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_5__["PersistGate"], {
    persistor: persistor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_4__["Routes"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Navigation"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/pages/About.tsx":
/*!*****************************!*\
  !*** ./app/pages/About.tsx ***!
  \*****************************/
/*! exports provided: About */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "About", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");


const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "About Page"));
};

/***/ }),

/***/ "./app/pages/Contact.tsx":
/*!*******************************!*\
  !*** ./app/pages/Contact.tsx ***!
  \*******************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");


const Contact = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contact Page"));
};

/***/ }),

/***/ "./app/pages/Contents.tsx":
/*!********************************!*\
  !*** ./app/pages/Contents.tsx ***!
  \********************************/
/*! exports provided: Contents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contents", function() { return Contents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");










const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "Contents__StyledRow",
  componentId: "trcs9c-0"
})(["margin-top:0.5rem;margin-bottom:0.5rem;"]);
const StyledRowContent = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(StyledRow).withConfig({
  displayName: "Contents__StyledRowContent",
  componentId: "trcs9c-1"
})(["display:block;"]);
const StyledNewButton = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(_internship_ui__WEBPACK_IMPORTED_MODULE_5__["Button"]).withConfig({
  displayName: "Contents__StyledNewButton",
  componentId: "trcs9c-2"
})(["margin-left:auto;background-color:blueviolet;"]);
const StyledContainer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "Contents__StyledContainer",
  componentId: "trcs9c-3"
})(["margin-top:1.5rem;@media (min-width:768px){padding-right:3.2rem;}"]);
const StyledStrong = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].strong.withConfig({
  displayName: "Contents__StyledStrong",
  componentId: "trcs9c-4"
})(["margin-right:1rem;"]);
const StyledLink = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_7__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"]).withConfig({
  displayName: "Contents__StyledLink",
  componentId: "trcs9c-5"
})(["color:black;"]);
const Contents = () => {
  const {
    topicName
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useParams"])();
  const [allContent, setAllContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [updateContent, setUpdateContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [newContent, setNewContent] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__["useAuthentication"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__["api"].auth.getContent(topicName).then(r => {
      setAllContent(r);
    }).catch(e => console.error(e));
  }, [updateContent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, topicName), isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNewButton, {
    onClick: () => setNewContent(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"]
  }))) : null, newContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_5__["ContentForm"], {
    setClose: setNewContent,
    setUpdateContents: setUpdateContent,
    topicName: topicName
  }) : null, allContent === null || allContent === void 0 ? void 0 : allContent.map((d, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: key,
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRowContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, d.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Kullan\u0131c\u0131: "), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: '/user/' + d.topic.user.username
  }, d.topic.user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Tarih: "), " ", d.createDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))));
};

/***/ }),

/***/ "./app/pages/ForgotPassword/ForgotPasswordPage.tsx":
/*!*********************************************************!*\
  !*** ./app/pages/ForgotPassword/ForgotPasswordPage.tsx ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");









const StyledApp = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ForgotPasswordPage__StyledApp",
  componentId: "sc-1jbcyxi-0"
})(["font-family:sans-serif;text-align:center;"]);
const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"]).withConfig({
  displayName: "ForgotPasswordPage__StyledRow",
  componentId: "sc-1jbcyxi-1"
})(["margin-bottom:1rem;"]);
const H4 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "ForgotPasswordPage__H4",
  componentId: "sc-1jbcyxi-2"
})(["margin-top:2rem;margin-bottom:2rem;"]);
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "ForgotPasswordPage__Container",
  componentId: "sc-1jbcyxi-3"
})(["display:inline-block;padding:4.5rem;"]);
const ForgotPasswordPage = () => {
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_7__["useAuthentication"])();
  const {
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_7__["useTemporary"])();

  const onChange = event => {
    const {
      name
    } = event.target;

    if (name === 'email') {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
    }
  };

  const onSubmit = values => {
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__["forgotpasswordAsync"].request(values));

    if (isErrorRequired) {
      history.push('/');
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H4, null, "Forgot Password ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "The mail address of the account to be recovered")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_8__["Input"], {
    placeholder: "Enter e-mail",
    type: "email",
    name: "email",
    onChange: onChange,
    ref: register({
      required: true
    }),
    errors: errors
  }))), isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert alert-danger"
  }, isErrorRequired) : null, isSuccessRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "alert alert-success"
  }, isSuccessRequired) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    variant: "outline-primary",
    type: "submit",
    disable: isSuccessRequired
  }, "New Password Submit"))));
};

/***/ }),

/***/ "./app/pages/ForgotPassword/ResetPassword.tsx":
/*!****************************************************!*\
  !*** ./app/pages/ForgotPassword/ResetPassword.tsx ***!
  \****************************************************/
/*! exports provided: ResetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return ResetPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const StyledApp = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ResetPassword__StyledApp",
  componentId: "sc-1ddqcex-0"
})(["font-family:sans-serif;text-align:center;"]);
const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Row"]).withConfig({
  displayName: "ResetPassword__StyledRow",
  componentId: "sc-1ddqcex-1"
})(["margin-bottom:1rem;"]);
const H4 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h4.withConfig({
  displayName: "ResetPassword__H4",
  componentId: "sc-1ddqcex-2"
})(["margin-top:2rem;margin-bottom:2rem;"]);
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ResetPassword__Container",
  componentId: "sc-1ddqcex-3"
})(["display:inline-block;padding:4.5rem;"]);
const ResetPassword = props => {
  const resttoken = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_7__["getUrlParameter"])('token', props.location.search);
  const error = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_7__["getUrlParameter"])('error', props.location.search);
  const {
    handleSubmit,
    register,
    getValues,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  const [passworderror, setPasswordError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [enable, setEnable] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_8__["useTemporary"])();

  const onSubmit = values => {
    values = _objectSpread(_objectSpread({}, values), {}, {
      token: resttoken
    });
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_6__["resetpasswordAsync"].request(values));
    if (isErrorRequired) history.push('/login');else {
      setEnable(false);
    }
  };

  const onChange = () => {
    const firstPassword = getValues()['newPassword'];
    const secondPassword = getValues()['newPasswordConfirmation'];

    if (firstPassword !== secondPassword) {
      setPasswordError('Şifre Eşleşmedi');
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      setEnable(true);
    } else {
      setPasswordError('');
      setEnable(false);
    }
  };

  if (resttoken) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: handleSubmit(onSubmit)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H4, null, "Reset Password ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "New Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_9__["Input"], {
      className: passworderror && 'is-invalid',
      type: "password",
      name: "newPassword",
      onChange: onChange,
      ref: register({
        required: true,
        maxLength: {
          value: 20,
          message: 'Password cannot exceed 20 characters'
        },
        minLength: {
          value: 6,
          message: 'Password cannot be less than 6 characters'
        },
        pattern: {
          value: /^[a-zA-Z0-9]+$/,
          message: 'Your password can contain the characters A-Z, a-z, and 0-9.'
        },
        validate: input => /^(?=.{6,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input) ? null : 'Your password must contain numbers, uppercase and lowercase letters.'
      }),
      errors: errors
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback"
    }, passworderror))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Repeate Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "col-8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_9__["Input"], {
      className: passworderror && 'is-invalid',
      type: "password",
      name: "newPasswordConfirmation",
      onChange: onChange,
      ref: register({
        required: true,
        maxLength: {
          value: 20,
          message: 'Password cannot exceed 20 characters'
        },
        minLength: {
          value: 6,
          message: 'Password cannot be less than 6 characters'
        },
        pattern: {
          value: /^[a-zA-Z0-9]+$/,
          message: 'Your password can contain the characters A-Z, a-z, and 0-9.'
        },
        validate: input => /^(?=.{6,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input) ? null : 'Your password must contain numbers, uppercase and lowercase letters.'
      }),
      errors: errors
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "invalid-feedback"
    }, passworderror))), isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alert alert-danger"
    }, isErrorRequired) : null, isSuccessRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "alert alert-success"
    }, isSuccessRequired) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      variant: "outline-primary",
      type: "submit",
      disabled: enable
    }, "Confirm Password"))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: {
        pathname: '/',
        state: {
          from: props.location,
          error: error
        }
      }
    });
  }
};

/***/ }),

/***/ "./app/pages/ForgotPassword/index.ts":
/*!*******************************************!*\
  !*** ./app/pages/ForgotPassword/index.ts ***!
  \*******************************************/
/*! exports provided: ForgotPasswordPage, ResetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForgotPasswordPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPasswordPage */ "./app/pages/ForgotPassword/ForgotPasswordPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return _ForgotPasswordPage__WEBPACK_IMPORTED_MODULE_0__["ForgotPasswordPage"]; });

/* harmony import */ var _ResetPassword__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetPassword */ "./app/pages/ForgotPassword/ResetPassword.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return _ResetPassword__WEBPACK_IMPORTED_MODULE_1__["ResetPassword"]; });




/***/ }),

/***/ "./app/pages/Login.tsx":
/*!*****************************!*\
  !*** ./app/pages/Login.tsx ***!
  \*****************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");











const StyledAnchorTag = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "Login__StyledAnchorTag",
  componentId: "sc-1qw0ei2-0"
})(["font-weight:400;font-size:16px;"]);
const StyledApp = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Login__StyledApp",
  componentId: "sc-1qw0ei2-1"
})(["font-family:sans-serif;text-align:center;"]);
const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"]).withConfig({
  displayName: "Login__StyledRow",
  componentId: "sc-1qw0ei2-2"
})(["margin-bottom:1rem;"]);
const H4 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h4.withConfig({
  displayName: "Login__H4",
  componentId: "sc-1qw0ei2-3"
})(["margin-top:2rem;margin-bottom:2rem;"]);
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Login__Container",
  componentId: "sc-1qw0ei2-4"
})(["display:inline-block;padding:4.5rem;"]);
const Login = () => {
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__["useForm"])();
  const {
    isCaptchaRequired,
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__["useTemporary"])();
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__["useAuthentication"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["useHistory"])();

  const onSubmit = values => {
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__["loginAsync"].request(values));
  };

  const onChange = event => {
    const {
      name
    } = event.target;

    if (name === 'username' || name === 'password') {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    });
  }, [isSuccessRequired]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    });

    if (isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H4, {
    className: "text text-center"
  }, "Enter your information to log into your account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-4 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-8 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "Enter username",
    type: "text",
    name: "username",
    onChange: onChange,
    ref: register({
      required: true
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-4 mt-2 ml-n2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-8 ml-sm-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "Enter password",
    type: "password",
    name: "password",
    onChange: onChange,
    ref: register({
      required: true
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-5   ml-n1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "rememberMe"
  }, " Remember me")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-3  ml-n5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    name: "rememberMe",
    onChange: onChange,
    ref: register({
      required: false
    })
  }))), isCaptchaRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Captcha"], {
    name: "captcha",
    ref: register({
      required: true
    })
  }))) : null, isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    variant: "danger"
  }, isErrorRequired), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
    type: "button",
    to: "/forgotpassword",
    onClick: () => dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    })
  }, "Forgot Password ?")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "mb-3 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAnchorTag, {
    className: "btn btn-outline-dark alert-dismissible",
    href: "http://localhost:8080/oauth2/authorize/google?redirect_uri=http://localhost:4200/auth"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faGoogle"],
    style: {
      marginRight: '10px'
    }
  }), " Log in with google"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    className: "ml-5 mr-sm-n0",
    variant: "outline-primary",
    type: "submit"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-5 ml-n2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "No account ?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__["Link"], {
    to: "/register"
  }, "Sign Up"))))));
};

/***/ }),

/***/ "./app/pages/MailActivation/MailErrorPage.tsx":
/*!****************************************************!*\
  !*** ./app/pages/MailActivation/MailErrorPage.tsx ***!
  \****************************************************/
/*! exports provided: MailErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailErrorPage", function() { return MailErrorPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");











const StyledIcon = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"]).withConfig({
  displayName: "MailErrorPage__StyledIcon",
  componentId: "sc-12zv7r2-0"
})(["color:red;margin-right:1rem;"]);
const StyledDiv = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "MailErrorPage__StyledDiv",
  componentId: "sc-12zv7r2-1"
})(["text-align:center;margin-top:1rem;"]);
const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"]).withConfig({
  displayName: "MailErrorPage__StyledRow",
  componentId: "sc-12zv7r2-2"
})(["flex-wrap:wrap;display:flex;text-align-last:center;margin-top:2rem;justify-content:center;"]);
const MailErrorPage = () => {
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])();
  const {
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_8__["useTemporary"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  const onSubmit = value => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_6__["api"].auth.sendActivation(value.email).then(r => console.log(r + ' deneme')).catch(e => console.error(e));
  };

  const onChange = event => {
    const {
      name
    } = event.target;

    if (name === 'email') {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-danger mt-5",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "alert-heading text-center"
  }, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFrown"]
  }), "HATA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-center"
  }, "Maillinizi do\u011Frulamakta zorlan\u0131yorsunuz.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 text-center "
  }, "Tekrardan aktivasyon kodu almak i\xE7in l\xFCtfen mailinizi giriniz."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    placeholder: "Enter your e-mail",
    type: "email",
    name: "email",
    onChange: onChange,
    ref: register({
      required: true
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outline-primary",
    type: "submit"
  }, "Aktivasyon Kodu \u0130ste")), isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    variant: "danger"
  }, isErrorRequired), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    type: "button",
    to: "/register",
    onClick: () => dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], null, "Kay\u0131t Ol"))) : null, isSuccessRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledDiv, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    variant: "success"
  }, isSuccessRequired), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
    type: "button",
    to: "/login",
    onClick: () => dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_7__["Button"], null, "Giri\u015F Yap"))) : null)));
};

/***/ }),

/***/ "./app/pages/MailActivation/MailSuccessPage.tsx":
/*!******************************************************!*\
  !*** ./app/pages/MailActivation/MailSuccessPage.tsx ***!
  \******************************************************/
/*! exports provided: MailSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSuccessPage", function() { return MailSuccessPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");





const StyledIcon = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"]).withConfig({
  displayName: "MailSuccessPage__StyledIcon",
  componentId: "sc-1rfsbbt-0"
})(["color:green;margin-right:1rem;margin-left:1rem;"]);
const MailSuccessPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert-success mt-5 text-center",
    role: "alert"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCheck"]
  }), "Mailiniz Ba\u015Far\u0131 ile Aktive edilmi\u015Ftir.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/login",
    className: "alert-link"
  }, ' ', "Giri\u015F yapmak i\xE7in t\u0131klay\u0131n\u0131z.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronCircleRight"]
  })));
};

/***/ }),

/***/ "./app/pages/MailActivation/index.ts":
/*!*******************************************!*\
  !*** ./app/pages/MailActivation/index.ts ***!
  \*******************************************/
/*! exports provided: MailSuccessPage, MailErrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MailSuccessPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MailSuccessPage */ "./app/pages/MailActivation/MailSuccessPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailSuccessPage", function() { return _MailSuccessPage__WEBPACK_IMPORTED_MODULE_0__["MailSuccessPage"]; });

/* harmony import */ var _MailErrorPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MailErrorPage */ "./app/pages/MailActivation/MailErrorPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailErrorPage", function() { return _MailErrorPage__WEBPACK_IMPORTED_MODULE_1__["MailErrorPage"]; });




/***/ }),

/***/ "./app/pages/MainPage.tsx":
/*!********************************!*\
  !*** ./app/pages/MainPage.tsx ***!
  \********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");









const StyledIcon = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"]).withConfig({
  displayName: "MainPage__StyledIcon",
  componentId: "sc-1s8aej3-0"
})([""]);
const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "MainPage__StyledRow",
  componentId: "sc-1s8aej3-1"
})(["margin-top:0.5rem;margin-bottom:0.5rem;"]);
const StyledRowContent = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(StyledRow).withConfig({
  displayName: "MainPage__StyledRowContent",
  componentId: "sc-1s8aej3-2"
})(["display:block;"]);
const StyledNewButton = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_internship_ui__WEBPACK_IMPORTED_MODULE_6__["Button"]).withConfig({
  displayName: "MainPage__StyledNewButton",
  componentId: "sc-1s8aej3-3"
})(["margin-left:auto;background-color:blueviolet;"]);
const StyledContainer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "MainPage__StyledContainer",
  componentId: "sc-1s8aej3-4"
})(["margin-top:1.5rem;@media (min-width:768px){padding-right:3.2rem;}"]);
const StyledStrong = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].strong.withConfig({
  displayName: "MainPage__StyledStrong",
  componentId: "sc-1s8aej3-5"
})(["margin-right:1rem;"]);
const StyledLink = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"]).withConfig({
  displayName: "MainPage__StyledLink",
  componentId: "sc-1s8aej3-6"
})(["color:black;"]);
const MainPage = () => {
  const [newTopic, setNewTopic] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_5__["useAuthentication"])();
  const [allTopics, setAllTopics] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [updateTopics, setUpdateTopics] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_7__["api"].auth.getTopic().then(r => setAllTopics(r)).catch(e => console.error(e));
    setUpdateTopics(false);
  }, [updateTopics]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, isAuthenticated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNewButton, {
    onClick: () => setNewTopic(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledIcon, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlus"]
  }))) : null, newTopic ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_6__["TopicForm"], {
    setClose: setNewTopic,
    setUpdateTopics: setUpdateTopics
  }) : null, allTopics === null || allTopics === void 0 ? void 0 : allTopics.map((d, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: key,
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRowContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Konu Ad\u0131:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: '/contents/' + d.topicName
  }, d.topicName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "\u0130\xE7erik say\u0131s\u0131:"), " ", d.contentNumber, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Kullan\u0131c\u0131:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: '/user/' + d.user.username
  }, d.user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Tarih:"), " ", d.createDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null)))));
};

/***/ }),

/***/ "./app/pages/OAuth2RedirectHandler.tsx":
/*!*********************************************!*\
  !*** ./app/pages/OAuth2RedirectHandler.tsx ***!
  \*********************************************/
/*! exports provided: OAuth2RedirectHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAuth2RedirectHandler", function() { return OAuth2RedirectHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _internship_shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internship/shared/types */ "../../../libs/shared/types/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");






const OAuth2RedirectHandler = props => {
  const refreshToken = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_5__["getUrlParameter"])('refreshToken', props.location.search);
  const accessToken = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_5__["getUrlParameter"])('accessToken', props.location.search);
  const error = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_5__["getUrlParameter"])('error', props.location.search);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  if (accessToken) {
    localStorage.setItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_1__["ACCESS_TOKEN"], accessToken);
    localStorage.setItem(_internship_shared_types__WEBPACK_IMPORTED_MODULE_1__["REFRESH_TOKEN"], refreshToken);
    dispatch(Object(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_3__["googleLogin"])());
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: {
        pathname: '/',
        state: {
          from: props.location
        }
      }
    });
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: {
        pathname: '/login',
        state: {
          from: props.location,
          error: error
        }
      }
    });
  }
};

/***/ }),

/***/ "./app/pages/Profile.tsx":
/*!*******************************!*\
  !*** ./app/pages/Profile.tsx ***!
  \*******************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _profilePageComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilePageComponents */ "./app/pages/profilePageComponents/index.ts");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");










const Profile = () => {
  const [inEditMode, setInEditMode] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inChangePassword, setInChangePassword] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [editUserInfo, setEditUserInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sessionInfo, setSessionInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [contentsInfo, setContentsInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [detail, setDetail] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const [myContents, setMyContents] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_5__["useAuthentication"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["useHistory"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__["api"].auth.userDetail().then(r => setDetail(r)).catch(e => console.error(e));
    setEditUserInfo(false);
  }, [editUserInfo]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__["api"].auth.myContents().then(r => setMyContents(r)).catch(e => console.error(e));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isAuthenticated) {
      history.push('/');
    }
  }, [isAuthenticated]);

  const changeValues = () => {
    setInEditMode(true);
    setInChangePassword(false);
    setSessionInfo(false);
    setContentsInfo(false);
    dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    });
    dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    });
  };

  const editSessionInfo = () => {
    setSessionInfo(true);
    setInChangePassword(false);
    setInEditMode(false);
    setContentsInfo(false);
  };

  const editContentsInfo = () => {
    setContentsInfo(true);
    setSessionInfo(false);
    setInChangePassword(false);
    setInEditMode(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Profile Page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_4__["ProfileImage"], {
    width: "200",
    height: "200",
    alt: `${detail === null || detail === void 0 ? void 0 : detail.username} profile picture`,
    image: detail === null || detail === void 0 ? void 0 : detail.image
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    className: "text-black-50"
  }, "User Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " UserName: ", detail === null || detail === void 0 ? void 0 : detail.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " Name:", detail === null || detail === void 0 ? void 0 : detail.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " SurName:", detail === null || detail === void 0 ? void 0 : detail.lastName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " Age: ", detail === null || detail === void 0 ? void 0 : detail.age)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4"
  }, " Phone: ", detail === null || detail === void 0 ? void 0 : detail.phoneNumber)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "text-black-50 ml-4 "
  }, " Email: ", detail === null || detail === void 0 ? void 0 : detail.email)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn  btn-success mt-2",
    disabled: inEditMode,
    onClick: changeValues
  }, "Edit Profile"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn  btn-success mt-2",
    disabled: inChangePassword,
    onClick: () => {
      setInChangePassword(true);
      setInEditMode(false);
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
      setSessionInfo(false);
    }
  }, "Change Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn  btn-success mt-2",
    disabled: sessionInfo,
    onClick: editSessionInfo
  }, "Session Info"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn  btn-success mt-2",
    disabled: contentsInfo,
    onClick: editContentsInfo
  }, "My Contents"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 6
  }, inEditMode && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-danger",
    disabled: !inEditMode,
    onClick: () => {
      setInEditMode(false);
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTimes"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profilePageComponents__WEBPACK_IMPORTED_MODULE_1__["EditProfile"], {
    setInEditMode: setInEditMode,
    setEditUserInfo: setEditUserInfo,
    userInfo: detail
  })), inChangePassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-danger",
    disabled: !inChangePassword,
    onClick: () => {
      setInChangePassword(false);
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      dispatch({
        type: '@temp/SUCCESS_REQUIRED',
        payload: null
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTimes"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profilePageComponents__WEBPACK_IMPORTED_MODULE_1__["ChangePassword"], null)), sessionInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-danger mb-3",
    disabled: !sessionInfo,
    onClick: () => setSessionInfo(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTimes"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profilePageComponents__WEBPACK_IMPORTED_MODULE_1__["EditSession"], null)) : null, contentsInfo ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "btn btn-danger mb-3",
    disabled: !contentsInfo,
    onClick: () => setContentsInfo(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faTimes"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_profilePageComponents__WEBPACK_IMPORTED_MODULE_1__["MyContents"], {
    myContents: myContents
  })) : null)));
};

/***/ }),

/***/ "./app/pages/Register.tsx":
/*!********************************!*\
  !*** ./app/pages/Register.tsx ***!
  \********************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");









const StyledApp = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Register__StyledApp",
  componentId: "sc-4z2d9c-0"
})(["font-family:sans-serif;text-align:center;"]);
const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Row"]).withConfig({
  displayName: "Register__StyledRow",
  componentId: "sc-4z2d9c-1"
})(["margin-bottom:1rem;"]);
const StyledP = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({
  displayName: "Register__StyledP",
  componentId: "sc-4z2d9c-2"
})(["color:#bf1650;"]);
const H4 = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].h4.withConfig({
  displayName: "Register__H4",
  componentId: "sc-4z2d9c-3"
})(["margin-top:2rem;margin-bottom:2rem;"]);
const Container = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "Register__Container",
  componentId: "sc-4z2d9c-4"
})(["display:inline-block;padding:4.5rem;"]);
const Register = () => {
  const {
    handleSubmit,
    register,
    errors
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();
  const {
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_0__["useTemporary"])();
  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
  const {
    isAuthenticated
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_0__["useAuthentication"])();
  const [show, setShow] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  const onSubmit = values => {
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_1__["registerAsync"].request(values));
  };

  const checkSubmit = () => {
    setShow(false);
    dispatch({
      type: '@temp/SUCCESS_REQUIRED',
      payload: null
    });
    history.push('/');
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    setShow(true);
  }, [isSuccessRequired]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    dispatch({
      type: '@temp/ERROR_REQUIRED',
      payload: null
    });

    if (isAuthenticated && !show) {
      history.push('/');
    }
  }, [isAuthenticated]);

  const onChange = event => {
    const {
      name
    } = event.target;

    if (name === 'username' || name === 'password') {
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledApp, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(H4, {
    className: "text text-center"
  }, "Enter your information to create an account."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-4 mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "User Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter username",
    type: "text",
    name: "username",
    onChange: onChange,
    ref: register({
      required: true
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-4 mt-2 ml-n3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "E-mail")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-8 ml-sm-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter email",
    type: "email",
    name: "email",
    onChange: onChange,
    ref: register({
      required: true
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-4 mt-2 ml-n1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-8 ml-sm-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Enter password",
    type: "password",
    name: "password",
    onChange: onChange,
    ref: register({
      required: true,
      maxLength: {
        value: 20,
        message: 'Password cannot exceed 20 characters'
      },
      minLength: {
        value: 6,
        message: 'Password cannot be less than 6 characters'
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: 'Your password can contain the characters A-Z, a-z, and 0-9.'
      },
      validate: input => /^(?=.{6,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input) ? null : 'Your password must contain numbers, uppercase and lowercase letters.'
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mr-auto"
  }, isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    variant: "danger"
  }, isErrorRequired) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "mb-3 mt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "outline-primary",
    type: "submit"
  }, "Register")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(StyledRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-5 ml-sm-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", null, "Already have an account.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/login"
  }, "Sign in"))), isSuccessRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
    show: show,
    onHide: checkSubmit
  }, isSuccessRequired, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["PopupButton"], {
    variant: "primary",
    onClick: checkSubmit
  }, "Submit")) : null)));
};

/***/ }),

/***/ "./app/pages/index.ts":
/*!****************************!*\
  !*** ./app/pages/index.ts ***!
  \****************************/
/*! exports provided: About, Contact, Login, MainPage, OAuth2RedirectHandler, Profile, Register, MailSuccessPage, MailErrorPage, ForgotPasswordPage, ResetPassword, Contents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./app/pages/About.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "About", function() { return _About__WEBPACK_IMPORTED_MODULE_0__["About"]; });

/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact */ "./app/pages/Contact.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return _Contact__WEBPACK_IMPORTED_MODULE_1__["Contact"]; });

/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login */ "./app/pages/Login.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _Login__WEBPACK_IMPORTED_MODULE_2__["Login"]; });

/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainPage */ "./app/pages/MainPage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return _MainPage__WEBPACK_IMPORTED_MODULE_3__["MainPage"]; });

/* harmony import */ var _OAuth2RedirectHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OAuth2RedirectHandler */ "./app/pages/OAuth2RedirectHandler.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OAuth2RedirectHandler", function() { return _OAuth2RedirectHandler__WEBPACK_IMPORTED_MODULE_4__["OAuth2RedirectHandler"]; });

/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Profile */ "./app/pages/Profile.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return _Profile__WEBPACK_IMPORTED_MODULE_5__["Profile"]; });

/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Register */ "./app/pages/Register.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return _Register__WEBPACK_IMPORTED_MODULE_6__["Register"]; });

/* harmony import */ var _MailActivation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MailActivation */ "./app/pages/MailActivation/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailSuccessPage", function() { return _MailActivation__WEBPACK_IMPORTED_MODULE_7__["MailSuccessPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MailErrorPage", function() { return _MailActivation__WEBPACK_IMPORTED_MODULE_7__["MailErrorPage"]; });

/* harmony import */ var _ForgotPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ForgotPassword */ "./app/pages/ForgotPassword/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return _ForgotPassword__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResetPassword", function() { return _ForgotPassword__WEBPACK_IMPORTED_MODULE_8__["ResetPassword"]; });

/* harmony import */ var _Contents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Contents */ "./app/pages/Contents.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Contents", function() { return _Contents__WEBPACK_IMPORTED_MODULE_9__["Contents"]; });












/***/ }),

/***/ "./app/pages/profilePageComponents/ChangePassword.tsx":
/*!************************************************************!*\
  !*** ./app/pages/profilePageComponents/ChangePassword.tsx ***!
  \************************************************************/
/*! exports provided: ChangePassword, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "../../../node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "../../../node_modules/react-redux/es/index.js");
/* harmony import */ var _internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internship/store/authentication */ "../../../libs/store/authentication/src/index.ts");
/* harmony import */ var _internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/shared/hooks */ "../../../libs/shared/hooks/src/index.ts");







const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    errors,
    getValues
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const [passworderror, setPasswordError] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    isErrorRequired,
    isSuccessRequired
  } = Object(_internship_shared_hooks__WEBPACK_IMPORTED_MODULE_6__["useTemporary"])();
  const [enable, setEnable] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const onSubmit = values => {
    dispatch(_internship_store_authentication__WEBPACK_IMPORTED_MODULE_5__["changePasswordAsync"].request(values));
  };

  const onChange = () => {
    const secondPassword = getValues()['newPassword'];
    const confirmationPassword = getValues()['newPasswordConfirmation'];

    if (secondPassword !== confirmationPassword) {
      setPasswordError('Şifre Eşleşmedi');
      dispatch({
        type: '@temp/ERROR_REQUIRED',
        payload: null
      });
      setEnable(true);
    } else {
      setPasswordError('');
      setEnable(false);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "Change Password")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"], {
    onSubmit: handleSubmit(onSubmit)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "oldPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Old Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "password",
    name: "oldPassword",
    placeholder: "Old Password",
    ref: register({
      required: true
    }),
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "newPassword"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "New Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: passworderror && 'is-invalid',
    type: "password",
    name: "newPassword",
    placeholder: "New Password",
    onChange: onChange,
    ref: register({
      required: true,
      maxLength: {
        value: 20,
        message: 'Password cannot exceed 20 characters'
      },
      minLength: {
        value: 6,
        message: 'Password cannot be less than 6 characters'
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: 'Your password can contain the characters A-Z, a-z, and 0-9.'
      },
      validate: input => /^(?=.{6,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input) ? null : 'Your password must contain numbers, uppercase and lowercase letters.'
    }),
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "invalid-feedback"
  }, passworderror))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"],
    controlId: "newPasswordConfirmation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Form"].Label, {
    column: true,
    sm: 2
  }, "Confirm Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Col"], {
    sm: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: passworderror && 'is-invalid',
    type: "password",
    name: "newPasswordConfirmation",
    placeholder: "Confirm Password",
    onChange: onChange,
    ref: register({
      required: true,
      maxLength: {
        value: 20,
        message: 'Password cannot exceed 20 characters'
      },
      minLength: {
        value: 6,
        message: 'Password cannot be less than 6 characters'
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: 'Your password can contain the characters A-Z, a-z, and 0-9.'
      },
      validate: input => /^(?=.{6,20}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/.test(input) ? null : 'Your password must contain numbers, uppercase and lowercase letters.'
    }),
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "invalid-feedback"
  }, passworderror))), isErrorRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Alert"], {
    variant: "danger"
  }, isErrorRequired) : null, isSuccessRequired ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Alert"], {
    variant: "success"
  }, isSuccessRequired) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], {
    className: "justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    disabled: enable
  }, "Update"))));
};
/* harmony default export */ __webpack_exports__["default"] = (ChangePassword);

/***/ }),

/***/ "./app/pages/profilePageComponents/EditProfile.tsx":
/*!*********************************************************!*\
  !*** ./app/pages/profilePageComponents/EditProfile.tsx ***!
  \*********************************************************/
/*! exports provided: EditProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfile", function() { return EditProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");



const EditProfile = ({
  setInEditMode,
  setEditUserInfo,
  userInfo
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Edit Profile")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_2__["UserForm"], {
    setEditUserInfo: setEditUserInfo,
    setInEditMode: setInEditMode,
    userInfo: userInfo
  }));
};

/***/ }),

/***/ "./app/pages/profilePageComponents/EditSession.tsx":
/*!*********************************************************!*\
  !*** ./app/pages/profilePageComponents/EditSession.tsx ***!
  \*********************************************************/
/*! exports provided: EditSession, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSession", function() { return EditSession; });
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _internship_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internship/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internship/shared/api */ "../../../libs/shared/api/src/index.ts");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "../../../node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _internship_shared_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internship/shared/utils */ "../../../libs/shared/utils/src/index.ts");







const EditSession = () => {
  const [detail, setDetail] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])();
  const [sessionInfo, setSessionInfo] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const [sameAccount, setSameAccount] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__["api"].auth.sessionDetail().then(r => {
      setDetail(r);
    }).catch(e => console.error(e));
  }, [sessionInfo]);

  const deleteSession = (refreshToken, oldaccessToken) => {
    if (refreshToken !== Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_6__["getRefreshToken"])()) {
      const accessToken = Object(_internship_shared_utils__WEBPACK_IMPORTED_MODULE_6__["getAccessToken"])();
      _internship_shared_api__WEBPACK_IMPORTED_MODULE_3__["api"].auth.deleteSession(`Bearer ${accessToken}`, refreshToken, oldaccessToken).then(() => {
        setSessionInfo(!sessionInfo);
      }).catch(e => console.error(e));
    } else {
      setSameAccount(true);
    }
  };

  const refreshInfo = () => {
    setSessionInfo(!sessionInfo);
    setSameAccount(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h5", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
    className: "text-black-50"
  }, "Session Info")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], null, detail === null || detail === void 0 ? void 0 : detail.map((d, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
    key: key,
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_0__["Row"], null, "Giri\u015F Yap\u0131lan Aray\xFCz: ", d.userAgent, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "expireDate: ", d.expireDate, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), "issueDate: ", d.issueDate), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "btn btn-danger my-2",
    onClick: () => deleteSession(d.refreshToken, d.accessToken)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"]
  }))))), sameAccount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["Popup"], {
    show: sameAccount,
    onHide: refreshInfo
  }, "Zaten haz\u0131rda giri\u015F yapt\u0131\u011F\u0131n\u0131z hesab\u0131 kald\u0131ramazs\u0131n\u0131z.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internship_ui__WEBPACK_IMPORTED_MODULE_1__["PopupButton"], {
    variant: "primary",
    onClick: refreshInfo
  }, "Submit")) : null)));
};
/* harmony default export */ __webpack_exports__["default"] = (EditSession);

/***/ }),

/***/ "./app/pages/profilePageComponents/MyContents.tsx":
/*!********************************************************!*\
  !*** ./app/pages/profilePageComponents/MyContents.tsx ***!
  \********************************************************/
/*! exports provided: MyContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyContents", function() { return MyContents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "../../../node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "../../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");




const StyledRow = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"]).withConfig({
  displayName: "MyContents__StyledRow",
  componentId: "xd1d09-0"
})(["margin-top:0.5rem;margin-bottom:0.5rem;"]);
const StyledRowContent = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(StyledRow).withConfig({
  displayName: "MyContents__StyledRowContent",
  componentId: "xd1d09-1"
})(["display:block;"]);
const StyledContainer = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"]).withConfig({
  displayName: "MyContents__StyledContainer",
  componentId: "xd1d09-2"
})(["margin-top:1.5rem;@media (min-width:768px){padding-right:3.2rem;}"]);
const StyledStrong = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].strong.withConfig({
  displayName: "MyContents__StyledStrong",
  componentId: "xd1d09-3"
})(["margin-right:1rem;"]);
const StyledLink = /*#__PURE__*/Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"]).withConfig({
  displayName: "MyContents__StyledLink",
  componentId: "xd1d09-4"
})(["color:black;"]);
const MyContents = ({
  myContents
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRow, null, myContents === null || myContents === void 0 ? void 0 : myContents.map((d, key) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: key,
    className: "ml-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledRowContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Konu Ad\u0131 :", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: '/contents/' + d.topic.topicName
  }, d.topic.topicName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, " ", d.content, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Like: ", d.like, " Dislike: ", d.dislike), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Tarih : ", ' ', d.createDate.substring(0, 10)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledStrong, null, "Saat : ", ' ', d.createDate.substring(11, 16)))))));
};

/***/ }),

/***/ "./app/pages/profilePageComponents/index.ts":
/*!**************************************************!*\
  !*** ./app/pages/profilePageComponents/index.ts ***!
  \**************************************************/
/*! exports provided: ChangePassword, EditProfile, EditSession, MyContents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword */ "./app/pages/profilePageComponents/ChangePassword.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return _ChangePassword__WEBPACK_IMPORTED_MODULE_0__["ChangePassword"]; });

/* harmony import */ var _EditProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfile */ "./app/pages/profilePageComponents/EditProfile.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditProfile", function() { return _EditProfile__WEBPACK_IMPORTED_MODULE_1__["EditProfile"]; });

/* harmony import */ var _EditSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditSession */ "./app/pages/profilePageComponents/EditSession.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditSession", function() { return _EditSession__WEBPACK_IMPORTED_MODULE_2__["EditSession"]; });

/* harmony import */ var _MyContents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MyContents */ "./app/pages/profilePageComponents/MyContents.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyContents", function() { return _MyContents__WEBPACK_IMPORTED_MODULE_3__["MyContents"]; });






/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "../../../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../../../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_4__["App"], null)), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MURATHAN\WebstormProjects\Couldnt-Find\apps\react\src\main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map