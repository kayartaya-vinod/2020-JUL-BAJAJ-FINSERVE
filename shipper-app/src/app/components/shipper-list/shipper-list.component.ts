import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../service/shipper.service';

@Component({
  selector: 'app-shipper-list',
  templateUrl: './shipper-list.component.html',
  styleUrls: ['./shipper-list.component.css']
})
export class ShipperListComponent implements OnInit {

  shippers: Array<any> = [];

  constructor(private service: ShipperService) { }

  ngOnInit(): void {
    this.service.getAllShippers().subscribe(data => this.shippers = data);
  }

}
