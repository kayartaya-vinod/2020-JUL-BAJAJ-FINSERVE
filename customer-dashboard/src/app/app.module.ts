import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewCustomerComponent } from './components/add-new-customer/add-new-customer.component';
import { PnfComponent } from './components/pnf/pnf.component';

// a 'Route' is an object that contains 'path'->'Component' mapping
// a 'path' is nothing but a URI segment
// For example, http://localhost:4200/home --> '/home' is the path
// For example, http://localhost:4200/customers --> '/customers' is the path
// For example, http://localhost:4200/customers/ANTON --> '/customers/<id>' is the path
// For example, http://localhost:4200/add-customer --> '/add-customer' is the path

const routeConfig: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-all',
    component: CustomerListComponent
  },
  {
    path: 'add-new',
    component: AddNewCustomerComponent
  },
  {
    path: 'view-details/:customerId',
    component: CustomerDetailsComponent
  },
  {
    // this is the default route handler; must be the last one.
    path: '**',
    component: PnfComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    HomeComponent,
    AddNewCustomerComponent,
    PnfComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
