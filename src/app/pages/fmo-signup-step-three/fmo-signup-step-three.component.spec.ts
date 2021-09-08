import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoSignupStepThreeComponent } from './fmo-signup-step-three.component';

describe('FmoSignupStepThreeComponent', () => {
  let component: FmoSignupStepThreeComponent;
  let fixture: ComponentFixture<FmoSignupStepThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoSignupStepThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoSignupStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
