import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Tarcísio'
    },
    {
      id: 2,
      name: 'Clara'
    },
    {
      id: 3,
      name: 'Coronga'
    }
  ];
}
