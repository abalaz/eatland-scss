import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { LogoutPageComponent } from './components/logout-page/logout-page.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent },
  {path: 'home', component: IndexPageComponent} ,
  {path: 'menu', component: MenuPageComponent },
  {path:'articles', component: ArticlesComponent},
  {path:'setting', component: LogoutPageComponent },
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
