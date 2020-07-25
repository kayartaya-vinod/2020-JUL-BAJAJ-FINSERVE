import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  pageNum: number = 1;
  customers: Array<any> = [];

  constructor(private service: CustomerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  next() {
    this.pageNum++;
    this.service.getAllCustomers(this.pageNum)
      .subscribe(data => this.customers = data);
  }

  previous() {
    this.pageNum--;
    this.service.getAllCustomers(this.pageNum)
      .subscribe(data => this.customers = data);
  }

  loadMore(): void {
    this.pageNum++;
    this.loadData();
  }

  loadData() {
    this.service.getAllCustomers(this.pageNum)
      .subscribe(data => this.customers.push(...data));
  }

}
