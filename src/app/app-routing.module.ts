import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './animation/animation.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';

const routes: Routes = [
  {path :'login',component : LoginComponent},
  {path :'items',component : ItemsComponent},
  {path :'itemsdetails',component : ItemdetailsComponent},
  {path :'myorder',component : MyOrdersComponent},
  {path :'main',component : MainComponent},
  {path :'animation',component : AnimationComponent},
  {path :'**',component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
