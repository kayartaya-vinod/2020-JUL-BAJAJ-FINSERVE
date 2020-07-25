import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public cust;

  constructor(private service: CustomerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(p => {
      this.service.getOneCustomer(p['customerId'])
        .subscribe(data => this.cust = data);
    });


  }

}
