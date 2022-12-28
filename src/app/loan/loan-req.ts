export class LoanReq {
    req_id: number;
    loan_type: string;
    loan_amt: number;
    loan_term: number;
    approve: boolean;
    req_dt: string;
    loan_desc: string;
    loan_rate: number;
}