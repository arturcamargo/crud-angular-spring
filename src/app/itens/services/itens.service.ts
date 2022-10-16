import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay } from 'rxjs/operators';

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
      delay(1500),
      tap((itens) => console.log(itens))
    );
  }

  salvar(gravacao: Partial<Item>) {
    console.log(gravacao)
    return this.clienteHTTP.post<Item>(
      this.API, gravacao)
      .pipe(first()
      );
  }
}
