import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  passwordReceivingOption = 'phonenumber';
  //router: any;

  
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


}
