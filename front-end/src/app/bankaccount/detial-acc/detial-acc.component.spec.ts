import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialAccComponent } from './detial-acc.component';

describe('DetialAccComponent', () => {
  let component: DetialAccComponent;
  let fixture: ComponentFixture<DetialAccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetialAccComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetialAccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
