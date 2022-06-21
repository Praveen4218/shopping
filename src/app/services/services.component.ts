import { Component, OnInit } from '@angular/core';
import {MywebapiserviceService} from '../mywebapiservice.service'


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers:[MywebapiserviceService]
})
export class ServicesComponent implements OnInit {

  constructor(public ob:MywebapiserviceService) { }

 res:any;
  ngOnInit(): void {

 this.ob.DisplayStudents().subscribe(o => this.res  = o);

  }




}



