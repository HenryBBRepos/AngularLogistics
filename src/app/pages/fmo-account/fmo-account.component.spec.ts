import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoAccountComponent } from './fmo-account.component';

describe('FmoAccountComponent', () => {
  let component: FmoAccountComponent;
  let fixture: ComponentFixture<FmoAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
