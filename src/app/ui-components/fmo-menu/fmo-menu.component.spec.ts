import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoMenuComponent } from './fmo-menu.component';

describe('FmoMenuComponent', () => {
  let component: FmoMenuComponent;
  let fixture: ComponentFixture<FmoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
