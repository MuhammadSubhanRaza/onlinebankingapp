import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNotificationComponent } from './generate-notification.component';

describe('GenerateNotificationComponent', () => {
  let component: GenerateNotificationComponent;
  let fixture: ComponentFixture<GenerateNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
