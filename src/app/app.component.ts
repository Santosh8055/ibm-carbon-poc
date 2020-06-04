import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'carbon';
  items = [
    { content: 'one', id: 0 },
    { content: 'two', id: 1 },
    { content: 'three', id: 2 },
    { content: 'four', id: 3 },
  ];
}
