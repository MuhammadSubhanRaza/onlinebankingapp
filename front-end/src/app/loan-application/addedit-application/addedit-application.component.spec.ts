import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditApplicationComponent } from './addedit-application.component';

describe('AddeditApplicationComponent', () => {
  let component: AddeditApplicationComponent;
  let fixture: ComponentFixture<AddeditApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
