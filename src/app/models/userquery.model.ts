export class ContactQuery {
  public query_id: number;
  public query_desc: string;
  public query_dt: string;

  constructor(query_id?: number, query_desc?: string, query_dt?: string) {
    this.query_id = query_id || 0;
    this.query_desc = query_desc || '';
    this.query_dt = query_dt || '';
  }
}
