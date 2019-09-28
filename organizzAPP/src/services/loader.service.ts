import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";
import { uiMessages } from "../constants/ui-messages";

@Injectable()

export class LoaderService {

    constructor(public loadingCtrl: LoadingController, public uiMessages: uiMessages) {

    }

    loading: any;

    /**
     * Metod used to show the custom loader as required in the application.
     * The content is radnomly taken from the constant file ui-messages
     */
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

    /**
     * Method called to close the loader
     */
    closeLoading() {
        this.loading.dismiss();
    }

}