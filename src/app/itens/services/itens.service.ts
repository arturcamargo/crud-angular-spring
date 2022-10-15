import { Item } from './../model/item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItensService {
  constructor(private clienteHTTP: HttpClient) {}
  private readonly API = 'api/itens';
  listar() {
    return this.clienteHTTP.get<Item[]>(this.API)
    .pipe(
      first(),
      // delay(2000),
      tap(itens => (console.log(itens)))
    );
  }
}
