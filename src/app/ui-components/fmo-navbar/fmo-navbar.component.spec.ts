import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoNavbarComponent } from './fmo-navbar.component';

describe('FmoNavbarComponent', () => {
  let component: FmoNavbarComponent;
  let fixture: ComponentFixture<FmoNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
