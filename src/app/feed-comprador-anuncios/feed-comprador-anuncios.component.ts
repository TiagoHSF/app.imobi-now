import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-comprador-anuncios',
  templateUrl: './feed-comprador-anuncios.component.html',
  styleUrls: ['./feed-comprador-anuncios.component.scss']
})
export class FeedCompradorAnunciosComponent implements OnInit {
  tipo: String;
  title: String;
  pagamento: String;
  faixaDePreco: String;
  localizacao: String;
  localizacaoEstado: String;
  localizacaoCidade: String;
  clear: Boolean;
  filtrando: Boolean;

  constructor() {
    this.tipo = "Tipo";
    this.title = 'SELECIONE UM TIPO'
    this.pagamento = 'Quota'
    this.faixaDePreco = 'Faixa de preço'
    this.localizacao = 'País'
    this.localizacaoEstado = "Estado"
    this.localizacaoCidade = "Cidade"
    this.clear = false;
    this.filtrando = false;
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
    } else {
      return;
    }
  }

  setSelecionadoPagamento(event: string){
    if(event === 'vista'){
      this.pagamento = 'Á vista'
    } if(event === 'parcelado'){
      this.pagamento = 'Parcelado'
    } else {
      return;
    }
  }

  setSelecionadoFaixa(event: string){
    if(event === 'abaixo'){
      this.faixaDePreco = 'Abaixo de R$30.000,00'
    } if(event === '30'){
      this.faixaDePreco = 'R$ 30.000,00 - R$60.000,00'
    } if(event === '60'){
      this.faixaDePreco = 'R$ 60.000,00 - R$90.000,00'
    } if(event === '90'){
      this.faixaDePreco = 'R$ 90.000,00 - R$120.000,00'
    } if(event === '120'){
      this.faixaDePreco = 'R$ 120.000,00 - R$150.000,00'
    } if(event === 'acima'){
      this.faixaDePreco = 'Acima de R$150.000,00'
    }
  }

  setSelecionadoLocalizacao(event: string){
    if(event === 'Brasil'){
      this.localizacao = 'Brasil'
    }
  }

  setSelecionadoLocalizacaoEstado(event: string){
    if(event === 'Minas Gerais'){
      this.localizacaoEstado = 'Minas Gerais'
    }
    if(event === 'São Paulo'){
      this.localizacaoEstado = 'São Paulo'
    }
  }

  setSelecionadoLocalizacaoCidade(event: string){
    if(event === 'Itajubá'){
      this.localizacaoCidade = 'Itajubá'
    }
    if(event === 'Piranguinho'){
      this.localizacaoCidade = 'Piranguinho'
    }
    if(event === 'Delfim Moreira'){
      this.localizacaoCidade = 'Delfim Moreira'
    }
    if(event === 'Campinas'){
      this.localizacaoCidade = 'Campinas'
    }
    if(event === 'Santos'){
      this.localizacaoCidade = 'Santos'
    }
  }

   clearFiltros(){
    this.clear = true;
    this.tipo = 'Tipo'
    this.title = 'SELECIONE UM TIPO'
    this.pagamento = 'Quota'
    this.faixaDePreco = 'Faixa de preço'
    this.localizacao = 'País'
    this.localizacaoEstado = "Estado"
    this.localizacaoCidade = "Cidade"
    this.clear = false;
  }

  filtroAtivo(event: String){
    if(event === 'filtrando'){
      this.filtrando = true;
    }
  }

  setNaoFiltrando(){
    this.filtrando = false;
    this.tipo = 'Tipo'
    this.title = 'SELECIONE UM TIPO'
    this.pagamento = 'Quota'
    this.faixaDePreco = 'Faixa de preço'
    this.localizacao = 'País'
    this.localizacaoEstado = "Estado"
    this.localizacaoCidade = "Cidade"
  }
}

