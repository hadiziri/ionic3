import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// custom imports

import { Page6RoutingModule } from "./page6-routing";

import { Page6 } from './page6';
import { Page6DetailComponent } from './page6-detail';

import { Page6Service }  from './page6.service';

@NgModule({
  declarations: [
    Page6,
    Page6DetailComponent
  ],
  imports: [    
    Page6RoutingModule,    
    IonicModule.forRoot(Page6)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Page6
  ],
  providers: [
      Page6Service,    
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class Page6Module {}