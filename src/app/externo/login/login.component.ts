import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/LoginService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate(['/feed-comp-ads']);
  }

  tipoCadastro() {
    Swal.fire({
      title: 'Selecione o tipo de cadastro!',
      icon: 'warning',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Comprador',
      cancelButtonText: 'Corretor',
    })
      .then((sim) => {
        if (sim.value) {
          this.loginService.setTipoCadastro(true);
        } else {
          this.loginService.setTipoCadastro(false);
        }
      })
      .then(() => {
        return this.router.navigate(['/cadastro-comprador']);
      });
  }
}
