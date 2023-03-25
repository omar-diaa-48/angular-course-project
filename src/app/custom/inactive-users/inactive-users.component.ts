import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: UserModel[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.data.filter((user) => !user.is_active);
  }
}
