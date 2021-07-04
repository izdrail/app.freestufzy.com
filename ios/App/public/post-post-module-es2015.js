(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-post-module"],{

/***/ "5XeH":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/post.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title [innerHTML]=\"post.title.rendered\">Free Item</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"posts\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n    <img [src]=\"post.image\" style=\"width: 100vw\" />\n\n    <h1 [innerHTML]=\"post.title.rendered\"></h1>\n    <p class=\"post-body\" [innerHTML]=\"post.content.rendered\"></p>\n\n    <p>\n        Item added on <span *ngIf=\"!post.modified\">{{post.date | date}}</span><span *ngIf=\"post.modified\">{{post.modified | date}}</span>\n    </p>\n\n    <ion-badge class=\"post-category\" color=\"danger\" *ngFor=\"let category of categories\"\n      [routerLink]=\"['/posts']\" [queryParams]=\"{ categoryId: category.id,  title: category.name}\">\n      {{category.name}}\n    </ion-badge>\n\n    <ion-list class=\"post-comments\">\n      <ion-item *ngFor=\"let comment of comments\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{comment.author_avatar_urls[24]}}\">\n        </ion-avatar>\n        <ion-label>\n          <h2>{{comment.author_name}}</h2>\n          <p [innerHTML]=\"comment.content.rendered\"></p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll (ionInfinite)=\"loadMoreComments($event)\">\n      <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more messages...\">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer>\n <ion-toolbar>\n  <ion-button color=\"danger\" expand=\"block\" (click)=\"createComment()\">Contact User</ion-button>\n </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "D/UE":
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/*! exports provided: PostPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function() { return PostPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./post.page.html */ "5XeH");
/* harmony import */ var _post_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post.page.scss */ "RnGG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/wordpress.service */ "MWij");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");










let PostPage = class PostPage {
    constructor(loadingController, alertController, router, route, wordpressService, authenticationService) {
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.wordpressService = wordpressService;
        this.authenticationService = authenticationService;
        this.comments = [];
        this.categories = [];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.data.subscribe(routeData => {
                const data = routeData['data'];
                this.post = data.post;
                this.author = data.author.name;
                this.categories = data.categories;
                this.comments = data.comments;
            });
        });
    }
    getComments() {
        return this.wordpressService.getComments(this.post.id);
    }
    loadMoreComments(event) {
        const page = (this.comments.length / 10) + 1;
        this.wordpressService.getComments(this.post.id, page)
            .subscribe((comments) => {
            this.comments.push(...comments);
            event.target.complete();
        }, err => {
            // there are no more comments available
            event.target.disabled = true;
        });
    }
    createComment() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loggedUser = yield this.authenticationService.getUser();
            if (loggedUser) {
                const user = JSON.parse(loggedUser);
                // check if token is valid
                this.authenticationService.validateAuthToken(user.token)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(result => {
                    if (result.error) {
                        // token is expired
                        this.openLogInAlert();
                    }
                    else {
                        // user is logged in and token is valid
                        this.openEnterCommentAlert(user);
                    }
                })).subscribe();
            }
            else {
                yield this.openLogInAlert();
            }
        });
    }
    openLogInAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Please login',
                message: 'You need to login in order to contact the user',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Login',
                        handler: () => {
                            this.router.navigate(['/login']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    openEnterCommentAlert(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Send a message',
                inputs: [
                    {
                        name: 'comment',
                        type: 'text',
                        placeholder: 'Message'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Accept',
                        handler: (data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            const loading = yield this.loadingController.create();
                            yield loading.present();
                            this.wordpressService.createComment(this.post.id, user, data.comment)
                                .subscribe((data) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                this.getComments().subscribe((comments) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    this.comments = Object.keys(comments).map(i => comments[i]);
                                    yield loading.dismiss();
                                }));
                            }), (err) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                yield loading.dismiss();
                            }));
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
};
PostPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_6__["WordpressService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
];
PostPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-post',
        template: _raw_loader_post_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_post_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostPage);



/***/ }),

/***/ "RnGG":
/*!*************************************!*\
  !*** ./src/app/post/post.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-content {\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n}\n.page-content .post-body {\n  font-size: 16px;\n  color: var(--ion-color-primary-tint);\n  line-height: 1.5;\n}\n.page-content .post-category {\n  -webkit-margin-end: 6px;\n          margin-inline-end: 6px;\n}\n.page-content .post-comments {\n  margin-top: 16px;\n}\n::ng-deep .post-body img {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLHVCQUFBO1VBQUEsc0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESjtBQU9JO0VBQ0UsWUFBQTtBQUpOIiwiZmlsZSI6InBvc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcblxuICAucG9zdC1ib2R5IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cblxuICAucG9zdC1jYXRlZ29yeSB7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweDtcbiAgfVxuXG4gIC5wb3N0LWNvbW1lbnRzIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICB9XG59XG5cbjo6bmctZGVlcCB7XG4gIC5wb3N0LWJvZHkge1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "WuFp":
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/*! exports provided: PostPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function() { return PostPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "D/UE");
/* harmony import */ var _post_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post.resolver */ "sVP6");








const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"],
        resolve: {
            data: _post_resolver__WEBPACK_IMPORTED_MODULE_7__["PostResolver"]
        }
    }
];
let PostPageModule = class PostPageModule {
};
PostPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]],
        providers: [_post_resolver__WEBPACK_IMPORTED_MODULE_7__["PostResolver"]]
    })
], PostPageModule);



/***/ }),

/***/ "sVP6":
/*!***************************************!*\
  !*** ./src/app/post/post.resolver.ts ***!
  \***************************************/
/*! exports provided: PostResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostResolver", function() { return PostResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/wordpress.service */ "MWij");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let PostResolver = class PostResolver {
    constructor(wordpressService) {
        this.wordpressService = wordpressService;
    }
    resolve(route) {
        const id = route.paramMap.get('id');
        return this.wordpressService.getPost(id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((post) => {
            const author = this.wordpressService.getAuthor(post.author);
            const categories = this.wordpressService.getPostCategories(post);
            const comments = this.wordpressService.getComments(post.id);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])({ author, categories, comments })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(postData => {
                return Object.assign(Object.assign({}, postData), { post });
            }));
        }));
    }
};
PostResolver.ctorParameters = () => [
    { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] }
];
PostResolver = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostResolver);



/***/ })

}]);
//# sourceMappingURL=post-post-module-es2015.js.map