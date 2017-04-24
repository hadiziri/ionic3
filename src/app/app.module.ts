import { NgModule, ErrorHandler } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

//ionic 3 imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';

// custom imports
import { MyApp } from './app.component';
import { APP_ROUTER_PROVIDER } from "./app.router";

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';

import { Page4Module } from '../pages/page4/page4.module';
import { Page5Module } from '../pages/page5/page5.module';
import { Page6Module } from '../pages/page6/page6.module';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3
    
  ],
  imports: [
    APP_ROUTER_PROVIDER,
    Page4Module,
    Page5Module,
    Page6Module,
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule ,
    IonicModule.forRoot(MyApp)  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: ErrorHandler, useClass: IonicErrorHandler },   
    SplashScreen
  ]
})
export class AppModule {}