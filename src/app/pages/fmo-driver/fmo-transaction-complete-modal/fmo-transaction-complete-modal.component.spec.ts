import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoTransactionCompleteModalComponent } from './fmo-transaction-complete-modal.component';

describe('FmoTransactionCompleteModalComponent', () => {
  let component: FmoTransactionCompleteModalComponent;
  let fixture: ComponentFixture<FmoTransactionCompleteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoTransactionCompleteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoTransactionCompleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
