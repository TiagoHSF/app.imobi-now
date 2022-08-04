import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  public cadastroComprador: boolean = false;

  public setTipoCadastro(comprador: boolean) {
    this.cadastroComprador = comprador;
  }

  public getTipoCadastro(): boolean {
    return this.cadastroComprador;
  }
}
