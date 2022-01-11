import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'
import { Routes } from '@angular/router';

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
      timer: 1500
    })
  }


}
