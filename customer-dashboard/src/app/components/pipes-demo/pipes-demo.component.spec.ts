import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesDemoComponent } from './pipes-demo.component';

describe('PipesDemoComponent', () => {
  let component: PipesDemoComponent;
  let fixture: ComponentFixture<PipesDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
