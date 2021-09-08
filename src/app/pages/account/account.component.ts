import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  welcomeText: string;
  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.init();
  }

  init(): void {
    this.activatedRoute.children[0].url.subscribe(u => {
      if (u[0].path === 'login') {
            this.welcomeText = 'Please login into your account';
       } else if (u[0].path === 'reset-password') {
            this.welcomeText = 'Please provide your email / phone number. We will send you a new password';
       } else {
            this.welcomeText = 'Please complete your profile by adding your information';
       }
    });
  }
}
