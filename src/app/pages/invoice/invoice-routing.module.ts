import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InvoiceComponent} from './invoice.component';
import {InvoiceDetailComponent} from './invoice-detail/invoice-detail.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'invoice',
    pathMatch: 'full'
  },
  {
    path: 'invoice',
    component: InvoiceComponent
  },
  {
    path: 'invoice/ref/:invoiceRefNo',
    component: InvoiceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
