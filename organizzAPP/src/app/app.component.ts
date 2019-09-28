import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { UserService } from '../services/user.service';
import { LanguageService } from '../services/language.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any;
  public uiMessages: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, userService: UserService, languageService: LanguageService) {
    /**
     * When the platform is ready before everything else some settings are managed (statusBar style), the splashscreen is hidden and 
     * the method checkUserExists() of the userService is called in order to load user data or create new local data.
     * When the platform is ready a check on the language is also made in order to set the right path to the class containing all the ui elements
     * so the application can use italian or english language
     */
    platform.ready().then(() => {
      statusBar.styleLightContent();
      splashScreen.hide();
      if (platform.lang() == "it") {
        languageService.setUILanguageIT();
        this.rootPage = TabsPage;
      }else {
        languageService.setUILanguageEN();
        this.rootPage = TabsPage;
      }
      userService.checkUserExists();
    });
  }

}
