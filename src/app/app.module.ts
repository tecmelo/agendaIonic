import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Contacts } from '@ionic-native/contacts';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {HttpModule} from '@angular/http';
import {ContactosService} from './services/contactos.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CitasComponent} from '../pages/citas/citas.component';
import {NuevaComponent} from '../pages/nueva/nueva.component';
import {ModalContactosComponent} from '../pages/modal-contactos/modal-contactos.component';
import {CitasService} from './services/citas.service';
import { CalendarModule } from "ion2-calendar";
import {EditarComponent} from '../pages/editar/editar.component';
import { GoogleMaps } from '@ionic-native/google-maps';
import {LugarService} from './services/lugar.service';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { GooglePlacesAutocompleteComponentModule } from 'ionic2-google-places-autocomplete';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ModalContactosComponent,
    NuevaComponent,
    CitasComponent,
    EditarComponent,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CalendarModule,
    GooglePlacesAutocompleteComponentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ModalContactosComponent,
    CitasComponent,
    NuevaComponent,
    EditarComponent,
    TabsPage
  ],
  providers: [
    StatusBar,
    ContactosService,
    LocalNotifications,
    CitasService,
    GoogleMaps,
    LugarService,
    SplashScreen,
    Contacts,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
