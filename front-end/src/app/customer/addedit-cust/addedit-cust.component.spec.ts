import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditCustComponent } from './addedit-cust.component';

describe('AddeditCustComponent', () => {
  let component: AddeditCustComponent;
  let fixture: ComponentFixture<AddeditCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
