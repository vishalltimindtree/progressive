import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { TransactionTS } from "../types/tstypes/Transactionts";
import { Observable } from "rxjs";
import { CustomerTS } from "../types/tstypes/Customerts";
import { AccountTS } from "../types/tstypes/Accountts";
// import { transition } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class BankService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  addCustomer(customer: CustomerTS): Observable<CustomerTS> {
  }

  getCustomers(): Observable<CustomerTS[]> {
    

  }

  addAccount(account: AccountTS): Observable<AccountTS> {
   
  }

  getAccounts(): Observable<AccountTS[]> {
    

  }

  performTransaction(transaction: TransactionTS): Observable<TransactionTS> {
   
  }

  getOutstandingBalance(userId: string): Observable<number> {
    
  }

  getAllTranactions(): Observable<TransactionTS[]> {
    

  }
  /** get account by user */
  getAccountsByUser(userId:string|null): Observable<AccountTS[]> {
    

  }

  getTransactionByUser(userId: string|null): Observable<TransactionTS[]> {
    

  }

  deleteCustomer(customerId: number): Observable<any> {
    
  }

  editCustomer(customer: CustomerTS): Observable<CustomerTS> {
   
  }

  deleteAccount(accountId: number): Observable<any> {
    
  }

  editAccount(account: AccountTS): Observable<AccountTS> {
    // return null;
  }


}
