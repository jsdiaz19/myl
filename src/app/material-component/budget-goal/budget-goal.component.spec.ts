import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetGoalComponent } from './budget-goal.component';

describe('BudgetGoalComponent', () => {
  let component: BudgetGoalComponent;
  let fixture: ComponentFixture<BudgetGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
