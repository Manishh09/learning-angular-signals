import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-without-signals-demo',
  standalone: true,
  imports: [],
  templateUrl: './without-signals-demo.component.html',
  styleUrl: './without-signals-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WithoutSignalsDemoComponent {
search = '';

  users = [
    { id: 1, name: 'Will' },
    { id: 2, name: 'Brendon' },
    { id: 3, name: 'Misko' },
    { id: 4, name: 'Bran' }
  ];

  filteredUsers = this.users;

 
  setSearch(element: Event) {
    const value = (element.target as HTMLInputElement).value;
    this.search = value;
    this.filteredUsers = this.users.filter(user => user.name.startsWith(this.search));

  }

  addUser() {
    this.users = [...this.users, { id: 5, name: 'Alan' }];
    this.filteredUsers = this.users.filter(user => user.name.startsWith(this.search));
  }

}
