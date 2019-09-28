import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, userService: UserService) {
    /**
     * When the platform is ready before everything else some settings are managed (statusBar style), the splashscreen is hidden and the method checkUserExists()
     * of the userService is called in order to load user data or create new local data
     */
    platform.ready().then(() => {
      statusBar.styleLightContent();
      splashScreen.hide();
      userService.checkUserExists();
    });
  }

}
