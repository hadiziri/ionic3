import { NgModule, ErrorHandler } from '@angular/core';
//import { LocationStrategy, HashLocationStrategy } from '@angular/common'; //for simple rooting way (not recomanded by angular)
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// custom imports

//import { PAGE4_ROUTER_PROVIDER } from "./page4-routing"; //for simple rooting way (not recomanded by angular)
import { Page4RoutingModule } from "./page4-routing";
import { Page4 } from './page4';

@NgModule({
  declarations: [
    Page4
  ],
  imports: [
    //PAGE4_ROUTER_PROVIDER, //for simple rooting way (not recomanded by angular)
    Page4RoutingModule,
    IonicModule.forRoot(Page4)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Page4
  ],
  providers: [
    //{ provide: LocationStrategy, useClass: HashLocationStrategy }, //for simple rooting way (not recomanded by angular)
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class Page4Module {}