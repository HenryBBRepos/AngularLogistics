import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoSignupComponent } from './fmo-signup.component';

describe('FmoSignupComponent', () => {
  let component: FmoSignupComponent;
  let fixture: ComponentFixture<FmoSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
