import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public cust;

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.service.getOneCustomer('alfki')
      .subscribe(data => this.cust = data);
  }

}
