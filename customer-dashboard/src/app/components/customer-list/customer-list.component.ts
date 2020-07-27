import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  // pageNum: number = 1;
  customers: Array<any> = [];
  // totalCustomers: number;
  lastPage: number;

  constructor(public service: CustomerService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.service.getAllCustomers(this.service.pageNum)
      .subscribe(resp => {
        this.customers = resp.data;
        // this.totalCustomers = resp.count;
        this.lastPage = Math.trunc(resp.count / 10) + 1;
      })
  }

  gotoPage(where: string = 'first') {
    switch (where) {
      case 'last':
        this.service.pageNum = this.lastPage;
        break;
      case 'prev':
        if (this.service.pageNum > 1) this.service.pageNum--;
        break;
      case 'next':
        if (this.service.pageNum < this.lastPage) this.service.pageNum++;
        break;
      default:
        this.service.pageNum = 1;
    }

    this.loadData();
  }

  getBtnClass(btn: string = 'first') {
    switch (btn) {
      case 'first':
      case 'prev':
        return this.service.pageNum === 1 ? 'btn-danger' : '';
      default:
        return this.service.pageNum === this.lastPage ? 'btn-danger' : '';
    }
  }
}
