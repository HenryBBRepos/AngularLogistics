import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fmo-admin-homepage',
  templateUrl: './fmo-admin-homepage.component.html',
  styleUrls: ['./fmo-admin-homepage.component.scss']
})
export class FmoAdminHomepageComponent implements OnInit {
  welcomeCard: any;
  driverAndRegistrationCard: any;
  constructor() { }

  ngOnInit() {
    this.init();
  }

   init(): void {
    this.welcomeCard = environment.en.app.dashboard.home.welcomeCard;
    this.driverAndRegistrationCard = environment.en.app.dashboard.home.driverAndRegistrationCard;
  }

  scan(): void {

  }
}
