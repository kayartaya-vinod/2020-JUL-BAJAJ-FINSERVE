import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-customer',
  templateUrl: './add-new-customer.component.html',
  styleUrls: ['./add-new-customer.component.css']
})
export class AddNewCustomerComponent implements OnInit {

  // this variable gets automatically updated as an when the user
  // enters details in the textboxes (due to [(ngModel)] two-way data binding)
  cust: any = {};

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.service.addNewCustomer(this.cust)
      .subscribe(
        () => this.router.navigate(['/view-details', this.cust.CUSTOMER_ID]), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      );
  }

}
