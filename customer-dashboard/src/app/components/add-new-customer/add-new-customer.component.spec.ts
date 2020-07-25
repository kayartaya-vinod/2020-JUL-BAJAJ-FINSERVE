import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCustomerComponent } from './add-new-customer.component';

describe('AddNewCustomerComponent', () => {
  let component: AddNewCustomerComponent;
  let fixture: ComponentFixture<AddNewCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
