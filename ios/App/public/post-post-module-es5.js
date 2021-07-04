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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"], {
    /***/
    "5XeH":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function XeH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title [innerHTML]=\"post.title.rendered\">Free Item</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"posts\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n    <img [src]=\"post.image\" style=\"width: 100vw\" />\n\n    <h1 [innerHTML]=\"post.title.rendered\"></h1>\n    <p class=\"post-body\" [innerHTML]=\"post.content.rendered\"></p>\n\n    <p>\n        Item added on <span *ngIf=\"!post.modified\">{{post.date | date}}</span><span *ngIf=\"post.modified\">{{post.modified | date}}</span>\n    </p>\n\n    <ion-badge class=\"post-category\" color=\"danger\" *ngFor=\"let category of categories\"\n      [routerLink]=\"['/posts']\" [queryParams]=\"{ categoryId: category.id,  title: category.name}\">\n      {{category.name}}\n    </ion-badge>\n\n    <ion-list class=\"post-comments\">\n      <ion-item *ngFor=\"let comment of comments\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{comment.author_avatar_urls[24]}}\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{comment.author_name}}</h2>\n          <p [innerHTML]=\"comment.content.rendered\"></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)=\"loadMoreComments($event)\">\n      <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more messages...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer>\n <ion-toolbar>\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"createComment()\">Contact User</ion-button>\n </ion-toolbar>\n</ion-footer>\n";
      /***/
    },

    /***/
    "D/UE":
    /*!***********************************!*\
      !*** ./src/app/post/post.page.ts ***!
      \***********************************/

    /*! exports provided: PostPage */

    /***/
    function DUE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPage", function () {
        return PostPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./post.page.html */
      "5XeH");
      /* harmony import */


      var _post_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./post.page.scss */
      "RnGG");
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var PostPage = /*#__PURE__*/function () {
        function PostPage(loadingController, alertController, router, route, wordpressService, authenticationService) {
          _classCallCheck(this, PostPage);

          this.loadingController = loadingController;
          this.alertController = alertController;
          this.router = router;
          this.route = route;
          this.wordpressService = wordpressService;
          this.authenticationService = authenticationService;
          this.comments = [];
          this.categories = [];
        }

        _createClass(PostPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.route.data.subscribe(function (routeData) {
                        var data = routeData['data'];
                        _this.post = data.post;
                        _this.author = data.author.name;
                        _this.categories = data.categories;
                        _this.comments = data.comments;
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getComments",
          value: function getComments() {
            return this.wordpressService.getComments(this.post.id);
          }
        }, {
          key: "loadMoreComments",
          value: function loadMoreComments(event) {
            var _this2 = this;

            var page = this.comments.length / 10 + 1;
            this.wordpressService.getComments(this.post.id, page).subscribe(function (comments) {
              var _this2$comments;

              (_this2$comments = _this2.comments).push.apply(_this2$comments, _toConsumableArray(comments));

              event.target.complete();
            }, function (err) {
              // there are no more comments available
              event.target.disabled = true;
            });
          }
        }, {
          key: "createComment",
          value: function createComment() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var loggedUser, user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authenticationService.getUser();

                    case 2:
                      loggedUser = _context2.sent;

                      if (!loggedUser) {
                        _context2.next = 8;
                        break;
                      }

                      user = JSON.parse(loggedUser); // check if token is valid

                      this.authenticationService.validateAuthToken(user.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(function (error) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(error);
                      }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (result) {
                        if (result.error) {
                          // token is expired
                          _this3.openLogInAlert();
                        } else {
                          // user is logged in and token is valid
                          _this3.openEnterCommentAlert(user);
                        }
                      })).subscribe();
                      _context2.next = 10;
                      break;

                    case 8:
                      _context2.next = 10;
                      return this.openLogInAlert();

                    case 10:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "openLogInAlert",
          value: function openLogInAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Please login',
                        message: 'You need to login in order to contact the user',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Login',
                          handler: function handler() {
                            _this4.router.navigate(['/login']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "openEnterCommentAlert",
          value: function openEnterCommentAlert(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        header: 'Send a message',
                        inputs: [{
                          name: 'comment',
                          type: 'text',
                          placeholder: 'Message'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Accept',
                          handler: function handler(data) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                              var _this6 = this;

                              var loading;
                              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                                while (1) {
                                  switch (_context7.prev = _context7.next) {
                                    case 0:
                                      _context7.next = 2;
                                      return this.loadingController.create();

                                    case 2:
                                      loading = _context7.sent;
                                      _context7.next = 5;
                                      return loading.present();

                                    case 5:
                                      this.wordpressService.createComment(this.post.id, user, data.comment).subscribe(function (data) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                          var _this7 = this;

                                          return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                            while (1) {
                                              switch (_context5.prev = _context5.next) {
                                                case 0:
                                                  this.getComments().subscribe(function (comments) {
                                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                                                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                                        while (1) {
                                                          switch (_context4.prev = _context4.next) {
                                                            case 0:
                                                              this.comments = Object.keys(comments).map(function (i) {
                                                                return comments[i];
                                                              });
                                                              _context4.next = 3;
                                                              return loading.dismiss();

                                                            case 3:
                                                            case "end":
                                                              return _context4.stop();
                                                          }
                                                        }
                                                      }, _callee4, this);
                                                    }));
                                                  });

                                                case 1:
                                                case "end":
                                                  return _context5.stop();
                                              }
                                            }
                                          }, _callee5, this);
                                        }));
                                      }, function (err) {
                                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                                            while (1) {
                                              switch (_context6.prev = _context6.next) {
                                                case 0:
                                                  _context6.next = 2;
                                                  return loading.dismiss();

                                                case 2:
                                                case "end":
                                                  return _context6.stop();
                                              }
                                            }
                                          }, _callee6);
                                        }));
                                      });

                                    case 6:
                                    case "end":
                                      return _context7.stop();
                                  }
                                }
                              }, _callee7, this);
                            }));
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return PostPage;
      }();

      PostPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
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

      PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post',
        template: _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostPage);
      /***/
    },

    /***/
    "RnGG":
    /*!*************************************!*\
      !*** ./src/app/post/post.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function RnGG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".page-content {\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n.page-content .post-body {\n  font-size: 16px;\n  color: var(--ion-color-primary-tint);\n  line-height: 1.5;\n}\n.page-content .post-category {\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n}\n.page-content .post-comments {\n  margin-top: 16px;\n}\n::ng-deep .post-body img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLHVCQUFBO1VBQUEsc0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQU9JO0VBQ0UsWUFBQTtBQUpOIiwiZmlsZSI6InBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcblxuICAucG9zdC1ib2R5IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAucG9zdC1jYXRlZ29yeSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcbiAgfVxuXG4gIC5wb3N0LWNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5wb3N0LWJvZHkge1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "WuFp":
    /*!*************************************!*\
      !*** ./src/app/post/post.module.ts ***!
      \*************************************/

    /*! exports provided: PostPageModule */

    /***/
    function WuFp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostPageModule", function () {
        return PostPageModule;
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


      var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./post.page */
      "D/UE");
      /* harmony import */


      var _post_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./post.resolver */
      "sVP6");

      var routes = [{
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"],
        resolve: {
          data: _post_resolver__WEBPACK_IMPORTED_MODULE_7__["PostResolver"]
        }
      }];

      var PostPageModule = function PostPageModule() {
        _classCallCheck(this, PostPageModule);
      };

      PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]],
        providers: [_post_resolver__WEBPACK_IMPORTED_MODULE_7__["PostResolver"]]
      })], PostPageModule);
      /***/
    },

    /***/
    "sVP6":
    /*!***************************************!*\
      !*** ./src/app/post/post.resolver.ts ***!
      \***************************************/

    /*! exports provided: PostResolver */

    /***/
    function sVP6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostResolver", function () {
        return PostResolver;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PostResolver = /*#__PURE__*/function () {
        function PostResolver(wordpressService) {
          _classCallCheck(this, PostResolver);

          this.wordpressService = wordpressService;
        }

        _createClass(PostResolver, [{
          key: "resolve",
          value: function resolve(route) {
            var _this8 = this;

            var id = route.paramMap.get('id');
            return this.wordpressService.getPost(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (post) {
              var author = _this8.wordpressService.getAuthor(post.author);

              var categories = _this8.wordpressService.getPostCategories(post);

              var comments = _this8.wordpressService.getComments(post.id);

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])({
                author: author,
                categories: categories,
                comments: comments
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
                return Object.assign(Object.assign({}, postData), {
                  post: post
                });
              }));
            }));
          }
        }]);

        return PostResolver;
      }();

      PostResolver.ctorParameters = function () {
        return [{
          type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]
        }];
      };

      PostResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PostResolver);
      /***/
    }
  }]);
})();
//# sourceMappingURL=post-post-module-es5.js.map