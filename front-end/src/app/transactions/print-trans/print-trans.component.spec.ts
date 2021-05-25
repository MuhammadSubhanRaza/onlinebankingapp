import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTransComponent } from './print-trans.component';

describe('PrintTransComponent', () => {
  let component: PrintTransComponent;
  let fixture: ComponentFixture<PrintTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
