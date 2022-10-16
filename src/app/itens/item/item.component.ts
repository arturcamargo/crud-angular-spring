import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Item } from './../model/item';
import { ItensService } from './../services/itens.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  itens$: Observable<Item[]>;

  constructor(
    private ItensService: ItensService,
    public dialog: MatDialog,
    private roteador: Router,
    private rota: ActivatedRoute
     ) {
    this.itens$ = this.ItensService
    .listar()
    .pipe(
      catchError(() => {
        this.seAcontecerErro('Cleirovandis roubou o que ia ser exibido aqui kk')
        return of([]);
      })
    );
    // this.item = [];
    // posso inicializar lá em cima, quando declaro a variável, como eu fiz (a variável item é um array vazio do tipo Item)
    // também posso inicializar no construtor, dizendo que o item é um array vazio
  }

  seAcontecerErro(mensagem: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: mensagem,
    });
  }

  adicionar(){
    this.roteador.navigate(['novo'], {relativeTo: this.rota})
    console.log('adicionei')
  }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */  }
}
