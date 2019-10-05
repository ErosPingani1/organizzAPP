import { Injectable } from "@angular/core";

@Injectable()

export class uiIT {

    public homePageUi = { 
        pageName: 'Home',
        welcomeText: 'Bentornato',
        subtitle: "Organizza la tua vita, vivi più sereno!",
    }

    public booksPageUi = {
        pageName: "Libreria",
        welcomeText: "Libreria",
        subtitle: "Gestisci la tua lista di libri da leggere",
        noBooksMessage: "E' tempo di leggere! Nessun libro nella tua libreria",
        toReadSegment: "Da leggere",
        riddenSegment: "Letti"
    }

    public musicPageUi = {
        pageName: "Musica",
        welcomeText: "Musica",
        subtitle: "Scopri ed ascolta nuovi brani musicali",
        toListenSegment: "Da ascoltare",
        listenedSegment: "Ascoltata"
    }

    public moviesPageUi = {
        pageName: "Videoteca",
        welcomeText: "Videoteca",
        subtitle: "Immergiti in nuovi film e serie TV",
        toWatchSegment: "Da guardare",
        watchedSegment: "Guardati"
    }

    public otherPageUi = {
        pageName: 'Altro',
        welcomeText: 'Altro',
        subtitle: "Gestisci tutti i tuoi interessi più profondi!"
    }

    public appLoaderMessages = {
        loaderMessages: ['Pettinando le bambole', 'Mangiando una banana', 'Caricamento infinito', 'Aspettando il tramonto', 'Facendo andare le mani']
    }

}