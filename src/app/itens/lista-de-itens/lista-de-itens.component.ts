import { Router, ActivatedRoute } from '@angular/router';
import { Item } from './../model/item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-itens',
  templateUrl: './lista-de-itens.component.html',
  styleUrls: ['./lista-de-itens.component.scss'],
})
export class ListaDeItensComponent implements OnInit {

  @Input() itens$: Item[] = [];

  readonly displayedColumns: string[] = ['categoria','_id', 'tarefa', 'responsavel', 'acoes'];


  constructor(
    private roteador: Router,
    private rota: ActivatedRoute
    ) {}

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  adicionar(){
    this.roteador.navigate(['novo'], {relativeTo: this.rota})
    console.log('adicionei')
  }

}
