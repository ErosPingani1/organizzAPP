import { Injectable } from "@angular/core";
import { UserRepository } from "../repos/user.repository";
import { User } from "../models/user";

@Injectable()

export class UserService {

    constructor(public userRepo: UserRepository) {

    }

    private user: User;

    /**
     * Method used to check whether the user exits or not in the app storage.
     * The method getUserData() of the userRepository is called, when it gives a response if the user is null a new user is created, otherwise 
     * the new session user is setted as the user currently saved in the storage
     */
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

    /**
     * Method used to retreive the active user
     */
    getUser() {
        return this.user;
    }

}