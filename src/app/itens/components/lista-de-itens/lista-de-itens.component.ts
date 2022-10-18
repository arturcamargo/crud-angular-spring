import { Item } from '../../model/item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-de-itens',
  templateUrl: './lista-de-itens.component.html',
  styleUrls: ['./lista-de-itens.component.scss'],
})
export class ListaDeItensComponent implements OnInit {
  @Input() itens$: Item[] = [];
  @Output() adiciona = new EventEmitter(false)

  readonly displayedColumns: string[] = [
    'categoria',
    '_id',
    'tarefa',
    'responsavel',
    'acoes',
  ];

  constructor() {}

  ngOnInit(): void {
    /* TODO document why this method 'ngOnInit' is empty */
  }

  adicionar() {
    this.adiciona.emit(true);

  }
}
