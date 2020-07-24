import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Array<any> = [];

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.service.getAllCustomers()
      .subscribe(data => this.customers = data);
  }

}
