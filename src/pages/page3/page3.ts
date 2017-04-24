import { Component } from '@angular/core';


/*
  Generated class for the Page3 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html'
})
export class Page3 {

  constructor() {

    /*
    let headerheight = document.getElementById('p3header').offsetHeight;
    //let headerheight = document.getElementById('p3header').clientHeight;
    let footerheight = document.getElementById('p3footer').style.height;
                       
    let w = window.innerWidth;
    let h = window.innerHeight;
    alert ('test :'+w+' '+h+' '+footerheight);

    console.log("width : "+w+"  height : "+ h+ " footer height : "+ footerheight);
    console.log("width : "+w+"  height : "+ h+ " heder height : "+ headerheight + " footer height : "+ footerheight);
    */
  }

  ionViewDidLoad() {
    console.log('Hello from Page3 Page');
    
  }

  ionViewDidEnter() {    
    
  }

}
