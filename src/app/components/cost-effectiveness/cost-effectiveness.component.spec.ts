import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostEffectivenessComponent } from './cost-effectiveness.component';

describe('CostEffectivenessComponent', () => {
  let component: CostEffectivenessComponent;
  let fixture: ComponentFixture<CostEffectivenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostEffectivenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostEffectivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
