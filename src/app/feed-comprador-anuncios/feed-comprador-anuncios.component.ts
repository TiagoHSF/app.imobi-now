import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-comprador-anuncios',
  templateUrl: './feed-comprador-anuncios.component.html',
  styleUrls: ['./feed-comprador-anuncios.component.scss']
})
export class FeedCompradorAnunciosComponent implements OnInit {
  tipo: String;
  title: String;

  constructor() {
    this.tipo = "Tipo";
    this.title = 'SELECIONE UM TIPO'
  }

  ngOnInit(): void {
  }

  setSelecionado(event: string){
    if(event === 'casa'){
      this.tipo = 'Casas'
      this.title = 'CASAS'
    } if(event === 'apartamento'){
      this.tipo = 'Apartamentos'
      this.title = 'APARTAMENTOS'
    } if(event === 'terreno') {
      this.tipo = 'Terrenos'
      this.title = 'TERRENOS'
    }
  }

}
