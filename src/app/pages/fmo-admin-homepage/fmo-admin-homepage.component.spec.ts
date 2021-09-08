import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoAdminHomepageComponent } from './fmo-admin-homepage.component';

describe('FmoAdminHomepageComponent', () => {
  let component: FmoAdminHomepageComponent;
  let fixture: ComponentFixture<FmoAdminHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoAdminHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoAdminHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
