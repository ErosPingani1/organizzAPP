import { Injectable } from "@angular/core";
import { LoadingController } from "ionic-angular";
import { LanguageService } from "./language.service";

@Injectable()

export class LoaderService {

    constructor(public loadingCtrl: LoadingController, public languageService: LanguageService) {

    }

    loading: any;

    /**
     * Metod used to show the custom loader as required in the application.
     * The content is radnomly taken from the constant file ui-messages
     */
    presentLoading() {
        let loaderSpinner = 'dots';
        let contentArray = this.languageService.getUI().appLoaderMessages.loaderMessages;
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