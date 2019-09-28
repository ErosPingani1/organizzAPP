import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { uiMessages } from '../../constants/ui-messages';
import { Book } from '../../models/book';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'page-books',
  templateUrl: 'books.html',
})
export class BooksPage {

  userBooksData: Book[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public uiMessages: uiMessages,
    public userService: UserService) {
  }

  private pageName = "";
  private welcomeText = this.uiMessages.booksPageMessages.welcomeText;
  private subtitle = this.uiMessages.booksPageMessages.subtitle;
  private noBooksText = this.uiMessages.booksPageMessages.noBooksMessage;
  private category: string;

  ionViewCanEnter() {
    this.userBooksData = this.userService.getUser().books;
    this.category = "to-read";
  }

  ionViewDidLoad() {
  }

}
