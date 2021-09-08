import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Menu} from '../../model/model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  menu: Menu[];
  constructor() { }

  ngOnInit() {
    this.menu = environment.en.app.dashboard.settings.menu;
  }

}
