import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoLoginComponent } from './fmo-login.component';

describe('FmoLoginComponent', () => {
  let component: FmoLoginComponent;
  let fixture: ComponentFixture<FmoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
