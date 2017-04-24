/*
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// custom imports
import { Page5 } from './page5';
import { Page5DetailComponent } from './page5-detail';

export const PAGE5_ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(
    [
        { path: 'PageFive', component: Page5 },
        { path: 'PageFive/:id', component: Page5DetailComponent }
    ] , {useHash: false});
*/

//-- angular2 routing way ------------------------------------------------------//

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom imports
import { Page5 } from './page5';
import { Page5DetailComponent } from './page5-detail';

const page5Routes: Routes = [
  { path: 'PageFive', component: Page5 },
  { path: 'PageFive/:id', component: Page5DetailComponent }  
];

@NgModule({
  imports: [
    RouterModule.forChild(page5Routes)
  ],
  exports: [
    RouterModule
  ]
})

//-- angular2 rooting way ------------------------------------------------------//    

export class Page5RoutingModule { }