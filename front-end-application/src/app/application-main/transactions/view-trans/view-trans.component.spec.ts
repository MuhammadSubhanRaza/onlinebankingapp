import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransComponent } from './view-trans.component';

describe('ViewTransComponent', () => {
  let component: ViewTransComponent;
  let fixture: ComponentFixture<ViewTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTransComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
