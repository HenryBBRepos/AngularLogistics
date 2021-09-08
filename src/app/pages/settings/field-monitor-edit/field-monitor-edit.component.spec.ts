import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldMonitorEditComponent } from './field-monitor-edit.component';

describe('FieldMonitorEditComponent', () => {
  let component: FieldMonitorEditComponent;
  let fixture: ComponentFixture<FieldMonitorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldMonitorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldMonitorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
