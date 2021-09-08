import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fmo-profile-pic',
  templateUrl: './fmo-profile-pic.component.html',
  styleUrls: ['./fmo-profile-pic.component.scss']
})
export class FmoProfilePicComponent implements OnInit {
  @Input ('showLogout') showLogout = true;

  constructor() { }

  ngOnInit() {
  }

}
