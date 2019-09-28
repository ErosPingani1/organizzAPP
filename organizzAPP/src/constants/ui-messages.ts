import { Injectable } from "@angular/core";

@Injectable()

export class uiMessages {

    public homePageMessages = { 
        pageName: 'Home',
        subtitle: "Organizza la tua vita, vivi più sereno!",
        loaderMessages: ['Pettinando le bambole', 'Mangiando una banana', 'Caricamento infinito', 'Aspettando il tramonto']
    }

    public booksPageMessages = {
        pageName: "Libreria",
        welcomeText: "Libreria",
        subtitle: "Gestisci la tua lista di libri da leggere",
        noBooksMessage: "E' tempo di leggere! Nessun libro nella tua libreria"
    }

    public musicPageMessages = {
        pageName: "Musica",
        welcomeText: "Musica",
        subtitle: "Scopri ed ascolta nuovi brani musicali"
    }

    public moviesPageMessages = {
        pageName: "Videoteca",
        welcomeText: "Videoteca",
        subtitle: "Immergiti in nuovi film e serie TV"
    }

    public otherPageMessages = {
        pageName: 'Altro',
        welcomeText: 'Altro',
        subtitle: "Gestisci tutti i tuoi interessi più profondi!"
    }

}