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



#### Set up the WordPress Connection
To have the app working with WordPress you will have to add the following to the index.php

```
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, X-CSRF-Token");
```


If you have custom fields for the post you will have to install the following plugin to get the content

```
https://wordpress.org/plugins/rest-api-custom-fields/
```

For allowing the user to create accounts and to comment or send messages you will have to install the following plugin

```
https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
```

To set up the jwt  authentication you will have to add this to the .htaccess file

```
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
```

Add the following to the wp.config.php

```
define('JWT_AUTH_SECRET_KEY', 'your-top-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);

```

And Finally replace into 
```
src/app/register/register.page.ts
```

Lines 43 and 44 with some admin credentials. 


#### Commands to build the app

The resources command will generate the icons and the splash.
You will have to replace the icon.png (1024x1024) and the splash.jpg(2732x2732) from resource/ 

```
yarn build
npx cap copy
npx cap add android
npm run resources
npx cap copy android
npx cap open android
```
