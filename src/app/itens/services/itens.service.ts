import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Item } from './../model/item';

@Injectable({
  providedIn: 'root',
})
export class ItensService {
  constructor(private clienteHTTP: HttpClient) {}
  private readonly API = 'api/itens';

  listar() {
    return this.clienteHTTP.get<Item[]>(this.API).pipe(
      first(),
      // delay(2000),
      tap((itens) => console.log(itens))
    );
  }

  salvar(item: Item) {
    console.log(item)
    return this.clienteHTTP.post<Item>(
      this.API, item)
      .pipe(first()
      );
  }
}
