import moment from 'moment';
import 'moment/locale/pt-br';
import { v4 as uuid } from 'uuid';

moment.locale('pt-br');

/**
 * Mock Array de pedidos 
 */
export const requests: Array<Request> = [
  {
    id: uuid(),
    name: 'Placa de vídeo Nvidia Galax GeForce GTX 16 Series GTX',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_990851-MLA43569855577_092020-O.webp',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Placa de vídeo Nvidia Galax GeForce GTX 16 Series GTX',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_694679-MLA40023007474_122019-O.webp',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Memória RAM ValueRAM color Verde 4GB',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_851803-MLA40194584055_122019-O.webp',
    updatedAt: moment().subtract(3, 'hours')
  }
];

export interface Request {
  id: string;
  name: string;
  imageUrl: string;
  updatedAt: any;
};