import { Component, OnInit } from'@angular/core';
import { MywebapiserviceService } from './mywebapiservice.service';
//import {MylibraryService} from '../Mylibrary.services'
@Component({
  selector: 'homepages',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
  providers:[MywebapiserviceService]
  //providers:['./MylibraryService']
})
export class homepages implements OnInit  {

 
  stud:any
    constructor(private ob:MywebapiserviceService)  {
    }
  
    ngOnInit(): void {
  
    
  
    }
  
    Addstudents(frm:any)
  {
     this.ob.AddNewStudents(frm).subscribe(c=> alert("Added New Students"))
  
  }
  
  }
  
  