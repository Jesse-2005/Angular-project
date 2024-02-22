import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
user = {
  firstName: 'Jesse',
  lastName: 'Adikibe',
  age: 20,
  email: 'example@gmail.com'
}
}
