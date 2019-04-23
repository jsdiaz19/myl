import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BudgetGoalService {

  constructor( private http: HttpClient ) { }

  Budget(year){
    return this.http.post('/php/goal-budget/Get-budget.php',{year:year});
  }

  BudgetMonth(year){
    return this.http.post('/php/goal-budget/BudgetMonth.php',{year:year});
  } 

  BudgetWeek(year,month){
    return this.http.post('/php/goal-budget/BudgetWeek.php',{year:year, month: month});
  }
}
