import { Component, Injectable, Input } from '@angular/core';

@Injectable()

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  /**
   * Input values used to populate the elements of the custom component
   * pageUi: Ui elements of the page used to populate the header custom element depending of the page using it
   * loadedObjects: Number of objects loaded in the page array, in order to show a different action icon onthe page depending on the necessity
   */
  @Input() pageUi: any;
  @Input() loadedObjects: number;

  constructor() {
  }

}
