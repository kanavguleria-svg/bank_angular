import { Account_details } from './user';

export class Customer {
  public id: number;
  public name: string;
  public email: string;
  public phone: string;
  public age: number;
  public gender: string;
  public address: string;
  public martial_status: string;
  public username: string;
  public password: string;
  public unique_identity: string;
  public unique_identity_number: number;
  public role: string;
  public employement_status: string;
  public authStatus: string;
  public accountDetails: Account_details;
  public payee: any;

  constructor(
    id?: number,
    name?: string,
    email?: string,
    phone?: string,
    age?: number,
    gender?: string,
    address?: string,
    martial_status?: string,
    username?: string,
    password?: string,
    unique_identity?: string,
    unique_identity_number?: number,
    role?: string,
    employement_status?: string,
    authStatus?: string,
    accountDetails?: Account_details
  ) {
    this.id = id || 0;
    this.name = name || '';
    this.email = email || '';
    this.phone = phone || '';
    this.age = age || 0;
    this.gender = gender || '';
    this.address = address || '';
    this.martial_status = martial_status || '';
    this.username = username || '';
    this.password = password || '';
    this.unique_identity = unique_identity || '';
    this.unique_identity_number = unique_identity_number || 0;
    this.role = role || '';
    this.employement_status = employement_status || '';
    this.authStatus = authStatus || '';
    this.accountDetails = accountDetails;
  }
}
