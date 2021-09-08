import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FmoMenu } from 'src/app/model/model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-fmo-menu',
  templateUrl: './fmo-menu.component.html',
  styleUrls: ['./fmo-menu.component.scss']
})
export class FmoMenuComponent implements OnInit {

  @Output('closeD1ialog') closeEvent = new EventEmitter();
  menuList: Array<FmoMenu> = [];
  constructor() { }

  ngOnInit() {
    this.initializeMenu();
  }

  initializeMenu() {
    this.menuList = environment.en.app.dashboard.fmomenu;
  }

}
