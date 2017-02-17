import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

// this constant must be replaced by your own data from Google's firebase application site
export const firebaseConfig = {
    apiKey: "seus dados",
    authDomain: "sua-aplicacao.firebaseapp.com",
    databaseURL: "https://sua-aplicacao.firebaseio.com",
    storageBucket: "sua-aplicacao.appspot.com",
    messagingSenderId: "seus dados"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
