import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { ItensRoutingModule } from './itens-routing.module';
import { ItemFormularioComponent } from './item-formulario/item-formulario.component';


@NgModule({
  declarations: [ItemComponent, ItemFormularioComponent],
  imports: [
    CommonModule,
    ItensRoutingModule,
    AppMaterialModule,
    SharedModule,

  ],
})
export class ItensModule {}
