import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'; // npm i rxjs-compat

const baseUrl = 'http://localhost:3000/customers/';


// injectables are singletons (Angular creates a single instance of this class)
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getAllCustomers(pageNum: number = 1): Observable<any> {
    return this.http
      .get(baseUrl + '?page=' + pageNum);
  }

  getOneCustomer(custId: string): Observable<any> {
    custId = custId.toUpperCase();
    return this.http.get(baseUrl + custId);
  }
}
