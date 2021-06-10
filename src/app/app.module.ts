import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ItemService } from './item.service';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CartService } from './cart.service';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ItemsComponent,
    ItemdetailsComponent,
    MyOrdersComponent,
    MainComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    HttpClientModule
  ],
  providers: [ItemService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
