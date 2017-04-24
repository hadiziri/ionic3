
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
//import { StatusBar, Splashscreen } from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  selectedPage:String = "Home";

  appRoutes = [
      
      {title : "Home", routerLink : "/" },
      {title : "Page 1", routerLink : "/PageOne" },
      {title : "Page 2", routerLink : "/PageTwo" },
      {title : "Page 3", routerLink : "/PageThree" },
      {title : "Page 4", routerLink : "/PageFour" },
      {title : "Page 5", routerLink : "/PageFive" },
      {title : "Page 6", routerLink : "/PageSix" }
      
  ];
      
  constructor(public platform: Platform,public splashScreen: SplashScreen) {
    
      this.initializeApp();  
    
  }
   
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      //SplashScreen.hide();
      this.splashScreen.hide();
    });       
  }
  
  selectPage(page){
        this.selectedPage = page;
    }  
    
}