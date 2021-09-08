import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMonitorComponent } from './field-monitor.component';

describe('FieldMonitorComponent', () => {
  let component: FieldMonitorComponent;
  let fixture: ComponentFixture<FieldMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
