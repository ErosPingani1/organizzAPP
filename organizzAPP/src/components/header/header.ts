import { Component, Injectable, Input } from '@angular/core';

@Injectable()

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  /**
   * Input values used to populate the elements of the custom component
   * title: title of the page where the header must be loaded
   * subtitle: subtitle of the page where the header must be loaded  
   * page: name of the page where the header must be loaded
   * loadedObjects: number of objects loaded into the page
   */
  @Input() title: string;
  @Input() subtitle: string;
  @Input() page: string;
  @Input() loadedObjects: number;

  constructor() {
  }

}
