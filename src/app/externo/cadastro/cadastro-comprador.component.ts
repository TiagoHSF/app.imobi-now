import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LoginService } from 'src/app/service/LoginService';

import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-cadastro-comprador',
  templateUrl: './cadastro-comprador.component.html',
  styleUrls: ['./cadastro-comprador.component.scss'],
})
export class CadastroCompradorComponent implements OnInit {
  public ehComprador: boolean = false;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    this.ehComprador = this.loginService.getTipoCadastro();
  }

  navigate() {
    this.router.navigate(['/primeiros-passos']);
  }

  sentEmail() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Um email foi enviado para ',
      showConfirmButton: false,
      timer: 3000,
    });
  }
}
