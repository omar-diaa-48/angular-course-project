import { EventEmitter, Injectable } from "@angular/core";
import { UserModel } from "../models/user.model";

@Injectable()
export class UsersService {
    changeHappened = new EventEmitter();

    data: UserModel[] = [
        new UserModel(1, 'Max', true),
        new UserModel(2, 'Anna', true),
        new UserModel(3, 'Chris', false),
        new UserModel(4, 'Manu', false),
    ]

    changeUserIsActive(id: number, is_active: boolean) {
        this.data = this.data.map((user) => {
            if (user.id === id) {
                user.is_active = is_active;
            }

            return user;
        })

        this.changeHappened.emit();
    }
}