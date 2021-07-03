## Bmw Tutorials App

This is an Ionic app for my one of my side project which is using Wordpress REST API!

**This app is built using Ionic 5 and Angular 11.**

**Please support this project by simply putting a Github star ⭐.**


## Installation

Install  dependencies
```sh
npm install
```

## Wordpress Configuration

The REST API is included in the Wordpress Core from WordPress 4.7! Plugins are no longer required, just install the latest version of WordPress and you're ready to go.
In order to check that you are able to make requests to the REST API you only need to make a request to the following url: http://YOUR-WORDPRESS-SITE/wp-json/wp/v2/
Please note that you need to change 'YOUR-WORDPRESS-SITE' with your own value.


## Run the app on the browser

```sh
ionic serve
```

## Run the app on your phone
This project uses [Capacitor](https://capacitor.ionicframework.com/docs/) (spiritual successor to Cordova).

Before starting make sure to read the [Capacitor Required Dependencies](https://capacitor.ionicframework.com/docs/getting-started/dependencies).

The Capacitor workflow involves a few consistent tasks:
- [Develop and build your Web App](https://capacitor.ionicframework.com/docs/basics/workflow/#1-develop-and-build-your-web-app)
- [Copy your Web Assets](https://capacitor.ionicframework.com/docs/basics/workflow/#2-copy-your-web-assets)
- [Open your Native IDE](https://capacitor.ionicframework.com/docs/basics/workflow/#3-open-your-native-ide)
- [Periodic Maintenance](https://capacitor.ionicframework.com/docs/basics/workflow/#4-periodic-maintenance)

#### iOS Platform
Read how to [build this app for iOS](https://capacitor.ionicframework.com/docs/basics/building-your-app#ios).

#### Android Platform
Read how to [build this app for Android](https://capacitor.ionicframework.com/docs/basics/building-your-app#android).
