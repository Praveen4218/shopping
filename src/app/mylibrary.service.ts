import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MylibraryService {

  constructor() { }
  prod:any=[
    {pid:100,pname:"TV",pdesc:"Made in india", Price:10000,pimage:'/assets/tv.jpg'},
    {pid:200,pname:"Watch",pdesc:"Made in india", Price:2000,pimage:'/assets/b.jpg'},
    {pid:300,pname:"Fridge",pdesc:"Made in india", Price:15000,pimage:'/assets/Fridge.jpg'},
    {pid:400,pname:"Mouse",pdesc:"Made in india", Price:900,pimage:'/assets/mouse.jpg'},
    {pid:500,pname:"AC",pdesc:"Made in india", Price:80000,pimage:'/assets/ac.jpg'},
    {pid:600,pname:"Projector",pdesc:"Made in india", Price:80000,pimage:'/assets/projector.jpg'},
    {pid:700,pname:"Washing Machine",pdesc:"Made in india", Price:9000,pimage:'/assets/washingmachine.jpg'},
    {pid:800,pname:"Mobile",pdesc:"Made in india", Price:16000,pimage:'/assets/mobile.jpg'},
    {pid:900,pname:"Monitor",pdesc:"Made in india", Price:40000,pimage:'/assets/monitor.jpg'},
      ]

      
      

  Addnumbers(a:number, b:number)
  {

var result = a+b;
return "the sum is :" + result

  }

  multiplyumbers(a:number, b:number)
  {

var result = a+b;
return "the multiplication is :" + result

  }

  dividenumbers(a:number, b:number)
  {

var result = a+b;
return "the division is :" + result

  }

}
