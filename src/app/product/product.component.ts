import { Component, OnInit } from '@angular/core';
import { DiscountPipe } from '../discount.pipe';
import { MylibraryService } from '../mylibrary.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[MylibraryService]
})
export class ProductComponent implements OnInit {
prod:any=[
  {pid:100,pname:"airpods",pdesc:"Made in india", Price:1000,pimage:'/assets/airpods.jpg'},
  {pid:200,pname:"headset",pdesc:"Made in india", Price:2000,pimage:'/assets/headset.jpg'},
  {pid:300,pname:"laptop",pdesc:"Made in india", Price:15000,pimage:'/assets/laptop.jpg'},
  {pid:400,pname:"vaccum",pdesc:"Made in india", Price:30000,pimage:'/assets/vaccum.jpg'},
  {pid:500,pname:"watch",pdesc:"Made in india", Price:900,pimage:'/assets/watch.jpg'},
  {pid:600,pname:"AC",pdesc:"Made in india", Price:80000,pimage:'/assets/ac.jpg'},
    ]

  constructor(ob:MylibraryService) 
  {
    this.prod=ob.prod;
   }

  ngOnInit(): void {
  }
  
      b:boolean=true
      display()
      {
        this.b=!this.b
      }
}
