import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";
import { uiMessages } from "../constants/ui-messages";

@Injectable()

export class LoaderService {

    constructor(public loadingCtrl: LoadingController, public uiMessages: uiMessages) {

    }

    loading: any;

    presentLoading() {
        let loaderSpinner = 'dots';
        let contentArray = this.uiMessages.homePageMessages.loaderMessages;
        let loaderContent = contentArray[Math.floor(Math.random() * contentArray.length)];
        this.loading = this.loadingCtrl.create({
            spinner: loaderSpinner,
            content: loaderContent
        })

        this.loading.present();
    }

    closeLoading() {
        this.loading.dismiss();
    }

}