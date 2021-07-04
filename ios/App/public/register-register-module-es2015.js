(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "UgDh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar class=\"page-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"page-content\">\n  <ion-text color=\"primary\">\n    <h1>Create an account</h1>\n  </ion-text>\n\n  <form class=\"signup-form\" [formGroup]=\"registerForm\" (submit)=\"onSubmit()\">\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Username</ion-label>\n      <ion-input type=\"text\" formControlName=\"username\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Display Name</ion-label>\n      <ion-input type=\"text\" formControlName=\"displayName\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Email</ion-label>\n      <ion-input type=\"email\" formControlName=\"email\" clearInput=\"true\"></ion-input>\n    </ion-item>\n    <ion-item class=\"input-item\">\n      <ion-label color=\"secondary\" position=\"stacked\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" clearInput=\"true\"></ion-input>\n    </ion-item>\n\n    <p class=\"error-message\" *ngIf=\"errorMessage\">{{errorMessage}}</p>\n    <p class=\"success-message\" *ngIf=\"successMessage\">{{successMessage}}</p>\n\n    <p class=\"log-in\">\n      <a (click)=\"goToLogIn()\">Already have an account?</a>\n    </p>\n\n    <ion-button class=\"submit-btn\" expand=\"block\" [disabled]=\"!registerForm.valid\" type=\"submit\" strong=\"true\">Sign up</ion-button>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "b0Bx":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "UgDh");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "x/mg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_wordpress_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/wordpress.service */ "MWij");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/authentication.service */ "ej43");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");











let RegisterPage = class RegisterPage {
    constructor(router, formBuilder, wordpressService, authenticationService, toastController) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.wordpressService = wordpressService;
        this.authenticationService = authenticationService;
        this.toastController = toastController;
    }
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            displayName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    goToLogIn() {
        this.router.navigate(['/login']);
    }
    onSubmit() {
        const username = 'admin'; // this should be an administrator Username
        const password = 'garcea'; // this should be an administrator Password
        // only authenticated administrators can create users
        this.authenticationService.doLogin(username, password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(error)))
            .subscribe(res => {
            if (res.error) {
                this.errorMessage = 'Only authenticated administrators can create users';
            }
            else {
                const userData = {
                    username: this.registerForm.value.username,
                    name: this.registerForm.value.displayName,
                    email: this.registerForm.value.email,
                    password: this.registerForm.value.password
                };
                this.authenticationService.doRegister(userData, res.token)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])(error)))
                    .subscribe((result) => {
                    if (res.error) {
                        this.errorMessage = 'Only authenticated administrators can create users';
                    }
                    else {
                        this.successMessage = 'Account created successfully. Please log in.';
                    }
                });
            }
        }, err => {
            console.log(err);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_wordpress_service__WEBPACK_IMPORTED_MODULE_7__["WordpressService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ }),

/***/ "x/mg":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-toolbar {\n  --background: var(--ion-color-light);\n}\n\n.page-content {\n  --padding-top: 20px;\n  --padding-start: 20px;\n  --padding-end: 20px;\n  --background: var(--ion-color-light);\n}\n\n.input-item {\n  --padding-start: 0px;\n  --background: var(--ion-color-light);\n}\n\n.log-in {\n  text-align: right;\n  margin-top: 40px;\n}\n\n.signup-form {\n  margin-top: 50px;\n}\n\n.login-button {\n  margin-top: 30px;\n}\n\n.error-message {\n  color: var(--ion-color-danger);\n}\n\n.success-message {\n  color: var(--ion-color-success);\n}\n\n.submit-btn {\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuXG4uaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5sb2ctaW4ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuLnNpZ251cC1mb3JtIHtcbiAgbWFyZ2luLXRvcDogNTBweFxufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi5zdWNjZXNzLW1lc3NhZ2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "x5bZ":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "b0Bx");







const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map