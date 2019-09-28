import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { User } from "../models/user";

@Injectable()

export class UserRepository {

    constructor(private storage: Storage) {

    }

    /**
     * Promise used to get the user data from the local JSON file 'user-json', the user is then given as result of the promise
     */
    getUserData(): Promise<any> {
        return new Promise<any>(
            (resolve) => {
                this.storage.get('user-json').then(
                    (user) => {
                        resolve(user);
                    }
                )
            }
        )
    }

    /**
     * Method used to save a new user in the user-json data file
     */
    setUserData() {
        this.storage.set('user-json', this.createNewUser());
    }

    /**
     * Method used to create a new user with the default User constructor
     */
    createNewUser() {
        let user = new User();
        return user;
    }

}