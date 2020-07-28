import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  title: string = 'Pipes Demo';
  subtitle: string = 'Pipes allow you to transform model data into something else!'
  p1 = {
    name: 'vinod', age: 47,
    address: {
      city: 'Bangalore',
      country: 'India'
    }
  };

  amount:number = 123456.2355;
  today = new Date(); //Date.now();

  constructor() { }

  ngOnInit(): void {
  }

}
