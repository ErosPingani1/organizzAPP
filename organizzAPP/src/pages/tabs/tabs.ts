import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BooksPage } from '../books/books';
import { MusicPage } from '../music/music';
import { MoviesPage } from '../movies/movies';
import { OtherPage } from '../other/other';
import { uiMessages } from '../../constants/ui-messages';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  booksPage = BooksPage;
  musicPage = MusicPage;
  moviesPage = MoviesPage;
  otherPage = OtherPage;

  constructor(public uiMessages: uiMessages) {

  }

  homePageName = " ";
  booksPageName = " ";
  musicPageName = " ";
  moviesPageName = " ";
  otherPageName = " ";

  /**
   * Method called when a new tab is clicked, depending on the selected page value only the value for that specific page is set in order to clear
   * all the other names and leave the tabsBar elements without names under the icon
   * @param page 
   */
  setPageName(page: string) {
    this.clearAllPageNames();
    switch(page) {
      case 'home':
        this.homePageName = this.uiMessages.homePageMessages.pageName;
        break;
      case 'books':
        this.booksPageName = this.uiMessages.booksPageMessages.pageName;
        break;
      case 'music':
        this.musicPageName = this.uiMessages.musicPageMessages.pageName;
        break;
      case 'movies':
        this.moviesPageName = this.uiMessages.moviesPageMessages.pageName;
        break;
      case 'other':
        this.otherPageName = this.uiMessages.otherPageMessages.pageName;
        break;
    }
  }

  /**
   * Method used to clear all the tabs titles 
   */
  clearAllPageNames() {
    this.homePageName = " ";
    this.booksPageName = " ";
    this.musicPageName = " ";
    this.moviesPageName = " ";
    this.otherPageName = " ";
  }

}
