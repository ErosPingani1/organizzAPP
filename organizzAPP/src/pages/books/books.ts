import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Book } from '../../models/book';
import { UserService } from '../../services/user.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  private userBooksData: Book[];
  private booksPageUi = this.languageService.getUI().booksPageUi;
  private category: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public languageService: LanguageService,
    public userService: UserService) {
  }

  /**
   * At the page event CanEnter all the books data array of the user are collected in a variable
   */
  ionViewCanEnter() {
    this.userBooksData = this.userService.getUser().books;
    this.category = "to-read";
  }

}
