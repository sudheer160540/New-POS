import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {TablelayoutComponent} from './tablelayout/tablelayout.component';
import {ViewmenuComponent} from './viewmenu/viewmenu.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {RestaurantTypeComponentComponent} from './restaurant-type-component/restaurant-type-component.component';
export  const menurouting:Routes=[
  {path:'',redirectTo:'userlogin',pathMatch:'full'},
  {path:'restarenttype',component:RestaurantTypeComponentComponent},
   {path:'table',component:TablelayoutComponent},
  {path:'userlogin',component:LoginComponentComponent},
];
export  const routes:ModuleWithProviders=RouterModule.forRoot(menurouting)