import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: UserModel = new UserModel(1, 'Default', true);
  action: string = 'Set to Inactive';

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.action = this.user.is_active ? 'Set to Inactive' : 'Set to Active';
  }

  changeUserIsActive() {
    this.userService.changeUserIsActive(this.user.id, !this.user.is_active)
  }
}
