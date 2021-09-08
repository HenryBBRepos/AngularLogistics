import { Component, OnInit } from '@angular/core';

export interface AdminHomePage {
  totalDrivers: string;
  totalVehicles: string;
}
@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss']
})
export class AdminHomepageComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit() {
  }

  AdminHomePageCard: AdminHomePage = {
    totalDrivers: "213",
    totalVehicles: "128"
  };

  
  

}

