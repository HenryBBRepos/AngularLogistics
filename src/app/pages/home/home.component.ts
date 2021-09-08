import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = true;
  homeContainer = 'home-container';
  rightSideBarMenu = 'right-side-bar-menu-closed';
  content = 'content-closed';


  constructor() { }

  ngOnInit() {
    this.loadPage();
  }

  changeDashboardLayout() {
    if (this.rightSideBarMenu === 'right-side-bar-menu-closed') {
     // this.homeContainer = 'home-container-with-sidebar';
      this.content = 'content';
      this.rightSideBarMenu = 'right-side-bar-menu';
    } else {
      this.content = 'content-closed';
      this.rightSideBarMenu = 'right-side-bar-menu-closed';
    }
  }

  loadPage() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  closeDialog() {

  }



}
