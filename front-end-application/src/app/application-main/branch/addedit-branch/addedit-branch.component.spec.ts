import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditBranchComponent } from './addedit-branch.component';

describe('AddeditBranchComponent', () => {
  let component: AddeditBranchComponent;
  let fixture: ComponentFixture<AddeditBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
