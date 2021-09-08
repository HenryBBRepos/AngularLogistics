import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoHomeComponent } from './fmo-home.component';

describe('FmoHomeComponent', () => {
  let component: FmoHomeComponent;
  let fixture: ComponentFixture<FmoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
