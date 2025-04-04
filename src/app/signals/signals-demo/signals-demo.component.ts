import { CommonModule, NgFor } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss'
})
export class SignalsDemoComponent {

  search = signal<string>('');

  users = signal([
    { id: 1, name: 'Robert' },
    { id: 2, name: 'Lucy' },
    { id: 3, name: 'Leo' },
    { id: 4, name: 'Brown' }
  ]);

  // COMPUTED API
  filteredUsers = computed(() => this.users().filter(user => user.name.startsWith(this.search())));


  setSearch(element: Event) {
    const value = (element.target as HTMLInputElement).value;

    // SET API
    this.search.set(value);
    //this.filteredUsers = this.users().filter(user => user.name.startsWith(this.search()));
  }

  addUser() {
    // UPDATE API
    this.users.update(users => [...users, { id: 5, name: 'Ram' }]);
    //this.filteredUsers = this.users().filter(user => user.name.startsWith(this.search()));
  }

}