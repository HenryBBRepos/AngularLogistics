import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoForgotPasswordComponent } from './fmo-forgot-password.component';

describe('FmoForgotPasswordComponent', () => {
  let component: FmoForgotPasswordComponent;
  let fixture: ComponentFixture<FmoForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoForgotPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
