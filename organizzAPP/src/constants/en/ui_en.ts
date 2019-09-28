import { Injectable } from "@angular/core";

@Injectable()

export class uiEN {

    public homePageMessages = { 
        pageName: 'Home',
        welcomeText: 'Welcome back',
        subtitle: "Organize you life, live easier!",
    }

    public booksPageMessages = {
        pageName: "Library",
        welcomeText: "Library",
        subtitle: "Manage your to-read list",
        noBooksMessage: "It's time to read! No books in your library"
    }

    public musicPageMessages = {
        pageName: "Music",
        welcomeText: "Music",
        subtitle: "Discover and listen new songs"
    }

    public moviesPageMessages = {
        pageName: "Movies",
        welcomeText: "Movies",
        subtitle: "Dive into new movies and TV series"
    }

    public otherPageMessages = {
        pageName: 'Other',
        welcomeText: 'Other',
        subtitle: "Manage all your deepest interests"
    }

    public appLoaderMessages = {
        loaderMessages: ['Combing the dolls', 'Eating a banana', 'Infinite loading', 'Waiting for sunset']
    }

}