import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
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
