import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { uiMessages } from '../../constants/ui-messages';
import { UserService } from '../../services/user.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  userMoviesData: Movie[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public uiMessages: uiMessages,
    public userService: UserService) {
  }

  private pageName = this.uiMessages.moviesPageMessages.pageName;
  private welcomeText = this.uiMessages.moviesPageMessages.welcomeText;
  private subtitle = this.uiMessages.moviesPageMessages.subtitle;
  private category: string;

  /**
   * At the page event CanEnter all the movies data array of the user are collected in a variable
   */
  ionViewCanEnter() {
    this.userMoviesData = this.userService.getUser().movies;
    this.category = "to-watch";
  }

}
