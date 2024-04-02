import { Pipe, PipeTransform } from '@angular/core';
import { product } from '../../product.model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(list: product[], filterBy: string) {
    if (filterBy === '' || filterBy === 'All' || list.length === 0) {
      return list;
    } else {
      return list.filter((elem) => {
        return (
          elem.category
            .toLocaleLowerCase()
            .includes(filterBy.toLocaleLowerCase()) ||
          elem.name.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase())
        );
      });
    }
  }
}
