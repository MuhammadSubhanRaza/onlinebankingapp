import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditBankaccountComponent } from './addedit-bankaccount.component';

describe('AddeditBankaccountComponent', () => {
  let component: AddeditBankaccountComponent;
  let fixture: ComponentFixture<AddeditBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditBankaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
