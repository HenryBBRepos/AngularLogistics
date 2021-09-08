import { Component, OnInit } from '@angular/core';
import {Invoice} from '../../model/model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
  invoices: Invoice[] = [
    {ownerName: 'Amber Loz Goodma', price: '$400', ref: '0022993884', date: '15/07/2020'},
    {ownerName: 'Lorena Williams', price: '$400', ref: '0022993884', date: '15/07/2020'},
    {ownerName: 'Ned R. Luna', price: '$400', ref: '0022993884', date: '15/07/2020'}
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  preview(invoice: Invoice): void {
    this.router.navigateByUrl(`/app/i/invoice/ref/${invoice.ref}`);
  }
}
