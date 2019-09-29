import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Music } from '../../models/music';
import { UserService } from '../../services/user.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  private userMusicData: Music[];
  private pageName = this.languageService.getUI().musicPageMessages.pageName;
  private welcomeText = this.languageService.getUI().musicPageMessages.welcomeText;
  private subtitle = this.languageService.getUI().musicPageMessages.subtitle;
  private category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public languageService: LanguageService,
    public userService: UserService) {
  }

  /**
   * At the page event CanEnter all the movies data array of the user are collected in a variable
   */
  ionViewCanEnter() {
    this.userMusicData = this.userService.getUser().music;
    this.category = "to-listen";
  }

}
