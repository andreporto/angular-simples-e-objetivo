import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
    apiKey: "AIzaSyDQR8SxXygrnvAAvocvBUlxmSQDFFZxRO0",
    authDomain: "boilerplate-firebase.firebaseapp.com",
    databaseURL: "https://boilerplate-firebase.firebaseio.com",
    storageBucket: "boilerplate-firebase.appspot.com",
    messagingSenderId: "511637081671"
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
