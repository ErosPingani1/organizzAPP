import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';
import { User } from "../models/user";

@Injectable()

export class UserRepository {

    constructor(private storage: Storage) {

    }

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

    setUserData() {
        this.storage.set('user-json', this.createNewUser());
    }

    createNewUser() {
        let user = new User();
        return user;
    }

}