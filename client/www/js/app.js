/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _ngopenfb = __webpack_require__(1);

	var _ngopenfb2 = _interopRequireDefault(_ngopenfb);

	var _core = __webpack_require__(2);

	var _core2 = _interopRequireDefault(_core);

	var _common = __webpack_require__(6);

	var _common2 = _interopRequireDefault(_common);

	var _login = __webpack_require__(8);

	var _login2 = _interopRequireDefault(_login);

	var _profile = __webpack_require__(10);

	var _profile2 = _interopRequireDefault(_profile);

	var _friends = __webpack_require__(13);

	var _friends2 = _interopRequireDefault(_friends);

	var _activity = __webpack_require__(15);

	var _activity2 = _interopRequireDefault(_activity);

	var _gallery = __webpack_require__(17);

	var _gallery2 = _interopRequireDefault(_gallery);

	var _userProfile = __webpack_require__(19);

	var _userProfile2 = _interopRequireDefault(_userProfile);

	var _search = __webpack_require__(22);

	var _search2 = _interopRequireDefault(_search);

	var _rating = __webpack_require__(25);

	var _rating2 = _interopRequireDefault(_rating);

	var _cart = __webpack_require__(27);

	var _cart2 = _interopRequireDefault(_cart);

	var _about = __webpack_require__(30);

	var _about2 = _interopRequireDefault(_about);

	var _product = __webpack_require__(33);

	var _product2 = _interopRequireDefault(_product);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	angular.module('app', ['ionic', 'ionic-material', 'ionMdInput', 'ion-floating-menu', _ngopenfb2.default, _core2.default, _common2.default, _login2.default, _profile2.default, _friends2.default, _activity2.default, _gallery2.default, _userProfile2.default, _search2.default, _rating2.default, _cart2.default, _about2.default, _product2.default]).run(function ($window, ngFB) {
	    $window.openFB = openFB;
	    window.teste = "ete";
	    ngFB.init({ appId: '914923135308655' });
	    filepicker.setKey('AUxfOdq2QTCOI7WA9Uopwz');
	});

	var openFB = function () {

	    var loginURL = 'https://www.facebook.com/dialog/oauth',
	        logoutURL = 'https://www.facebook.com/logout.php',


	    // By default we store fbtoken in sessionStorage. This can be overridden in init()
	    tokenStore = window.sessionStorage,


	    // The Facebook App Id. Required. Set using init().
	    fbAppId,
	        context = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")),
	        baseURL = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + context,


	    // Default OAuth redirect URL. Can be overriden in init()
	    oauthRedirectURL = baseURL + '/oauthcallback.html',


	    // Default Cordova OAuth redirect URL. Can be overriden in init()
	    cordovaOAuthRedirectURL = "https://www.facebook.com/connect/login_success.html",


	    // Default Logout redirect URL. Can be overriden in init()
	    logoutRedirectURL = baseURL + '/logoutcallback.html',


	    // Because the OAuth login spans multiple processes, we need to keep the login callback function as a variable
	    // inside the module instead of keeping it local within the login function.
	    loginCallback,


	    // Indicates if the app is running inside Cordova
	    runningInCordova,


	    // Used in the exit event handler to identify if the login has already been processed elsewhere (in the oauthCallback function)
	    loginProcessed;

	    // MAKE SURE YOU INCLUDE <script src="cordova.js"></script> IN YOUR index.html, OTHERWISE runningInCordova will always by false.
	    // You don't need to (and should not) add the actual cordova.js file to your file system: it will be added automatically
	    // by the Cordova build process
	    document.addEventListener("deviceready", function () {
	        runningInCordova = true;
	    }, false);

	    /**
	     * Initialize the OpenFB module. You must use this function and initialize the module with an appId before you can
	     * use any other function.
	     * @param params - init paramters
	     *  appId: (Required) The id of the Facebook app,
	     *  tokenStore: (optional) The store used to save the Facebook token. If not provided, we use sessionStorage.
	     *  loginURL: (optional) The OAuth login URL. Defaults to https://www.facebook.com/dialog/oauth.
	     *  logoutURL: (optional) The logout URL. Defaults to https://www.facebook.com/logout.php.
	     *  oauthRedirectURL: (optional) The OAuth redirect URL. Defaults to [baseURL]/oauthcallback.html.
	     *  logoutRedirectURL: (optional) The logout redirect URL. Defaults to [baseURL]/logoutcallback.html.
	     *  accessToken: (optional) An already authenticated access token.
	     */
	    function init(params) {

	        if (params.appId) {
	            fbAppId = params.appId;
	        } else {
	            throw 'appId parameter not set in init()';
	        }

	        if (params.tokenStore) {
	            tokenStore = params.tokenStore;
	        }

	        if (params.accessToken) {
	            tokenStore.fbAccessToken = params.accessToken;
	        }

	        loginURL = params.loginURL || loginURL;
	        logoutURL = params.logoutURL || logoutURL;
	        oauthRedirectURL = params.oauthRedirectURL || oauthRedirectURL;
	        cordovaOAuthRedirectURL = params.cordovaOAuthRedirectURL || cordovaOAuthRedirectURL;
	        logoutRedirectURL = params.logoutRedirectURL || logoutRedirectURL;
	    }

	    /**
	     * Checks if the user has logged in with openFB and currently has a session api token.
	     * @param callback the function that receives the loginstatus
	     */
	    function getLoginStatus(callback) {
	        var token = tokenStore.fbAccessToken,
	            loginStatus = {};
	        if (token) {
	            loginStatus.status = 'connected';
	            loginStatus.authResponse = { accessToken: token };
	        } else {
	            loginStatus.status = 'unknown';
	        }
	        if (callback) callback(loginStatus);
	    }

	    /**
	     * Login to Facebook using OAuth. If running in a Browser, the OAuth workflow happens in a a popup window.
	     * If running in Cordova container, it happens using the In-App Browser. Don't forget to install the In-App Browser
	     * plugin in your Cordova project: cordova plugins add org.apache.cordova.inappbrowser.
	     *
	     * @param callback - Callback function to invoke when the login process succeeds
	     * @param options - options.scope: The set of Facebook permissions requested
	     * @returns {*}
	     */
	    function login(callback, options) {

	        var loginWindow,
	            startTime,
	            scope = '',
	            redirectURL = runningInCordova ? cordovaOAuthRedirectURL : oauthRedirectURL;

	        if (!fbAppId) {
	            return callback({ status: 'unknown', error: 'Facebook App Id not set.' });
	        }

	        // Inappbrowser load start handler: Used when running in Cordova only
	        function loginWindow_loadStartHandler(event) {
	            var url = event.url;
	            if (url.indexOf("access_token=") > 0 || url.indexOf("error=") > 0) {
	                // When we get the access token fast, the login window (inappbrowser) is still opening with animation
	                // in the Cordova app, and trying to close it while it's animating generates an exception. Wait a little...
	                var timeout = 600 - (new Date().getTime() - startTime);
	                setTimeout(function () {
	                    loginWindow.close();
	                }, timeout > 0 ? timeout : 0);
	                oauthCallback(url);
	            }
	        }

	        // Inappbrowser exit handler: Used when running in Cordova only
	        function loginWindow_exitHandler() {
	            console.log('exit and remove listeners');
	            // Handle the situation where the user closes the login window manually before completing the login process
	            if (loginCallback && !loginProcessed) loginCallback({ status: 'user_cancelled' });
	            loginWindow.removeEventListener('loadstop', loginWindow_loadStopHandler);
	            loginWindow.removeEventListener('exit', loginWindow_exitHandler);
	            loginWindow = null;
	            console.log('done removing listeners');
	        }

	        if (options && options.scope) {
	            scope = options.scope;
	        }

	        loginCallback = callback;
	        loginProcessed = false;

	        startTime = new Date().getTime();
	        loginWindow = window.open(loginURL + '?client_id=' + fbAppId + '&redirect_uri=' + redirectURL + '&response_type=token&scope=' + scope, '_blank', 'location=no,clearcache=yes');

	        // If the app is running in Cordova, listen to URL changes in the InAppBrowser until we get a URL with an access_token or an error
	        if (runningInCordova) {
	            loginWindow.addEventListener('loadstart', loginWindow_loadStartHandler);
	            loginWindow.addEventListener('exit', loginWindow_exitHandler);
	        }
	        // Note: if the app is running in the browser the loginWindow dialog will call back by invoking the
	        // oauthCallback() function. See oauthcallback.html for details.
	    }

	    /**
	     * Called either by oauthcallback.html (when the app is running the browser) or by the loginWindow loadstart event
	     * handler defined in the login() function (when the app is running in the Cordova/PhoneGap container).
	     * @param url - The oautchRedictURL called by Facebook with the access_token in the querystring at the ned of the
	     * OAuth workflow.
	     */
	    function oauthCallback(url) {
	        // Parse the OAuth data received from Facebook
	        var queryString, obj;

	        loginProcessed = true;
	        if (url.indexOf("access_token=") > 0) {
	            queryString = url.substr(url.indexOf('#') + 1);
	            obj = parseQueryString(queryString);
	            tokenStore.fbAccessToken = obj['access_token'];
	            if (loginCallback) loginCallback({ status: 'connected', authResponse: { accessToken: obj['access_token'] } });
	        } else if (url.indexOf("error=") > 0) {
	            queryString = url.substring(url.indexOf('?') + 1, url.indexOf('#'));
	            obj = parseQueryString(queryString);
	            if (loginCallback) loginCallback({ status: 'not_authorized', error: obj.error });
	        } else {
	            if (loginCallback) loginCallback({ status: 'not_authorized' });
	        }
	    }

	    /**
	     * Logout from Facebook, and remove the token.
	     * IMPORTANT: For the Facebook logout to work, the logoutRedirectURL must be on the domain specified in "Site URL" in your Facebook App Settings
	     *
	     */
	    function logout(callback) {
	        var logoutWindow,
	            token = tokenStore.fbAccessToken;

	        /* Remove token. Will fail silently if does not exist */
	        tokenStore.removeItem('fbtoken');

	        if (token) {
	            logoutWindow = window.open(logoutURL + '?access_token=' + token + '&next=' + logoutRedirectURL, '_blank', 'location=no,clearcache=yes');
	            if (runningInCordova) {
	                setTimeout(function () {
	                    logoutWindow.close();
	                }, 700);
	            }
	        }

	        if (callback) {
	            callback();
	        }
	    }

	    /**
	     * Lets you make any Facebook Graph API request.
	     * @param obj - Request configuration object. Can include:
	     *  method:  HTTP method: GET, POST, etc. Optional - Default is 'GET'
	     *  path:    path in the Facebook graph: /me, /me.friends, etc. - Required
	     *  params:  queryString parameters as a map - Optional
	     *  success: callback function when operation succeeds - Optional
	     *  error:   callback function when operation fails - Optional
	     */
	    function api(obj) {

	        var method = obj.method || 'GET',
	            params = obj.params || {},
	            xhr = new XMLHttpRequest(),
	            url;

	        params['access_token'] = tokenStore.fbAccessToken;

	        url = 'https://graph.facebook.com' + obj.path + '?' + toQueryString(params);

	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    if (obj.success) obj.success(JSON.parse(xhr.responseText));
	                } else {
	                    var error = xhr.responseText ? JSON.parse(xhr.responseText).error : { message: 'An error has occurred' };
	                    if (obj.error) obj.error(error);
	                }
	            }
	        };

	        xhr.open(method, url, true);
	        xhr.send();
	    }

	    /**
	     * Helper function to de-authorize the app
	     * @param success
	     * @param error
	     * @returns {*}
	     */
	    function revokePermissions(_success, error) {
	        return api({
	            method: 'DELETE',
	            path: '/me/permissions',
	            success: function success() {
	                _success();
	            },
	            error: error
	        });
	    }

	    function parseQueryString(queryString) {
	        var qs = decodeURIComponent(queryString),
	            obj = {},
	            params = qs.split('&');
	        params.forEach(function (param) {
	            var splitter = param.split('=');
	            obj[splitter[0]] = splitter[1];
	        });
	        return obj;
	    }

	    function toQueryString(obj) {
	        var parts = [];
	        for (var i in obj) {
	            if (obj.hasOwnProperty(i)) {
	                parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
	            }
	        }
	        return parts.join("&");
	    }

	    // The public API
	    return {
	        init: init,
	        login: login,
	        logout: logout,
	        revokePermissions: revokePermissions,
	        api: api,
	        oauthCallback: oauthCallback,
	        getLoginStatus: getLoginStatus
	    };
	}();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Angular wrapper for the OpenFB library
	 * Allows you to use OpenFB "the Angular way":
	 *  - As an Angular service instead of a global object
	 *  - Using promises instead of callbacks
	 * @author Christophe Coenraets @ccoenraets
	 * @version 0.5
	 */
	exports.default = angular.module('ngOpenFB', []).factory('ngFB', function ($q, $window) {

	    function init(params) {
	        return $window.openFB.init(params);
	    }

	    function login(options) {
	        var deferred = $q.defer();
	        $window.openFB.login(function (result) {
	            if (result.status === "connected") {
	                deferred.resolve(result);
	            } else {
	                deferred.reject(result);
	            }
	        }, options);
	        return deferred.promise;
	    }

	    function logout() {
	        var deferred = $q.defer();
	        $window.openFB.logout(function () {
	            deferred.resolve();
	        });
	        return deferred.promise;
	    }

	    function api(obj) {
	        var deferred = $q.defer();
	        obj.success = function (result) {
	            deferred.resolve(result);
	        };
	        obj.error = function (error) {
	            deferred.reject(error);
	        };
	        $window.openFB.api(obj);
	        return deferred.promise;
	    }

	    function revokePermissions() {
	        var deferred = $q.defer();
	        $window.openFB.revokePermissions(function () {
	            deferred.resolve();
	        }, function () {
	            deferred.reject();
	        });
	        return deferred.promise;
	    }

	    function getLoginStatus() {
	        var deferred = $q.defer();
	        $window.openFB.getLoginStatus(function (result) {
	            deferred.resolve(result);
	        });
	        return deferred.promise;
	    }

	    return {
	        init: init,
	        login: login,
	        logout: logout,
	        revokePermissions: revokePermissions,
	        api: api,
	        getLoginStatus: getLoginStatus
	    };
	}).name;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _app = __webpack_require__(3);

	var _app2 = _interopRequireDefault(_app);

	var _app3 = __webpack_require__(4);

	var _app4 = _interopRequireDefault(_app3);

	var _app5 = __webpack_require__(5);

	var _app6 = _interopRequireDefault(_app5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.core', []).controller('AppCtrl', _app2.default).run(_app4.default).constant("SERVER", {
	    URL: "http://localhost:3000/"
	}).config(_app6.default).name;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/*@NgInject*/
	function AppCtrl($scope, $ionicModal, $ionicPopover, $timeout, $state) {
	    // Form data for the login modal
	    $scope.loginData = {};
	    $scope.isExpanded = false;
	    $scope.hasHeaderFabLeft = false;
	    $scope.hasHeaderFabRight = false;
	    console.log($scope.appState);

	    //remover depois
	    $scope.showMenu = true;

	    //handle SendUp event
	    $scope.$on("SendUp", function (evt, data) {
	        $scope.showMenu = data;
	    });

	    var navIcons = document.getElementsByClassName('ion-navicon');
	    for (var i = 0; i < navIcons.length; i++) {
	        navIcons.addEventListener('click', function () {
	            this.classList.toggle('active');
	        });
	    }

	    ////////////////////////////////////////
	    // Layout Methods
	    ////////////////////////////////////////

	    $scope.hideNavBar = function () {
	        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
	    };

	    $scope.showNavBar = function () {
	        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
	    };

	    $scope.noHeader = function () {
	        var content = document.getElementsByTagName('ion-content');
	        for (var i = 0; i < content.length; i++) {
	            if (content[i].classList.contains('has-header')) {
	                content[i].classList.toggle('has-header');
	            }
	        }
	    };

	    $scope.setExpanded = function (bool) {
	        $scope.isExpanded = bool;
	    };

	    $scope.setHeaderFab = function (location) {
	        var hasHeaderFabLeft = false;
	        var hasHeaderFabRight = false;

	        switch (location) {
	            case 'left':
	                hasHeaderFabLeft = true;
	                break;
	            case 'right':
	                hasHeaderFabRight = true;
	                break;
	        }

	        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
	        $scope.hasHeaderFabRight = hasHeaderFabRight;
	    };

	    $scope.hasHeader = function () {
	        var content = document.getElementsByTagName('ion-content');
	        for (var i = 0; i < content.length; i++) {
	            if (!content[i].classList.contains('has-header')) {
	                content[i].classList.toggle('has-header');
	            }
	        }
	    };

	    $scope.hideHeader = function () {
	        $scope.hideNavBar();
	        $scope.noHeader();
	    };

	    $scope.showHeader = function () {
	        $scope.showNavBar();
	        $scope.hasHeader();
	    };

	    $scope.clearFabs = function () {
	        var fabs = document.getElementsByClassName('button-fab');
	        if (fabs.length && fabs.length > 1) {
	            fabs[0].remove();
	        }
	    };
	}

	exports.default = AppCtrl;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function run($ionicPlatform) {
	    $ionicPlatform.ready(function () {
	        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	        // for form inputs)
	        if (window.cordova && window.cordova.plugins.Keyboard) {
	            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	        }
	        if (window.StatusBar) {
	            // org.apache.cordova.statusbar required
	            StatusBar.styleDefault();
	        }
	    });
	}

	exports.default = run;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	    // // Turn off caching for demo simplicity's sake
	    $ionicConfigProvider.views.maxCache(0);

	    // // Turn off back button text
	    $ionicConfigProvider.backButton.previousTitleText(false);

	    $stateProvider.state('app', {
	        url: '/app',
	        abstract: true,
	        templateUrl: 'templates/menu.html',
	        controller: 'AppCtrl'
	    }).state('app.activity', {
	        url: '/activity',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/activity.html',
	                controller: 'ActivityCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.friends', {
	        url: '/friends',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/friends.html',
	                controller: 'FriendsCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.search', {
	        url: '/search',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/search.html',
	                controller: 'SearchCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.gallery', {
	        url: '/gallery',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/gallery.html',
	                controller: 'GalleryCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.login', {
	        url: '/login',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/login.html',
	                controller: 'LoginCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.profile', {
	        url: '/profile',
	        params: {
	            id: null
	        },
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/profile.html',
	                controller: 'ProfileCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.myprofile', {
	        url: '/myprofile',
	        params: {
	            id: null
	        },
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/profile.html',
	                controller: 'ProfileCtrl',
	                controllerAs: 'vm'
	            }
	        }
	    }).state('app.userprofile', {
	        url: '/user-profile',
	        params: {
	            id: null
	        },
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/userProfile.html',
	                controller: 'UserProfileCtrl',
	                controllerAs: 'vm'

	            }
	        }
	    }).state('app.rating', {
	        url: '/rating/:id',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/rating.html',
	                controller: 'RatingCtrl',
	                controllerAs: 'vm'

	            }
	        }
	    }).state('app.about', {
	        url: '/about',
	        params: {
	            id: null,
	            about: 'user'
	        },
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/about.html',
	                controller: 'AboutCtrl',
	                controllerAs: 'vm'

	            }
	        }
	    }).state('app.cart', {
	        url: '/cart',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/cart.html',
	                controller: 'CartCtrl',
	                controllerAs: 'vm'

	            }
	        }
	    }).state('app.breweryproducts', {
	        url: '/brewery-products',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/breweryProducts.html',
	                controller: 'BreweryProductsCtrl',
	                controllerAs: 'vm'

	            }
	        }
	    }).state('app.product', {
	        url: '/products',
	        views: {
	            'menuContent': {
	                templateUrl: 'templates/product.html',
	                controller: 'ProductCtrl',
	                controllerAs: 'vm'

	            }
	        }
	    });

	    // if none of the above states are matched, use this as the fallback
	    $urlRouterProvider.otherwise('/app/login');
	}

	exports.default = config;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _common = __webpack_require__(7);

	var _common2 = _interopRequireDefault(_common);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.common', []).service('commonSvc', _common2.default).name;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var commonSvc = function () {
	    /*@ngInject*/
	    function commonSvc($http, SERVER) {
	        _classCallCheck(this, commonSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	    }

	    _createClass(commonSvc, [{
	        key: 'getBrewery',
	        value: function getBrewery(id) {
	            return this.$http({
	                method: 'GET',
	                url: this.SERVER.URL + 'brewery/' + id
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'getBreweryByOwner',
	        value: function getBreweryByOwner() {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'getBreweryByOwner',
	                data: {
	                    profileId: localStorage.getItem('profileId')
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'addToCart',
	        value: function addToCart(product) {
	            product.profileId = localStorage.getItem('profileId');
	            console.log(product);
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'addCart',
	                data: product
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }]);

	    return commonSvc;
	}();

	exports.default = commonSvc;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _login = __webpack_require__(9);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.login', []).controller('LoginCtrl', _login2.default).name;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* @ngInject */
	function LoginCtrl($scope, $timeout, $stateParams, ionicMaterialInk, ngFB, $state, SERVER) {
	    var vm = this;
	    localStorage.setItem('appState', $state.current.name);
	    //emit SendUp event up
	    $scope.$emit("SendUp", false);

	    //public methods
	    vm.fbLogin = fbLogin;

	    activate();

	    function activate() {
	        loadMaterialEffects();
	    }

	    // FACEBOOK login
	    function fbLogin() {
	        $scope.$emit("SendUp", true);
	        ngFB.login({ scope: 'email, publish_actions' }).then(
	        // , user_friends , user_about_me, user_education_history, user_work_history, manage_pages, publish_pages, pages_show_list, 
	        function (response) {
	            if (response.status === 'connected') {
	                console.log('Facebook login succeeded', response);
	                localStorage.setItem('token', response.authResponse.accessToken);

	                $state.go('app.userprofile');
	            } else {
	                alert('Facebook login failed');
	            }
	        });
	    };

	    function loadMaterialEffects() {
	        $scope.$parent.clearFabs();
	        $timeout(function () {
	            $scope.$parent.hideHeader();
	        }, 0);
	        ionicMaterialInk.displayEffect();
	    }
	}

	exports.default = LoginCtrl;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _profile = __webpack_require__(11);

	var _profile2 = _interopRequireDefault(_profile);

	var _profile3 = __webpack_require__(12);

	var _profile4 = _interopRequireDefault(_profile3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.profile', []).controller('ProfileCtrl', _profile2.default).service('profileSvc', _profile4.default).name;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* @ngInject */
	var ProfileCtrl = function () {
	    function ProfileCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, $state, profileSvc, commonSvc) {
	        _classCallCheck(this, ProfileCtrl);

	        localStorage.setItem('appState', $state.current.name);

	        this.$stateParams = $stateParams;
	        this.$timeout = $timeout;
	        this.ionicMaterialMotion = ionicMaterialMotion;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.$state = $state;
	        console.log(this.$state.current.name);
	        this.$scope = $scope;
	        this.profileSvc = profileSvc;
	        this.commonSvc = commonSvc;

	        // Set Header
	        this.$scope.$parent.showHeader();
	        this.$scope.$parent.clearFabs();
	        this.$scope.isExpanded = false;
	        this.$scope.$parent.setExpanded(false);
	        this.$scope.$parent.setHeaderFab(false);

	        this.id = $stateParams.id;

	        this.activate();
	    }

	    _createClass(ProfileCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            this.loadBrewery();

	            // Set Ink
	            this.ionicMaterialInk.displayEffect();
	        }
	    }, {
	        key: 'loadBrewery',
	        value: function loadBrewery() {
	            var _this = this;

	            if (this.id) {
	                this.commonSvc.getBrewery(this.id).then(function (brewery) {
	                    _this.brewery = brewery;
	                    _this.loadBeers(_this.id);
	                });
	            } else {
	                this.commonSvc.getBreweryByOwner().then(function (brewery) {
	                    _this.brewery = brewery;
	                    _this.id = _this.brewery._id;
	                    _this.loadBeers(_this.id);
	                });
	            }
	        }
	    }, {
	        key: 'loadBeers',
	        value: function loadBeers(id) {
	            var _this2 = this;

	            this.profileSvc.getProducts(id).then(function (beers) {
	                _this2.beers = beers;

	                _this2.beers.forEach(function (o) {
	                    return o.quantity = 0;
	                });
	                // Set Motion
	                _this2.setMotion();
	            });
	        }
	    }, {
	        key: 'addToCart',
	        value: function addToCart(beer) {
	            if (beer.quantity > 0) {
	                this.commonSvc.addToCart(beer).then(function (response) {
	                    return console.log(response);
	                });
	            }
	        }
	    }, {
	        key: 'goCart',
	        value: function goCart() {
	            this.$state.go('app.cart');
	        }
	    }, {
	        key: 'goAbout',
	        value: function goAbout() {
	            this.$state.go('app.about', { about: 'brewery', id: this.brewery._id });
	        }
	    }, {
	        key: 'goNewProduct',
	        value: function goNewProduct() {
	            this.$state.go('app.product');
	        }
	    }, {
	        key: 'setMotion',
	        value: function setMotion() {
	            var _this3 = this;

	            this.$timeout(function () {
	                _this3.ionicMaterialMotion.slideUp({
	                    selector: '.slide-up'
	                });
	            }, 300);

	            this.$timeout(function () {
	                _this3.ionicMaterialMotion.fadeSlideInRight({
	                    startVelocity: 3000
	                });
	            }, 700);
	        }
	    }]);

	    return ProfileCtrl;
	}();

	exports.default = ProfileCtrl;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var profileSvc = function () {
	    /*@ngInject*/
	    function profileSvc($http, SERVER) {
	        _classCallCheck(this, profileSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	    }

	    _createClass(profileSvc, [{
	        key: 'getProducts',
	        value: function getProducts() {
	            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

	            return this.$http({
	                method: 'GET',
	                url: this.SERVER.URL + 'breweryProducts/' + id
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }]);

	    return profileSvc;
	}();

	exports.default = profileSvc;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _friends = __webpack_require__(14);

	var _friends2 = _interopRequireDefault(_friends);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.friends', []).controller('FriendsCtrl', _friends2.default).name;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* @ngInject */
	function FriendsCtrl($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, ngFB, $state) {
	    var vm = this;
	    localStorage.setItem('appState', $state.current.name);
	    vm.goCart = goCart;

	    activate();

	    function activate() {
	        // Set Ink
	        ionicMaterialInk.displayEffect();

	        loadFriends();
	    }

	    function goCart() {
	        console.log('go');
	        $state.go('profile');
	    }

	    function loadFriends() {
	        ngFB.api({
	            path: '/me/taggable_friends'
	        }).then(function (taggable_friends) {
	            vm.friends = taggable_friends.data;
	            console.log('taggable_friends', vm.friends);
	            setMotion();
	        }, function (error) {
	            alert('Facebook error: ' + error.error_description);
	        });
	    }

	    function setMotion() {
	        $timeout(function () {
	            ionicMaterialMotion.fadeSlideInRight({
	                startVelocity: 3000
	            });
	        }, 0);
	    }
	}

	exports.default = FriendsCtrl;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _activity = __webpack_require__(16);

	var _activity2 = _interopRequireDefault(_activity);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.activity', []).controller('ActivityCtrl', _activity2.default).name;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* @ngInject */
	function ActivityCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, $state) {
	    var vm = this;
	    localStorage.setItem('appState', $state.current.name);

	    activate();

	    function activate() {
	        $timeout(function () {
	            ionicMaterialMotion.fadeSlideIn({
	                selector: '.animate-fade-slide-in .item'
	            });
	        }, 200);
	    }
	}

	exports.default = ActivityCtrl;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _gallery = __webpack_require__(18);

	var _gallery2 = _interopRequireDefault(_gallery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.gallery', []).controller('GalleryCtrl', _gallery2.default).name;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/* @ngInject */
	function GalleryCtrl($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion, $state) {
	    var vm = this;
	    localStorage.setItem('appState', $state.current.name);
	    activate();

	    function activate() {
	        loadMaterialEffects();
	    }

	    function loadMaterialEffects() {
	        // Activate ink for controller
	        ionicMaterialInk.displayEffect();

	        ionicMaterialMotion.pushDown({
	            selector: '.push-down'
	        });
	        ionicMaterialMotion.fadeSlideInRight({
	            selector: '.animate-fade-slide-in .item'
	        });
	    }
	}

	exports.default = GalleryCtrl;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _userProfile = __webpack_require__(20);

	var _userProfile2 = _interopRequireDefault(_userProfile);

	var _userProfile3 = __webpack_require__(21);

	var _userProfile4 = _interopRequireDefault(_userProfile3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.userProfile', []).service('userProfileSvc', _userProfile4.default).controller('UserProfileCtrl', _userProfile2.default).name;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var UserProfileCtrl = function () {

	    /* @ngInject */
	    function UserProfileCtrl($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk, ngFB, $state, userProfileSvc) {
	        _classCallCheck(this, UserProfileCtrl);

	        this.$scope = $scope;
	        this.$stateParams = $stateParams;
	        this.$timeout = $timeout;
	        this.ionicMaterialMotion = ionicMaterialMotion;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.ngFB = ngFB;
	        this.$state = $state;
	        this.userProfileSvc = userProfileSvc;

	        this.id = $stateParams.id;

	        localStorage.setItem('appState', $state.current.name);
	        // Set Header
	        this.$scope.$parent.showHeader();
	        this.$scope.$parent.clearFabs();
	        this.$scope.isExpanded = false;
	        this.$scope.$parent.setExpanded(false);
	        this.$scope.$parent.setHeaderFab(false);

	        //init properties
	        this.user = {};
	        this.friends = [];

	        this.activate();
	    }

	    _createClass(UserProfileCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            // Set Ink
	            this.ionicMaterialInk.displayEffect();

	            this.loadUser();
	            this.loadFriends();
	        }
	    }, {
	        key: 'loadUser',
	        value: function loadUser() {
	            var _this = this;

	            this.ngFB.api({
	                path: '/me',
	                params: { fields: 'id,name,first_name,last_name,age_range,link,gender,locale,picture,timezone,updated_time,verified,education,about,email ' }
	            }).then(function (user) {
	                _this.user = user;
	                localStorage.setItem('profileId', user.id);
	                localStorage.setItem('user', JSON.stringify(user));
	                _this.userProfileSvc.createUser(_this.user);
	                console.log(_this.user);
	            }, function (error) {
	                alert('Facebook error: ' + error.error_description);
	            });
	        }
	    }, {
	        key: 'loadFriends',
	        value: function loadFriends() {
	            var _this2 = this;

	            this.ngFB.api({
	                path: '/me/taggable_friends'
	            }).then(function (taggable_friends) {
	                _this2.friends = taggable_friends.data;
	                console.log('taggable_friends', _this2.friends);
	                // Set Motion
	                _this2.setMotion();
	            }, function (error) {
	                alert('Facebook error: ' + error.error_description);
	            });
	        }
	    }, {
	        key: 'setMotion',
	        value: function setMotion() {
	            var _this3 = this;

	            this.$timeout(function () {
	                _this3.ionicMaterialMotion.slideUp({
	                    selector: '.slide-up'
	                });
	            }, 0);

	            this.$timeout(function () {
	                _this3.ionicMaterialMotion.fadeSlideInRight({
	                    startVelocity: 3000
	                });
	            }, 0);
	        }
	    }, {
	        key: 'goCart',
	        value: function goCart() {
	            this.$state.go('app.cart');
	        }
	    }]);

	    return UserProfileCtrl;
	}();

	exports.default = UserProfileCtrl;

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var userProfileSvc = function () {
	    /*@ngInject*/
	    function userProfileSvc($http, SERVER) {
	        _classCallCheck(this, userProfileSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	    }

	    _createClass(userProfileSvc, [{
	        key: 'createUser',
	        value: function createUser(_ref) {
	            var id = _ref.id,
	                name = _ref.name,
	                picture = _ref.picture,
	                address = _ref.address,
	                email = _ref.email;

	            this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'login/',
	                data: {
	                    profileId: id,
	                    fullName: name,
	                    profilePic: picture.data.url,
	                    address: address,
	                    email: email
	                }
	            });
	        }
	    }]);

	    return userProfileSvc;
	}();

	exports.default = userProfileSvc;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _search = __webpack_require__(23);

	var _search2 = _interopRequireDefault(_search);

	var _search3 = __webpack_require__(24);

	var _search4 = _interopRequireDefault(_search3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.search', []).controller('SearchCtrl', _search2.default).service('searchSvc', _search4.default).name;

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SearchCtrl = function () {
	    /* @ngInject */
	    function SearchCtrl($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, searchSvc) {
	        _classCallCheck(this, SearchCtrl);

	        this.$scope = $scope;
	        this.$stateParams = $stateParams;
	        this.$timeout = $timeout;
	        this.ngFB = ngFB;
	        this.ionicMaterialMotion = ionicMaterialMotion;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.$state = $state;
	        this.searchSvc = searchSvc;

	        this.activate();

	        localStorage.setItem('appState', this.$state.current.name);
	    }

	    _createClass(SearchCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            this.loadWatchers();
	            this.ionicMaterialInk.displayEffect();
	        }
	    }, {
	        key: 'goCart',
	        value: function goCart() {
	            this.$state.go('app.cart');
	        }
	    }, {
	        key: 'goBrewery',
	        value: function goBrewery(id) {
	            this.$state.go('app.profile', { id: id });
	        }
	    }, {
	        key: 'loadWatchers',
	        value: function loadWatchers() {
	            var _this = this;

	            this.$scope.$watch('vm.search', function (newValue, oldValue) {
	                //set filter with elastic search and back-end
	                _this.searchSvc.searchBrewery(newValue).then(function (breweries) {
	                    _this.breweries = breweries;
	                    //load efects
	                    _this.$timeout(function () {
	                        _this.ionicMaterialMotion.blinds({
	                            startVelocity: 4100
	                        });
	                    }, 0);
	                });
	            }, true);
	        }
	    }]);

	    return SearchCtrl;
	}();

	exports.default = SearchCtrl;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var searchSvc = function () {
	    /*@ngInject*/
	    function searchSvc($http, SERVER) {
	        _classCallCheck(this, searchSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	    }

	    _createClass(searchSvc, [{
	        key: 'searchBrewery',
	        value: function searchBrewery() {
	            var search_term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'searchBrewery',
	                data: {
	                    search_term: search_term
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'getBreweries',
	        value: function getBreweries() {
	            return this.$http({
	                method: 'GET',
	                url: this.SERVER.URL + 'brewery'
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }]);

	    return searchSvc;
	}();

	exports.default = searchSvc;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _rating = __webpack_require__(26);

	var _rating2 = _interopRequireDefault(_rating);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.rating', []).controller('RatingCtrl', _rating2.default).name;

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var RatingCtrl = function () {
	    /* @ngInject */
	    function RatingCtrl($stateParams, $timeout, ngFB, ionicMaterialInk, $state, commonSvc) {
	        _classCallCheck(this, RatingCtrl);

	        this.$timeout = $timeout;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.$state = $state;
	        this.commonSvc = commonSvc;

	        this.id = $stateParams.id;

	        this.activate();
	        localStorage.setItem('appState', this.$state.current.name);
	    }

	    _createClass(RatingCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            this.loadBrewery();
	            this.ionicMaterialInk.displayEffect();
	        }
	    }, {
	        key: 'loadBrewery',
	        value: function loadBrewery() {
	            var _this = this;

	            this.commonSvc.getBrewery(this.id).then(function (brewery) {
	                return _this.brewery = brewery;
	            });
	        }
	    }, {
	        key: 'goCart',
	        value: function goCart() {
	            this.$state.go('app.cart');
	        }
	    }]);

	    return RatingCtrl;
	}();

	exports.default = RatingCtrl;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _cart = __webpack_require__(28);

	var _cart2 = _interopRequireDefault(_cart);

	var _cart3 = __webpack_require__(29);

	var _cart4 = _interopRequireDefault(_cart3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.cart', []).controller('CartCtrl', _cart2.default).service('cartSvc', _cart4.default).name;

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var CartCtrl = function () {
	    /* @ngInject */
	    function CartCtrl($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, commonSvc, cartSvc) {
	        _classCallCheck(this, CartCtrl);

	        this.$scope = $scope;
	        this.$stateParams = $stateParams;
	        this.$timeout = $timeout;
	        this.ngFB = ngFB;
	        this.ionicMaterialMotion = ionicMaterialMotion;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.$state = $state;
	        this.commonSvc = commonSvc;
	        this.cartSvc = cartSvc;

	        this.activate();

	        localStorage.setItem('appState', this.$state.current.name);
	    }

	    _createClass(CartCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            this.loadCartItems();
	            this.ionicMaterialInk.displayEffect();
	        }
	    }, {
	        key: 'loadCartItems',
	        value: function loadCartItems() {
	            var _this = this;

	            this.cartSvc.getCartItems().then(function (cart) {
	                _this.cart = cart;
	                _this.beers = cart.items;
	                console.log(cart);
	                _this.setMotion();
	            });
	        }
	    }, {
	        key: 'minusOne',
	        value: function minusOne(id) {
	            var _this2 = this;

	            console.log('minusOne');
	            this.cartSvc.minusOne(id).then(function (cart) {
	                return _this2.cart = cart;
	            });
	        }
	    }, {
	        key: 'plusOne',
	        value: function plusOne(id) {
	            var _this3 = this;

	            console.log('plusOne');
	            this.cartSvc.plusOne(id).then(function (cart) {
	                return _this3.cart = cart;
	            });
	        }
	    }, {
	        key: 'removeFromCart',
	        value: function removeFromCart(id) {
	            var _this4 = this;

	            this.cartSvc.removeFromCart(id).then(function (cart) {
	                _this4.cart = cart;
	                _this4.beers = cart.items;
	                console.log(cart);
	                _this4.setMotion();
	            });
	        }
	    }, {
	        key: 'setMotion',
	        value: function setMotion() {
	            var _this5 = this;

	            this.$timeout(function () {
	                _this5.ionicMaterialMotion.blinds({
	                    startVelocity: 4100
	                });
	            }, 0);
	        }
	    }]);

	    return CartCtrl;
	}();

	exports.default = CartCtrl;

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var cartSvc = function () {
	    /*@ngInject*/
	    function cartSvc($http, SERVER) {
	        _classCallCheck(this, cartSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	    }

	    _createClass(cartSvc, [{
	        key: 'getCartItems',
	        value: function getCartItems(id) {
	            return this.$http({
	                method: 'GET',
	                url: this.SERVER.URL + 'cart/' + localStorage.getItem('profileId'),
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'plusOne',
	        value: function plusOne(id) {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'plusOne',
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'minusOne',
	        value: function minusOne(id) {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'minusOne',
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'removeFromCart',
	        value: function removeFromCart(id) {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'removeCart',
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }]);

	    return cartSvc;
	}();

	exports.default = cartSvc;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _about = __webpack_require__(31);

	var _about2 = _interopRequireDefault(_about);

	var _about3 = __webpack_require__(32);

	var _about4 = _interopRequireDefault(_about3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.about', []).controller('AboutCtrl', _about2.default).service('aboutSvc', _about4.default).name;

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var AboutCtrl = function () {
	    /* @ngInject */
	    function AboutCtrl($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, commonSvc, aboutSvc) {
	        _classCallCheck(this, AboutCtrl);

	        this.$scope = $scope;
	        this.$stateParams = $stateParams;
	        this.$timeout = $timeout;
	        this.ionicMaterialMotion = ionicMaterialMotion;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.$state = $state;
	        this.commonSvc = commonSvc;
	        this.aboutSvc = aboutSvc;
	        console.log($stateParams);
	        this.about = $stateParams.about;
	        this.id = $stateParams.id;

	        this.activate();

	        localStorage.setItem('appState', this.$state.current.name);
	    }

	    _createClass(AboutCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            this.loadAbout();
	            this.ionicMaterialInk.displayEffect();
	        }
	    }, {
	        key: 'loadAbout',
	        value: function loadAbout() {
	            if (this.about == 'user') {
	                this.user = JSON.parse(localStorage.getItem('user'));
	                console.log(this.user);
	                this.setMotion();
	            } else if (this.about == 'brewery') {
	                this.loadBrewery();
	            }
	        }
	    }, {
	        key: 'loadBrewery',
	        value: function loadBrewery() {
	            var _this = this;

	            if (this.id) {
	                this.commonSvc.getBrewery(this.id).then(function (brewery) {
	                    _this.brewery = brewery;
	                    console.log(_this.brewery);
	                    _this.setMotion();
	                });
	            } else {
	                this.commonSvc.getBreweryByOwner().then(function (brewery) {
	                    _this.brewery = brewery;
	                    _this.id = _this.brewery._id;
	                    _this.setMotion();
	                });
	            }
	        }
	    }, {
	        key: 'setMotion',
	        value: function setMotion() {
	            var _this2 = this;

	            this.$timeout(function () {
	                _this2.ionicMaterialMotion.blinds({
	                    startVelocity: 4100
	                });
	            }, 0);
	        }
	    }]);

	    return AboutCtrl;
	}();

	exports.default = AboutCtrl;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var aboutSvc = function () {
	    /*@ngInject*/
	    function aboutSvc($http, SERVER) {
	        _classCallCheck(this, aboutSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	    }

	    _createClass(aboutSvc, [{
	        key: 'getCartItems',
	        value: function getCartItems(id) {
	            return this.$http({
	                method: 'GET',
	                url: this.SERVER.URL + 'cart/' + localStorage.getItem('profileId'),
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'plusOne',
	        value: function plusOne(id) {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'plusOne',
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'minusOne',
	        value: function minusOne(id) {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'minusOne',
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }, {
	        key: 'removeFromCart',
	        value: function removeFromCart(id) {
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'removeCart',
	                data: {
	                    profileId: localStorage.getItem('profileId'),
	                    _id: id
	                }
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }]);

	    return aboutSvc;
	}();

	exports.default = aboutSvc;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _product = __webpack_require__(34);

	var _product2 = _interopRequireDefault(_product);

	var _product3 = __webpack_require__(35);

	var _product4 = _interopRequireDefault(_product3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = angular.module('app.product', []).controller('ProductCtrl', _product2.default).service('productSvc', _product4.default).name;

/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ProductCtrl = function () {
	    /* @ngInject */
	    function ProductCtrl($scope, $stateParams, $timeout, ngFB, ionicMaterialMotion, ionicMaterialInk, $state, productSvc, commonSvc) {
	        _classCallCheck(this, ProductCtrl);

	        this.$scope = $scope;
	        this.$stateParams = $stateParams;
	        this.$timeout = $timeout;
	        this.ionicMaterialMotion = ionicMaterialMotion;
	        this.ionicMaterialInk = ionicMaterialInk;
	        this.$state = $state;
	        this.productSvc = productSvc;
	        this.commonSvc = commonSvc;

	        this.activate();
	        this.product = {};

	        // this.product.image = 'https://cdn.filestackcontent.com/67w1jBMiS0il3Yos9X1w';
	        // document.getElementById("myImg").src = 'https://cdn.filestackcontent.com/67w1jBMiS0il3Yos9X1w';
	        localStorage.setItem('appState', this.$state.current.name);
	    }

	    _createClass(ProductCtrl, [{
	        key: 'activate',
	        value: function activate() {
	            this.loadCategories();
	            this.$scope.$watch('vm.img', function (n, o) {
	                console.log(n, o);
	            });
	            this.ionicMaterialInk.displayEffect();
	        }
	    }, {
	        key: 'loadCategories',
	        value: function loadCategories() {
	            var _this = this;

	            this.productSvc.getCategories().then(function (categories) {
	                return _this.categories = categories;
	            });
	        }
	    }, {
	        key: 'upload',
	        value: function upload() {
	            var _this2 = this;

	            filepicker.pick({
	                mimetype: 'image/*',
	                container: 'window',
	                services: ['COMPUTER', 'FACEBOOK', 'INSTAGRAM', 'GOOGLE_DRIVE', 'DROPBOX']
	            }, function (image) {
	                document.getElementById("myImg").src = image.url;
	                _this2.product.image = image.url;
	                console.log(_this2.product.image);
	                console.log(image);
	            }, function (FPError) {
	                console.log(FPError.toString());
	            });
	        }
	    }, {
	        key: 'goCart',
	        value: function goCart() {
	            this.$state.go('app.cart');
	        }
	    }, {
	        key: 'goBrewery',
	        value: function goBrewery(id) {
	            this.$state.go('app.profile', { id: id });
	        }
	    }, {
	        key: 'createProduct',
	        value: function createProduct(product) {
	            var _this3 = this;

	            this.commonSvc.getBreweryByOwner().then(function (brewery) {
	                if (brewery) {
	                    _this3.productSvc.createProduct(brewery, product).then(function (data) {
	                        return _this3.$state.go('app.myprofile');
	                    });
	                }
	            });
	        }
	    }]);

	    return ProductCtrl;
	}();

	exports.default = ProductCtrl;

/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var productSvc = function () {
	    /*@ngInject*/
	    function productSvc($http, SERVER, commonSvc) {
	        _classCallCheck(this, productSvc);

	        this.$http = $http;
	        this.SERVER = SERVER;
	        this.commonSvc = commonSvc;
	    }

	    _createClass(productSvc, [{
	        key: 'createProduct',
	        value: function createProduct(brewery, product) {
	            product.brewery = brewery;
	            return this.$http({
	                method: 'POST',
	                url: this.SERVER.URL + 'product',
	                data: product
	            }).then(function (response) {
	                return console.log(response.data);
	            });
	        }
	    }, {
	        key: 'getCategories',
	        value: function getCategories() {
	            return this.$http({
	                method: 'GET',
	                url: this.SERVER.URL + 'category'
	            }).then(function (response) {
	                return response.data;
	            });
	        }
	    }]);

	    return productSvc;
	}();

	exports.default = productSvc;

/***/ }
/******/ ]);