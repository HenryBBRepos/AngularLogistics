import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Menu} from '../../model/model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('closeD1ialog') closeEvent = new EventEmitter();
  //menuContainerMobile = 'menu-container-mobile';
  menuList: Array<Menu> = [];
  constructor() { }

  ngOnInit() {
    this.initializeMenu();
  }
  
  // close() {
  //   this.closeEvent.emit();
  //   this.menuContainerMobile = 'hide-side-menu';
  // }

  initializeMenu() {
    this.menuList = environment.en.app.dashboard.menu;
  }
}
