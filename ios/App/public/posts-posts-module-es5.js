(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"], {
    /***/
    "/Umb":
    /*!*****************************************!*\
      !*** ./src/app/posts/posts.resolver.ts ***!
      \*****************************************/

    /*! exports provided: PostsResolver */

    /***/
    function Umb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsResolver", function () {
        return PostsResolver;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/wordpress.service */
      "MWij");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PostsResolver = /*#__PURE__*/function () {
        function PostsResolver(wordpressService) {
          _classCallCheck(this, PostsResolver);

          this.wordpressService = wordpressService;
        }

        _createClass(PostsResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var categoryId = route.queryParams['categoryId'];
            var categoryTitle = route.queryParams['title'];
            return this.wordpressService.getRecentPosts(categoryId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (posts) {
              return {
                posts: posts,
                categoryTitle: categoryTitle,
                categoryId: categoryId
              };
            }));
          }
        }]);

        return PostsResolver;
      }();

      PostsResolver.ctorParameters = function () {
        return [{
          type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]
        }];
      };

      PostsResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PostsResolver);
      /***/
    },

    /***/
    "1XP4":
    /*!***************************************!*\
      !*** ./src/app/posts/posts.module.ts ***!
      \***************************************/

    /*! exports provided: PostsPageModule */

    /***/
    function XP4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsPageModule", function () {
        return PostsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _posts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./posts.page */
      "ojBJ");
      /* harmony import */


      var _posts_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./posts.resolver */
      "/Umb");

      var routes = [{
        path: '',
        component: _posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"],
        resolve: {
          data: _posts_resolver__WEBPACK_IMPORTED_MODULE_7__["PostsResolver"]
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange' // because we use the same route for all posts and for category posts, we need to add this to refetch data 

      }];

      var PostsPageModule = function PostsPageModule() {
        _classCallCheck(this, PostsPageModule);
      };

      PostsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_posts_page__WEBPACK_IMPORTED_MODULE_6__["PostsPage"]],
        providers: [_posts_resolver__WEBPACK_IMPORTED_MODULE_7__["PostsResolver"]]
      })], PostsPageModule);
      /***/
    },

    /***/
    "2r1S":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/posts.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function r1S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title *ngIf=\"!categoryTitle\">Latest free items</ion-title>\n    <ion-title *ngIf=\"categoryTitle\">{{categoryTitle}} posts</ion-title>\n    <ion-buttons slot=\"start\" *ngIf=\"categoryTitle\">\n      <ion-back-button defaultHref=\"posts\"></ion-back-button>\n    </ion-buttons>\n    <!-- Hamburger -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"(loggedInObservable | async) === false\" [routerLink]=\"['/login']\">Log In\n      </ion-button>\n      <ion-button *ngIf=\"(loggedInObservable | async) === true\" (click)=\"logOut()\">Log out\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"page-content\">\n  <ion-card *ngFor=\"let post of posts\" [routerLink]=\"['/post', post.id]\" class=\"post-card\">\n\n    <img [src]=\"post.image\" style=\"width: 100vw;\" />\n\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p [innerHTML]=\"post.excerpt.rendered\"></p>\n    </ion-card-content>\n    <ion-item class=\"ion-activated\" detail lines=\"none\" color=\"danger\">\n      <ion-label *ngIf=\"!post.modified\">{{post.date | date}}</ion-label><ion-label *ngIf=\"post.modified\">{{post.modified | date}}</ion-label>\n      <ion-label class=\"read-more-label\">View Item</ion-label>\n    </ion-item>\n  </ion-card>\n  <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n    loadingSpinner=\"bubbles\"\n    loadingText=\"Loading more items ...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n";
      /***/
    },

    /***/
    "QhBV":
    /*!***************************************!*\
      !*** ./src/app/posts/posts.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function QhBV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-content {\n  --background: var(--ion-color-light);\n}\n.page-content .post-card {\n  outline: none;\n}\n.page-content .post-card .read-more-label {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7QUFDTiIsImZpbGUiOiJwb3N0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gIC5wb3N0LWNhcmQge1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAucmVhZC1tb3JlLWxhYmVsIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "ojBJ":
    /*!*************************************!*\
      !*** ./src/app/posts/posts.page.ts ***!
      \*************************************/

    /*! exports provided: PostsPage */

    /***/
    function ojBJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostsPage", function () {
        return PostsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./posts.page.html */
      "2r1S");
      /* harmony import */


      var _posts_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./posts.page.scss */
      "QhBV");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/wordpress.service */
      "MWij");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/authentication.service */
      "ej43");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var PostsPage = /*#__PURE__*/function () {
        function PostsPage(loadingController, router, route, wordpressService, authenticationService) {
          _classCallCheck(this, PostsPage);

          this.loadingController = loadingController;
          this.router = router;
          this.route = route;
          this.wordpressService = wordpressService;
          this.authenticationService = authenticationService;
          this.posts = new Array();
          this.loggedInObservable = this.authenticationService.isLoggedIn();
        }

        _createClass(PostsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authenticationService.loggedUserObservable().subscribe(function (user) {
              _this.loggedInObservable = user == null ? Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(false) : Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(true);
            });
            this.route.data.subscribe(function (routeData) {
              var data = routeData['data'];
              _this.posts = data.posts;
              _this.categoryId = data.categoryId;
              _this.categoryTitle = data.categoryTitle;
            });
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this2 = this;

            var page = Math.ceil(this.posts.length / 10) + 1;
            this.wordpressService.getRecentPosts(this.categoryId, page).subscribe(function (newPagePosts) {
              var _this2$posts;

              (_this2$posts = _this2.posts).push.apply(_this2$posts, _toConsumableArray(newPagePosts));

              event.target.complete();
            }, function (err) {
              // there are no more posts available
              event.target.disabled = true;
            });
          }
        }, {
          key: "logOut",
          value: function logOut() {
            var _this3 = this;

            this.authenticationService.logOut().then(function (res) {
              return _this3.router.navigate(['/login']);
            }, function (err) {
              return console.log('Error logging out');
            });
          }
        }]);

        return PostsPage;
      }();

      PostsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_6__["WordpressService"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
        }];
      };

      PostsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-posts',
        template: _raw_loader_posts_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_posts_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=posts-posts-module-es5.js.map