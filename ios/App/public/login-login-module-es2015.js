(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");








let LoginPage = class LoginPage {
    constructor(router, loadingController, formBuilder, authenticationService) {
        this.router = router;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
    }
    doLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield loading.present();
            this.authenticationService.doLogin(this.loginForm.value.username, this.loginForm.value.password)
                .subscribe(res => {
                this.authenticationService.setUser({
                    token: res['token'],
                    username: this.loginForm.value.username,
                    displayname: res['user_display_name'],
                    email: res['user_email']
                });
                loading.dismiss();
                this.router.navigate(['/posts']);
            }, err => {
                loading.dismiss();
                this.errorMessage = "Invalid credentials";
            });
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "4i7c":
/*!**************************************!*\
  !*** ./src/app/login/login.guard.ts ***!
  \**************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");






let LoginGuard = class LoginGuard {
    constructor(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.authenticationService.getUser())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(user => {
            if (user) { // user is the value returned from the local storage
                return this.authenticationService.validateAuthToken(JSON.parse(user).token)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(error)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(result => {
                    if (result.error) {
                        // token is expired
                        return true;
                    }
                    else {
                        // user is logged in and token is valid
                        return this.router.parseUrl('/posts');
                    }
                }));
            }
            else {
                // there is no logged user
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
            }
        }));
    }
};
LoginGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginGuard);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"page-content\">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <div style=\"align-items: center\">\n         <center>\n           <img src=\"assets/images/logo-512.png\"  alt=\"logo\"/>\n         </center>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <form class=\"login-form\" [formGroup]=\"loginForm\" (submit)=\"doLogin()\">\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Username</ion-label>\n      <ion-input type=\"text\" formControlName=\"username\" clearInput=\"true\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" clearInput=\"true\"></ion-input>\n    </ion-item>\n\n    <p class=\"error-message\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n\n    <p class=\"sign-up\">\n      <a [routerLink]=\"['/register']\">Don't have an account?</a>\n    </p>\n\n    <p class=\"skip-login\">\n      <ion-button color=\"warning\" [routerLink]=\"['/posts']\">Skip log in</ion-button>\n    </p>\n    <ion-button class=\"submit-btn\" color=\"danger\" expand=\"block\" [disabled]=\"!loginForm.valid\" type=\"submit\" strong=\"true\">Log In</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.guard */ "4i7c");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"],
        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]],
        providers: [_login_guard__WEBPACK_IMPORTED_MODULE_7__["LoginGuard"]]
    })
], LoginPageModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-content {\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --background: var(--ion-color-light);\n}\n\n.input-item {\n  --padding-start: 0px;\n  --background: var(--ion-color-light);\n}\n\n.skip-login {\n  text-align: right;\n  color: white;\n}\n\n.skip-login a {\n  text-decoration: none;\n  color: white;\n}\n\n.skip-login ion-button {\n  color: white;\n}\n\n.skip-login .ion-color-warning {\n  color: white;\n}\n\n.sign-up {\n  text-align: right;\n  margin-top: 40px;\n}\n\n.sign-up a {\n  text-decoration: none;\n}\n\n.login-form {\n  margin-top: 50px;\n}\n\n.login-button {\n  margin-top: 30px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n.submit-btn {\n  margin-top: 60px;\n}\n\nimg {\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0FBQUY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG9DQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUFBRjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtBQUNKOztBQUNFO0VBQ0UsWUFBQTtBQUNKOztBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVFO0VBQ0UscUJBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBREYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY29udGVudCB7XG5cbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5pbnB1dC1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnNraXAtbG9naW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6d2hpdGU7XG4gIH1cbiAgaW9uLWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgLmlvbi1jb2xvci13YXJuaW5ne1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uc2lnbi11cCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxufVxuXG4ubG9naW4tZm9ybSB7XG4gIG1hcmdpbi10b3A6IDUwcHhcbn1cblxuLmxvZ2luLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG5cbmltZ3tcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map