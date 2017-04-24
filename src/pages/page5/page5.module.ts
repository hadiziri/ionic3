import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

// custom imports
import { Page5RoutingModule } from "./page5-routing";

import { Page5 } from './page5';
import { Page5DetailComponent } from './page5-detail';

import { Page5Service }  from './page5.service';


@NgModule({
  declarations: [
    Page5,
    Page5DetailComponent
  ],
  imports: [    
    Page5RoutingModule,
    IonicModule.forRoot(Page5)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Page5    
  ],
  providers: [
    Page5Service,      
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class Page5Module {}