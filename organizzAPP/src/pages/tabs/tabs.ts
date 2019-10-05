import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BooksPage } from '../books/books';
import { MusicPage } from '../music/music';
import { MoviesPage } from '../movies/movies';
import { OtherPage } from '../other/other';
import { LanguageService } from '../../services/language.service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homePage = HomePage;
  booksPage = BooksPage;
  musicPage = MusicPage;
  moviesPage = MoviesPage;
  otherPage = OtherPage;

  constructor(public languageService: LanguageService) {

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
        this.homePageName = this.languageService.getUI().homePageUi.pageName;
        break;
      case 'books':
        this.booksPageName = this.languageService.getUI().booksPageUi.pageName;
        break;
      case 'music':
        this.musicPageName = this.languageService.getUI().musicPageUi.pageName;
        break;
      case 'movies':
        this.moviesPageName = this.languageService.getUI().moviesPageUi.pageName;
        break;
      case 'other':
        this.otherPageName = this.languageService.getUI().otherPageUi.pageName;
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
