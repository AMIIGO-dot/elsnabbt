export type Offer = {
  id: number;
  leverantor: string;
  avtalNamn: string;
  typ: 'fast' | 'rörligt' | 'timpris';
  paslagOre: number; // påslag öre/kWh
  fastAvgift: number; // kr/mån
  bindningManader: number;
  gron: boolean;
  kampanj: string;
  logo: string; // url till logga eller placeholder
};

export type PostnrData = {
  elArea: 'SE1' | 'SE2' | 'SE3' | 'SE4';
  natavgiftAr: number; // uppskattad nätavgift per år
};