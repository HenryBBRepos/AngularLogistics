import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoDriverRegisteredComponent } from './fmo-driver-registered.component';

describe('FmoDriverRegisteredComponent', () => {
  let component: FmoDriverRegisteredComponent;
  let fixture: ComponentFixture<FmoDriverRegisteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoDriverRegisteredComponent,  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoDriverRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
