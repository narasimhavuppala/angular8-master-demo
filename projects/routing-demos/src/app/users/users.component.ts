import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Raja'
    },
    {
      id: 2,
      name: 'Padmavathi'
    },
    {
      id: 3,
      name: 'Sravya'
    }
  ];
}
