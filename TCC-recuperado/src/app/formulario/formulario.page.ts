import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: 'formulario.page.html',
  styleUrls: ['formulario.page.scss'],
  standalone: false
})
export class FormularioPage {
  opcaoSelecionada: string;

  constructor() {
    this.opcaoSelecionada = '';
  }

  onOpcoesSelecionadas() {
    console.log('Opção Selecionada: ', this.opcaoSelecionada);
  }
}

