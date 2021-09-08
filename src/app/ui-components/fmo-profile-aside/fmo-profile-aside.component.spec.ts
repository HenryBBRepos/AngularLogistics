import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoProfileAsideComponent } from './fmo-profile-aside.component';

describe('FmoProfileAsideComponent', () => {
  let component: FmoProfileAsideComponent;
  let fixture: ComponentFixture<FmoProfileAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoProfileAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoProfileAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
