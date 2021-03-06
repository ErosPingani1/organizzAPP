import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BooksPage } from '../pages/books/books';
import { MusicPage } from '../pages/music/music';
import { MoviesPage } from '../pages/movies/movies';
import { OtherPage } from '../pages/other/other';
import { uiIT } from '../constants/it/ui_it';
import { uiEN} from '../constants/en/ui_en';
import { UserService } from '../services/user.service';
import { UserRepository } from '../repos/user.repository';
import { IonicStorageModule } from '@ionic/storage';
import { LoaderService } from '../services/loader.service';
import { LanguageService } from '../services/language.service';
import { HeaderComponent } from '../components/header/header.component';
import { NoLoadedElementsComponent } from '../components/no-loaded-elements/no-loaded-elements.component';
import { NoElementsFabComponent } from '../components/no-elements-fab/no-elements-fab.component';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BooksPage,
    MusicPage,
    MoviesPage,
    OtherPage,
    HeaderComponent,
    NoLoadedElementsComponent,
    NoElementsFabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BooksPage,
    MusicPage,
    MoviesPage,
    OtherPage,
    HeaderComponent,
    NoLoadedElementsComponent,
    NoElementsFabComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    uiIT,
    uiEN,
    UserService,
    UserRepository,
    LoaderService,
    LanguageService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
