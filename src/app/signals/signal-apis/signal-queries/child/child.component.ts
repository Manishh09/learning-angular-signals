import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true

})
export class ChildComponent {
  title = 'Child Component';

  getTitle() {
    return this.title.toLowerCase();
  }
}
