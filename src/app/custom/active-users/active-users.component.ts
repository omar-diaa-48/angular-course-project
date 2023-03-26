import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  users: UserModel[] = [];

  constructor(private userService: UsersService) {
    this.userService.changeHappened.subscribe(
      () => {
        this.users = this.userService.data.filter((user) => user.is_active);
      }
    )
  }

  ngOnInit(): void {
    this.users = this.userService.data.filter((user) => user.is_active);
  }
}
