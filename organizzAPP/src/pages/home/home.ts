import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { LoaderService } from '../../services/loader.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private username: string = "";
  private loadedData: boolean = false;
  private pageName = "home";
  private welcomeText = "";
  private subtitle = "";

  /**
   * HomePage contstuctor, in the progress of page buildup the declared loaderService is used to present the loader
   * @param navCtrl 
   * @param userService 
   * @param platform 
   * @param loaderService 
   */
  constructor(public navCtrl: NavController, public userService: UserService, public platform: Platform,
    public loaderService: LoaderService, public languageService: LanguageService) {
    this.loaderService.presentLoading();
  }

  /**
   * At the event CanEnter of the hompage the username of the active user is setted as username value and the loader is closed.
   * The boolean variable loadedData is used to show the content of the page
   */
  ionViewCanEnter() {
    setTimeout(() => {
      this.username = this.userService.getUser().username;
      this.welcomeText = this.languageService.getUI().homePageMessages.welcomeText + ' ' + this.username;
      this.subtitle = this.languageService.getUI().homePageMessages.subtitle;
      this.loaderService.closeLoading();
      this.loadedData = true;
    }, 1000);
  }

}
