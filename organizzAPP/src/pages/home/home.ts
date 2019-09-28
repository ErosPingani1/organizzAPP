import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  username: string = "";
  loadedData: boolean = false;

  constructor(public navCtrl: NavController, public userService: UserService, public platform: Platform,
    public loaderService: LoaderService) {
    this.loaderService.presentLoading();
  }

  ionViewCanEnter() {
    setTimeout(() => {
      this.username = this.userService.getUser().username;
      this.loaderService.closeLoading();
      this.loadedData = true;
    }, 1000);
  }

}
