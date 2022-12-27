export class ContactQuery {
  public query_id: number;
  public query_desc: string;
  public name: string;
  public phone: string;
  public query_dt: string;
  public email: string;

  constructor(
    query_id?: number,
    query_desc?: string,
    name?: string,
    phone?: string,
    query_dt?: string,
    email?: string
  ) {
    this.query_id = query_id || 0;
    this.query_desc = query_desc || '';
    this.name = name || '';
    this.phone = phone || '';
    this.query_dt = query_dt || '';
    this.email = email || '';
  }
}
