import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3001/shippers/';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {

  constructor(private http: HttpClient) { }

  getAllShippers(): Observable<Array<any>> {
    return this.http.get(baseUrl).map(data => data as Array<any>);
  }
}
