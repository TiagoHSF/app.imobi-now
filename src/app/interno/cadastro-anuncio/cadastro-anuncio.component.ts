import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-cadastro-anuncio',
  templateUrl: './cadastro-anuncio.component.html',
  styleUrls: ['./cadastro-anuncio.component.scss']
})
export class CadastroAnuncioComponent implements OnInit {
  tipo: string;
  quota: string;


  constructor() {
    this.tipo = "Tipo"
    this.quota = "Quota"
  }

  ngOnInit(): void {
  }

  setTipoImovel(event: string){
    if(event === 'casa'){
      this.tipo = "Casa"
    }
    if(event === 'apartamento'){
      this.tipo = "Apartamento"
    }
    if(event === 'terreno'){
      this.tipo = "Terreno"
    }
    if(event === 'ponto'){
      this.tipo = "Ponto Comercial"
    }
  }

  setQuota(event: string){
    if(event === 'vista'){
      this.quota = "À vista"
    }
    if(event === 'parcelado'){
      this.quota = "Parcelado"
    }
  }

  ativacaoSelo(){

  }

  ativacaoAnuncio(){

  }

  eventUpdate(){

  }
}
