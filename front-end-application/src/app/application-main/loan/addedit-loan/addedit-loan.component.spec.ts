import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditLoanComponent } from './addedit-loan.component';

describe('AddeditLoanComponent', () => {
  let component: AddeditLoanComponent;
  let fixture: ComponentFixture<AddeditLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
