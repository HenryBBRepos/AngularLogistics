import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoProfilePicComponent } from './fmo-profile-pic.component';

describe('FmoProfilePicComponent', () => {
  let component: FmoProfilePicComponent;
  let fixture: ComponentFixture<FmoProfilePicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoProfilePicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoProfilePicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
