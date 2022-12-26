export class UserOffers {
  public offer_id: number;
  public offer_desc: string;
  public start_date: string;
  public expiry_date: string;

  constructor(
    offer_id?: number,
    offer_desc?: string,
    start_date?: string,
    expiry_date?: string
  ) {
    this.offer_id = offer_id || 0;
    this.offer_desc = offer_desc || '';
    this.start_date = start_date || '';
    this.expiry_date = start_date || '';
  }
}
