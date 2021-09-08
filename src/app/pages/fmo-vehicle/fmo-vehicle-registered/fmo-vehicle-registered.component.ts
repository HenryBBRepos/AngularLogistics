import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-fmo-vehicle-registered',
  templateUrl: './fmo-vehicle-registered.component.html',
  styleUrls: ['./fmo-vehicle-registered.component.scss']

})
export class FmoVehicleRegisteredComponent implements OnInit {

  @ViewChild('alert', { static: true }) alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  constructor() { }

  ngOnInit() {
  }

}
