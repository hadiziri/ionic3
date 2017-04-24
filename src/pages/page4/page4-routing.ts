
/*
//-- simple routing way not recomanded by ANGULAR-------------------------------//

import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// custom imports
import { Page4 } from './page4';

export const PAGE4_ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(
    [
        //{ path: '', redirectTo:'/PageFour', pathMatch:'full' },
        { path: 'PageFour', component: Page4 }
    ] , {useHash: false});

//-- simple routing way not recomanded by ANGULAR-------------------------------//

*/


//-- angular2 routing way ------------------------------------------------------//

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom imports
import { Page4 } from './page4';

const page4Routes: Routes = [
  { path: 'PageFour', component: Page4 }  
];

@NgModule({
  imports: [
    RouterModule.forChild(page4Routes)
  ],
  exports: [
    RouterModule
  ]
})

//-- angular2 rooting way ------------------------------------------------------//

export class Page4RoutingModule { }