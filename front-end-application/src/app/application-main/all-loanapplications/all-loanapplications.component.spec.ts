import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLoanapplicationsComponent } from './all-loanapplications.component';

describe('AllLoanapplicationsComponent', () => {
  let component: AllLoanapplicationsComponent;
  let fixture: ComponentFixture<AllLoanapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLoanapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLoanapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
