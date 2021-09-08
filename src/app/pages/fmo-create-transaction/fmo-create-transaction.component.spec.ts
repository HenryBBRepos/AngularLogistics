import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmoCreateTransactionComponent } from './fmo-create-transaction.component';

describe('FmoCreateTransactionComponent', () => {
  let component: FmoCreateTransactionComponent;
  let fixture: ComponentFixture<FmoCreateTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmoCreateTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmoCreateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
