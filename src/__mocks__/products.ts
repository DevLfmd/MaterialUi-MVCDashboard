/**
 * Mock para produtos
 */
export const products = [
  {
    id: '0',
    createdAt: '27/03/2020',
    description: 'Marca Team Group, Modelo TF12D416G3200HC16F01, Capacidade 16 GB (1 x 16 GB), Frequência 3200 MHz, Tipo de memória DDR4',
    title: 'Memória Ram 16gb (1x16) Ddr4 3200mhz',
    promotionalPrice: 399.00,
    realPrice: 499.00,
    qtdInStock: 10,
    media: 'https://m.media-amazon.com/images/I/31YPX2vf5gS._AC_.jpg'
  },
  {
    id: '1',
    createdAt: '31/03/2020',
    description: 'Produtividade e entretenimento, tudo disponível no seu computador de mesa. ',
    title: 'Processador gamer Intel Core i9',
    promotionalPrice: 1200.00,
    realPrice: 1500.00,
    qtdInStock: 10,
    media: 'https://http2.mlstatic.com/D_NQ_NP_663104-MLA43418472645_092020-O.webp'
  },
  {
    id: '2',
    createdAt: '03/04/2020',
    description: 'Para trabalhar desde casa com o computador ou aproveitar momentos de lazer, você precisa de conforto e facilidade de movimento. ',
    title: 'Mouse para jogo Lehmox GT-M4 preto',
    promotionalPrice: 75.00,
    realPrice: 50.00,
    qtdInStock: 10,
    media: 'https://http2.mlstatic.com/D_NQ_NP_820972-MLA45291049637_032021-O.webp'
  },
  {
    id: '3',
    createdAt: '04/04/2020',
    description: 'Placa Mãe Lga 1155 Kazuk H61 Para I3 I5 I7 Até 16gb Nova!!',
    title: 'Placa Mãe Kazuk Lga 1155 H61 Ddr3',
    promotionalPrice: 300.00,
    realPrice: 250.00,
    qtdInStock: 10,
    media: 'https://http2.mlstatic.com/D_NQ_NP_663459-MLB31925868476_082019-O.webp'
  },
  {
    id: '4',
    createdAt: '04/04/2019',
    description: 'A Nvidia é o fabricante líder de placas de vídeo, sua qualidade garante uma experiência positiva no desenvolvimento do motor gráfico do seu computador. ',
    title: 'Placa de vídeo Nvidia Galax GeForce GTX',
    promotionalPrice: 900.00,
    realPrice: 1200.00,
    qtdInStock: 10,
    media: 'https://http2.mlstatic.com/D_NQ_NP_990851-MLA43569855577_092020-O.webp'
  },
  {
    id: '5',
    createdAt: '04/04/2020',
    description: 'Garantia de 03 meses com a loja',
    title: 'Adaptador Gigabit Lan Rede Usb 3.0',
    promotionalPrice: 75.00,
    realPrice: 50.00,
    qtdInStock: 10,
    media: 'https://http2.mlstatic.com/D_NQ_NP_755203-MLB43232959719_082020-O.webp'
  }
];

/**
 * Interface de produtos
 */
export interface Product {
  id: string;
  createdAt: any;
  description: string;
  media: string;
  title: string;
  promotionalPrice: number;
  realPrice: number;
  qtdInStock: number;
};
  