import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmService } from './fcm.service';

const firebase = {
  // your firebase web config
  apiKey: 'AIzaSyCTUPp9EkSDi7ryh7zEmT0DxWCLNlm0gKg',
  authDomain: 'remote-reminder-c809a.firebaseapp.com',
  databaseURL: 'https://remote-reminder-c809a.firebaseio.com',
  projectId: 'remote-reminder-c809a',
  storageBucket: '',
  messagingSenderId: '525418465351',
  appId: '1:525418465351:web:f94907896afec13e'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FcmService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
