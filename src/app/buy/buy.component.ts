import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  pid:any;
  pname:any;
  price:any;  
  q:any
  pimage:any


  constructor(public ob:ActivatedRoute)
   { 
    ob.queryParams.subscribe(c=> { this.pid = c['pid'], this.pname = c['pname'], this.price= c["price"],this.pimage=c["pimage"]})

   }
//    result:any
//  calculate()
//  {
//   var q = (document.getElementById("txtqty") as HTMLInputElement).value
//   this.result = parseInt(q) * this.price
  
//   }
  

  ngOnInit(): void {
  }

}
