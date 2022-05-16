import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CartComponent } from './components/cart/cart.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    CartComponent,
    IndexPageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    MenuPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
