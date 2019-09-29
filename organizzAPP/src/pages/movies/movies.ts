import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { Movie } from '../../models/movie';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  private userMoviesData: Movie[];
  private pageName = this.languageService.getUI().moviesPageMessages.pageName;
  private welcomeText = this.languageService.getUI().moviesPageMessages.welcomeText;
  private subtitle = this.languageService.getUI().moviesPageMessages.subtitle;
  private category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public languageService: LanguageService,
    public userService: UserService) {
  }

  /**
   * At the page event CanEnter all the movies data array of the user are collected in a variable
   */
  ionViewCanEnter() {
    this.userMoviesData = this.userService.getUser().movies;
    this.category = "to-watch";
  }

}
