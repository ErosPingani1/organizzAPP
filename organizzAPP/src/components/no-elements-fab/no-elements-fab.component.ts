import { Component, Injectable, animate, transition, trigger, style, state } from '@angular/core';

@Injectable()

@Component({
  selector: 'no-elements-fab',
  templateUrl: 'no-elements-fab.html',
  animations: [
    trigger('fabSlideIn', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('250ms ease-in', style({ transform: 'translateX(0%) ' }))
      ]),
    ])
  ]
})
export class NoElementsFabComponent {

  constructor() {
  }

}
