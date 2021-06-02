import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyBalanceComponent } from './company-balance.component';

describe('CompanyBalanceComponent', () => {
  let component: CompanyBalanceComponent;
  let fixture: ComponentFixture<CompanyBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
