import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../product.model';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(list: product[], asc: boolean = true, sortOn: string) {
    if (!list || list.length <= 1) {
      return list;
    }

    return list.sort((a, b) => {
      if (sortOn === 'price') {
        return asc ? a.price - b.price : b.price - a.price;
      } else if (sortOn === 'quantity') {
        return asc ? a.quantity - b.quantity : b.quantity - a.quantity;
      } else {
        return 0;
      }
    });
  }
}
