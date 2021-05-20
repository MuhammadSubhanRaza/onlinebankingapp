import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSettingsComponent } from './emp-settings.component';

describe('EmpSettingsComponent', () => {
  let component: EmpSettingsComponent;
  let fixture: ComponentFixture<EmpSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
