import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {homepages} from './homepage';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegistrationComponent } from './registration/registration.component';
import { DemoComponent } from './demo/demo.component';
import { MasterComponent } from './master/master.component';
import { ProductComponent } from './product/product.component';
import { BuyComponent } from './buy/buy.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DiscountPipe } from './discount.pipe';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { ReachedoutComponent } from './reachedout/reachedout.component';
import { ChildComponent } from './child/child.component';
// import { ServicesComponent } from './service/service.component';
import { ServicesComponent } from './services/services.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http'

  





@NgModule({
  declarations: [
    AppComponent,homepages, LoginComponent, ContactusComponent, RegistrationComponent, DemoComponent, MasterComponent, ProductComponent, BuyComponent, PagenotfoundComponent, DiscountPipe, 
    ReachedoutComponent, ChildComponent,ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [MasterComponent,PagenotfoundComponent]
})
export class AppModule { }