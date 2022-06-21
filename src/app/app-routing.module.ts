import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy/buy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { homepages } from './homepage';
import { LoginComponent } from './login/login.component';
import { MyguardGuard } from './myguard.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ReachedoutComponent } from './reachedout/reachedout.component';
import { RegistrationComponent } from './registration/registration.component';
// import { ServicesComponent } from './Services/Services.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
{
  path:'homepage',
  component:homepages
 },
 {
path:'app-login',
component:LoginComponent
 },
 {
path:'app-registration',
component:RegistrationComponent

 },
 {
  path:'app-product',
  component:ProductComponent
 }
 , 
 {
  path:'app-buy',canActivate:[MyguardGuard],
  component:BuyComponent 
 }
 ,
 {
   path:'app-contactus',
   component:ContactusComponent
 }
 ,
 {
   path:'app-reachedout',
   component:ReachedoutComponent
 }
 ,{
  path:'app-services',
  component:ServicesComponent
}
 ,
 {
   path:'',
   component:homepages
 }
 ,
 {
  path:'**',
  component:PagenotfoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
