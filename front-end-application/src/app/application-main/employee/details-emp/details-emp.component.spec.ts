import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmpComponent } from './details-emp.component';

describe('DetailsEmpComponent', () => {
  let component: DetailsEmpComponent;
  let fixture: ComponentFixture<DetailsEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
