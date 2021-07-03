import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
        active = '';
     routes: Routes = [
        {
            path: 'posts',
            loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
        },
        {
            path: 'login',
            loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
        },
        {
            path: 'register',
            loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
        },
        {
            path: 'post/:id',
            loadChildren: () => import('./post/post.module').then( m => m.PostPageModule)
        },
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'prefix'
        },
    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
