import { Book } from "./book";
import { Movie } from "./movie";
import { Music } from "./music";

export class User {

    username: string;
    pic: string;
    books: Book[];
    movies: Movie[];
    music: Music[];
    other: any[];

    constructor() {
        this.username = "Utente";
        this.pic = "";
        this.books = [];
        this.movies = [];
        this.music = [];
        this.other = [];
    }
    
}