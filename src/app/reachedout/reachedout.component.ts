import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup,  Validators} from '@angular/forms' 
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-reachedout',
  templateUrl: './reachedout.component.html',
  styleUrls: ['./reachedout.component.css']
})
export class ReachedoutComponent implements OnInit {
  contactus:any
  constructor() { }

  ngOnInit(): void {
    this.contactus = new FormGroup ({
      uname: new FormControl('',[Validators.required]),
      em: new FormControl('',[Validators.email])   ,   
      des: new FormControl('',[Validators.maxLength(5)])   
  });
}
display (frm:any)
{
alert("hi")
  alert(frm.uname + " :" + frm.em  + ":" +  frm.des)
}


}

