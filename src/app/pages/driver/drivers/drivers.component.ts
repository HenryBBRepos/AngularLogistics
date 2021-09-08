import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Trip} from '../../../model/model';

export interface Driver {
  driverId: string;
  name: string;
  address: string;
  profilePic: string;
  phonenumber?: string;
  driverLicenseId?: string;
  licenseIssueDate?: string;
  licenseExpiryDate?: string;
  transactions?: Array<Trip>;
}



@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  driverDatasource: Array<Driver> = [];

  constructor(private router: Router) { }

  ngOnInit() {
    this.initializeDriverList();
  }

  initializeDriverList() {
    this.driverDatasource = [
      {driverId: '1', name: 'Lorenzo Gregory', address: '3771 Formula Lane', profilePic: 'avatar_2.png'},
      {driverId: '2', name: 'Jason R. Parkhust', address: '3200 Perry Street', profilePic: 'avatar_2.png'},
      {driverId: '3', name: 'Harold B. Rushton', address: '2361 Francis Mine', profilePic: 'avatar_2.png'},
      {driverId: '4', name: 'James Culbertson', address: '4611 Waterview Lane', profilePic: 'avatar_2.png'},
      {driverId: '5', name: 'Steven M. Epps', address: '3891 Hilltop Drive', profilePic: 'avatar_2.png'},
      {driverId: '6', name: 'Howard Fleetwood', address: '468 Winifred Way', profilePic: 'avatar_2.png'}
    ];
  }

  viewDriver(driver: Driver) {
    this.router.navigate([`/app/d/drivers/id/${driver.driverId}`]);
  }
}
