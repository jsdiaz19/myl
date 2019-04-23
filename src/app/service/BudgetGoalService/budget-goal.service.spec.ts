import { TestBed } from '@angular/core/testing';

import { BudgetGoalService } from './budget-goal.service';

describe('BudgetGoalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BudgetGoalService = TestBed.get(BudgetGoalService);
    expect(service).toBeTruthy();
  });
});
