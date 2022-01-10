import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-cadastro-comprador',
  templateUrl: './cadastro-comprador.component.html',
  styleUrls: ['./cadastro-comprador.component.scss']
})
export class CadastroCompradorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sentEmail(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Um email foi enviado para "$email" contendo as instruções para confirmar seu cadastro!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
