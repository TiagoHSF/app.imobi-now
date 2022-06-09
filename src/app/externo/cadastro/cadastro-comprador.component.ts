import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Routes } from '@angular/router';

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


  sentEmail() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Um email foi enviado para ',
      showConfirmButton: false,
      timer: 3000
    })
  }


}
