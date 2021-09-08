import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-driver-search-list',
  templateUrl: './driver-search-list.component.html',
  styleUrls: ['./driver-search-list.component.scss']
})
export class DriverSearchListComponent implements OnInit {
  @Input('app-driver-search-list') driverSearchList: string;
  constructor() { }

  ngOnInit() {
  }

}
