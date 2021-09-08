import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoSignupStepTwoComponent } from './fmo-signup-step-two.component';

describe('FmoSignupStepTwoComponent', () => {
  let component: FmoSignupStepTwoComponent;
  let fixture: ComponentFixture<FmoSignupStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoSignupStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoSignupStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
