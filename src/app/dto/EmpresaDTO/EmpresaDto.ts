import { ContatoEmpresaDto } from './ContatoEmpresaDto';

export interface EmpresaDto {
  cnpj: String;
  razaoSocial: String;
  enderecoFisico: String;
  redesSociais: String[];
  qtdFuncionarios: Number;
  contato: ContatoEmpresaDto;
}
