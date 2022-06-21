import { Component, OnInit } from '@angular/core';
import {faBell, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { provideRoutes, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent  {
  b=faBell;
  u=faUser;
  l=faLock;

loginForm:any

 constructor( public ob:Router) 
  {
   

    
   }


validate(abc:any)
  {
if(abc.uid=="admin" && abc.pwd == "india")
{

this.ob.navigate(['./app-product'])

}
else
{
alert("invalid user");
}
}
}

// validate(abc:any)
//   {
// if(abc.uid=="admin" && abc.pwd == "india")
// {
// sessionStorage.setItem("u","admin")
// this.ob.navigate(['./app-products'])

// }
// else
// {
// alert("invalid user");
// }
//   }


// }