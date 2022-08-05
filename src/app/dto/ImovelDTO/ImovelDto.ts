import { CorretorDTO } from '../UsuarioDTO/CorretorDto';
import { LocalizacaoImovelDto } from './LocalizacaoImovelDto';

export interface ImovelDto {
  tipo: String;
  valor: Number;
  quota: String;
  descricao: String;
  localizacao: LocalizacaoImovelDto;
  corretor: CorretorDTO;
}
