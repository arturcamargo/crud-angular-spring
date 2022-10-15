import { ItemFormularioComponent } from './item-formulario/item-formulario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: ItemComponent },
  { path: 'novo', component: ItemFormularioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItensRoutingModule {}
