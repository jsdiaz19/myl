import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnomalyComponent } from './dialog-anomaly.component';

describe('DialogAnomalyComponent', () => {
  let component: DialogAnomalyComponent;
  let fixture: ComponentFixture<DialogAnomalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAnomalyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnomalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
