import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false
})
export class CadastroPage {
  diaSelecionado: number | null;
  mesSelecionado: string | null;
  anoSelecionado: number | null;
  dataCompleta: string;

  dias: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  anos: number[] = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  constructor() {
    this.diaSelecionado = null;
    this.mesSelecionado = null;
    this.anoSelecionado = null;
    this.dataCompleta = '';
  }

  mostrarData() {
    if (this.diaSelecionado && this.mesSelecionado && this.anoSelecionado) {
      this.dataCompleta = `${this.diaSelecionado} de ${this.mesSelecionado} de ${this.anoSelecionado}`;
    } else {
      this.dataCompleta = 'Por favor, selecione todos os campos.';
    }
  }

}




