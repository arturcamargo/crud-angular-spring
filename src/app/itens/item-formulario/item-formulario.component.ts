import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ItensService } from './../services/itens.service';

@Component({
  selector: 'app-item-formulario',
  templateUrl: './item-formulario.component.html',
  styleUrls: ['./item-formulario.component.scss'],
})
export class ItemFormularioComponent implements OnInit {
  formulario: UntypedFormGroup;

  constructor(
    private construtorFormulario: UntypedFormBuilder,
    private servicos: ItensService,
    private snackBar: MatSnackBar,
    private localizacao: Location,
  ) {
    this.formulario = this.construtorFormulario.group({
      categoria: [null],
      tarefa: [null],
      responsavel: [null],
    });
  }

  enviar() {
    this.servicos.salvar(this.formulario.value)
    .subscribe(
      sucesso => this.sucessoAoSalvar(),
      erro => {
        this.erroAoSalvar();
      }
    );
  }

  cancelar() {
    this.localizacao.back()
  }

  private sucessoAoSalvar() {
    this.snackBar.open('Tá salvo', '', {
      duration: 1500,
    });
    this.cancelar()
  }

  private erroAoSalvar() {
    this.snackBar.open('Cleirovandis não te deixou salvar kk', '', {
      duration: 1500,
    });
  }

  ngOnInit(): void {}
}
