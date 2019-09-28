import { Injectable } from "@angular/core";
import { uiIT } from "../constants/it/ui_it";
import { uiEN } from "../constants/en/ui_en";

@Injectable() 

export class LanguageService {

    constructor(public uiMessagesIT: uiIT, public uiMessagesEN: uiEN) {

    }

    private ui: any;

    /**
     * Method used to set the class containing the Italian layout as default ui of the application
     */
    setUILanguageIT() {
        this.ui = this.uiMessagesIT;
    }

    /**
     * Method used to set the class containing the English layout as default ui of the application
     */
    setUILanguageEN() {
        this.ui = this.uiMessagesEN;
    }

    /**
     * Getter of the ui element used containing all the ui elements for language
     */
    getUI(): any {
        return this.ui;
    }

}