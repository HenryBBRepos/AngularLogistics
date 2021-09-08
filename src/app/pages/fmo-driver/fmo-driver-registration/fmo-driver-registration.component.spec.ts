import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoDriverRegistrationComponent } from './fmo-driver-registration.component';

describe('FmoDriverRegistrationComponent', () => {
  let component: FmoDriverRegistrationComponent;
  let fixture: ComponentFixture<FmoDriverRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoDriverRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoDriverRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
