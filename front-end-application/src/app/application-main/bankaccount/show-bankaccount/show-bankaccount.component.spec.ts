import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBankaccountComponent } from './show-bankaccount.component';

describe('ShowBankaccountComponent', () => {
  let component: ShowBankaccountComponent;
  let fixture: ComponentFixture<ShowBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBankaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
