import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  custid:number=100;
  custname:string="ajay"
  age:number=34;
  s:string = "http://google.com"
  f: string= "http://facebook.com"
  m:string="praveen"
}
