import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ItemFormularioComponent } from './item-formulario/item-formulario.component';
import { ItemComponent } from './item/item.component';
import { ItensRoutingModule } from './itens-routing.module';
import { ListaDeItensComponent } from '../itens/lista-de-itens/lista-de-itens.component';

@NgModule({
  declarations: [ItemComponent, ItemFormularioComponent, ListaDeItensComponent],
  imports: [
    CommonModule,
    ItensRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ItensModule {}
