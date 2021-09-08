import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fmo-driver-registered',
  templateUrl: './fmo-driver-registered.component.html',
  styleUrls: ['./fmo-driver-registered.component.scss']
})
export class FmoDriverRegisteredComponent implements OnInit {

  @ViewChild('alert', { static: true }) alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }
  constructor() { }

  ngOnInit() {
  }

}
