import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import {ProfileAsideComponent} from '../../ui-components/profile-aside/profile-aside.component';
import {RouterModule} from '@angular/router';
import {NavbarComponent} from '../../ui-components/navbar/navbar.component';
import {MenuComponent} from '../../ui-components/menu/menu.component';
import {ProfilePicComponent} from '../../ui-components/profile-pic/profile-pic.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ProfileAsideComponent,
        NavbarComponent,
        MenuComponent,
        ProfilePicComponent
      ],
      imports: [
        RouterModule.forRoot([]),
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
