import { ContatoEmpresaDto } from './ContatoEmpresaDto';
import { EnderecoEmpresaDto } from './EnderecoEmpresaDto';

export interface EmpresaDto {
  cnpj: String;
  razaoSocial: String;
  nomeFantasia: String;
  enderecoFisico: EnderecoEmpresaDto;
  qtdFuncionarios: Number;
  contato: ContatoEmpresaDto;
}
