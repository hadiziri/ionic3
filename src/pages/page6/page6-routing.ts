/*
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// custom imports
import { Page6 } from './page6';
import { Page6DetailComponent } from './page6-detail';

export const PAGE6_ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(
    [
        { path: 'PageSix', component: Page6 ,
          children: [
            {
            path: ':id',
            component: Page6DetailComponent
            }
          ]
        }
    ] , {useHash: false});
*/


//-- angular2 routing way ------------------------------------------------------//

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// custom imports
import { Page6 } from './page6';
import { Page6DetailComponent } from './page6-detail';

const page6Routes: Routes = [
  { path: 'PageSix', component: Page6 ,
      children: [
       {
        path: ':id',
        component: Page6DetailComponent
       }
      ]
  } 
];

@NgModule({
  imports: [
    RouterModule.forChild(page6Routes)
  ],
  exports: [
    RouterModule
  ]
})   

export class Page6RoutingModule { }    

   