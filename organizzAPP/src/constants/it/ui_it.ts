import { Injectable } from "@angular/core";

@Injectable()

export class uiIT {

    public homePageUi = { 
        pageName: 'Home',
        welcomeText: 'Bentornato',
        subtitle: "Organizza la tua vita, vivi più sereno!",
    }

    public booksPageUi = {
        pageName: "Library",
        welcomeText: "Libreria",
        subtitle: "Gestisci la tua lista di libri da leggere",
        noBooksMessage: "È tempo di leggere! Nessun libro nella tua libreria",
        toReadSegment: "Da leggere",
        riddenSegment: "Letti"
    }

    public musicPageUi = {
        pageName: "Music",
        welcomeText: "Musica",
        subtitle: "Scopri ed ascolta nuovi brani musicali",
        noMusicMessage: "Lascia che la musica ti guidi! Aggiungi nuove canzoni alla tua libreria",
        toListenSegment: "Da ascoltare",
        listenedSegment: "Ascoltata"
    }

    public moviesPageUi = {
        pageName: "Movies",
        welcomeText: "Videoteca",
        subtitle: "Immergiti in nuovi film e serie TV",
        noMoviesMessage: "Dimenticati della tua vita sociale! Aggiungi nuovi film e serie TV",
        toWatchSegment: "Da guardare",
        watchedSegment: "Guardati"
    }

    public otherPageUi = {
        pageName: 'Other',
        welcomeText: 'Altro',
        subtitle: "Gestisci tutti i tuoi interessi più profondi!"
    }

    public appLoaderMessages = {
        loaderMessages: ['Pettinando le bambole', 'Mangiando una banana', 'Caricamento infinito', 'Aspettando il tramonto', 'Facendo andare le mani']
    }

}