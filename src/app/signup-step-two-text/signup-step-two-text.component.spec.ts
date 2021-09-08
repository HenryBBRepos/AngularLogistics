import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStepTwoTextComponent } from './signup-step-two-text.component';

describe('SignupStepTwoTextComponent', () => {
  let component: SignupStepTwoTextComponent;
  let fixture: ComponentFixture<SignupStepTwoTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupStepTwoTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupStepTwoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
