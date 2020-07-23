import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public cust;

  // Angular runtime invokes this constructor, when it encounters <app-customer-details> tag.
  // Angular runtime, attempts to pass an object of the type you have specified as constructor arg.
  constructor(private http: HttpClient) {
    // console.log('CustomerDetailsComponent constructor called with http as parameter');
    // console.log('http is', http);
  }

  ngOnInit(): void {
    // this function is automatically called by Angular runtime
    // once this component is ready

    // return value from http.***() functions is an Observable (from Rxjs), which must be subscribed to
    // using the .subscribe() funciton, which takes 3 callback functions.
    // callback#1 --> getting the data from the request, whenever possible
    // callback#2 --> getting any error (if)
    // callback#3 --> called when the subscription ends.
    this.http.get('http://localhost:3000/customers/ANTON')
      .subscribe(data => this.cust = data);

  }

}
