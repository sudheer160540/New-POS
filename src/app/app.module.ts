import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routes} from './app.menurouting';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { TablelayoutComponent } from './tablelayout/tablelayout.component';
import { ViewmenuComponent } from './viewmenu/viewmenu.component';
import { RestaurantTypeComponentComponent } from './restaurant-type-component/restaurant-type-component.component';
import { MenulistComponent } from './menulist/menulist.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    TablelayoutComponent,
    ViewmenuComponent,
    RestaurantTypeComponentComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
