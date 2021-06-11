import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintMakeComponent } from './complaint-make.component';

describe('ComplaintMakeComponent', () => {
  let component: ComplaintMakeComponent;
  let fixture: ComponentFixture<ComplaintMakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplaintMakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
