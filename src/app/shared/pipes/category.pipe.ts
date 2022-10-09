import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(valor: string): string {
    switch(valor){
      case 'cozinha': return 'blender'
      case 'roupas': return 'local_laundry_service'
      case 'limpeza': return 'cleaning_services'
    }
    return 'home_work';
  }

}
