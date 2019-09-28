import { Injectable } from "@angular/core";
import { UserRepository } from "../repos/user.repository";
import { User } from "../models/user";

@Injectable()

export class UserService {

    constructor(public userRepo: UserRepository) {

    }

    private user: User;

    checkUserExists() {
        this.userRepo.getUserData().then(
            (user) => {
                if (user === null) {
                    this.userRepo.setUserData();
                    this.checkUserExists();
                } else {
                    this.user = user;
                    console.log(this.user);
                }
            }
        );
    }

    getUser() {
        return this.user;
    }

}