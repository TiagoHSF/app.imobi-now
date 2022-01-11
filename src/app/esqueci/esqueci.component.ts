import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-esqueci',
  templateUrl: './esqueci.component.html',
  styleUrls: ['./esqueci.component.scss']
})
export class EsqueciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sentCode(){
    Swal.fire({
      title: "Código enviado a $EMAIL!",
      text: 'Insira o código abaixo!',
      icon: 'success',
      input: 'text',
    })
  }

}
