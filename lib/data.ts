import { Offer } from './types';

export async function getOffers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/offers`, {
    cache: 'no-store',
  });
  return res.json() as Promise<Offer[]>;
}

// Beräkning flyttad hit (används från client)
export function calculateTotalCost(offer: Offer, annualKwh: number, postnrData: any) {
  const spotApprox = 45;
  const elhandelOre = spotApprox + offer.paslagOre;
  const elhandelKr = (annualKwh * elhandelOre) / 100;

  const fastAvgiftAr = offer.fastAvgift * 12;
  const natKr = postnrData.natavgiftAr;
  const elskattKr = annualKwh * 0.48;
  const momsKr = (elhandelKr + fastAvgiftAr + natKr + elskattKr) * 0.25;

  const totalAr = Math.round(elhandelKr + fastAvgiftAr + natKr + elskattKr + momsKr);
  const totalMan = Math.round(totalAr / 12);
  const besparing = Math.round((14000 - totalAr) / 100) * 100;

  return { totalAr, totalMan, besparing, elArea: postnrData.elArea };
}