import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

// custom imports
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';


export const APP_ROUTER_PROVIDER: ModuleWithProviders = RouterModule.forRoot(
    [
        { path: '', redirectTo:'/PageOne', pathMatch:'full' },
        { path: 'MyApp', component: MyApp },
        { path: 'PageOne', component: Page1 },
        { path: 'PageTwo', component: Page2 },
        { path: 'PageThree', component: Page3 }
        
    ] , {useHash: false});