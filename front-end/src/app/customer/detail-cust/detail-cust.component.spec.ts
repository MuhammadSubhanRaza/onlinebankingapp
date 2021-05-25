import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCustComponent } from './detail-cust.component';

describe('DetailCustComponent', () => {
  let component: DetailCustComponent;
  let fixture: ComponentFixture<DetailCustComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCustComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
