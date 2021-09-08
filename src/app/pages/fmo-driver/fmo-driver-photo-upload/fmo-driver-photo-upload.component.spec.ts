import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoDriverPhotoUploadComponent } from './fmo-driver-photo-upload.component';

describe('FmoDriverPhotoUploadComponent', () => {
  let component: FmoDriverPhotoUploadComponent;
  let fixture: ComponentFixture<FmoDriverPhotoUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoDriverPhotoUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoDriverPhotoUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
