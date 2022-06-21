import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount'
})
export class DiscountPipe implements PipeTransform {

  transform(a:number,b:number):number {
    return a=(a*b)/100;
  }

}
