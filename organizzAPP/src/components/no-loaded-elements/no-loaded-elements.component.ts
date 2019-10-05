import { Component, Injectable, Input } from '@angular/core';

@Injectable()

@Component({
  selector: 'no-loaded-elements',
  templateUrl: 'no-loaded-elements.component.html'
})
export class NoLoadedElementsComponent {

  /**
   * Input value used to get the page values from the page component, this way is it possible to customize the component as required
   */
  @Input() pageUi: any

  private imgToLoad: string;
  private imgAlt: string;
  private message: string;

  constructor() {
  }

  /**
   * Once the input is reached it is necessary to process its value in ngOnInit, since the process is launched with angular loading.
   * A switch case checks the pageName variable, in order to know which values must be used to populate the DOM elements
   */
  ngOnInit() {
    switch (this.pageUi.pageName) {
      case "Library":
        this.imgToLoad = "../../assets/icon/book.png";
        this.imgAlt = "no-books-icon";
        this.message = this.pageUi.noBooksMessage;
        break;
      case "Music":
        this.imgToLoad = "../../assets/icon/note.png"
        this.imgAlt = "no-music-icon";
        this.message = this.pageUi.noMusicMessage;
        break;
      case "Movies":
        this.imgToLoad = "../../assets/icon/film.png";
        this.imgAlt = "no-movies-icon";
        this.message = this.pageUi.noMoviesMessage;
        break;
      default:
        break;
    }
  }

}
