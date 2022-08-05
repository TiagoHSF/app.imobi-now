import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss'],
})
export class EmpresaComponent implements OnInit {
  public qtdEmails: Number[] = [0];

  constructor() {}

  ngOnInit(): void {}

  addEmail() {
    if (this.qtdEmails.length === 3) {
      return;
    } else {
      this.qtdEmails.push(this.qtdEmails.length + 1);
    }
  }

  removerEmail(index: any) {}
}
