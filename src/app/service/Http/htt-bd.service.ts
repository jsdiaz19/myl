import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {DataService} from '../Data/data.service'
import { Router } from '@angular/router'
import { UserIdleService } from 'angular-user-idle';
import { compileBaseDefFromMetadata } from '@angular/compiler';
import { yearsPerPage } from '@angular/material/datepicker/typings/multi-year-view';
@Injectable({
  providedIn: 'root'
})
export class HttBDService {
  url='http://localhost/php/'
  idUsr=null;
  cargo=null;
  constructor(private http: HttpClient, private Data: DataService, private router: Router,private userIdle: UserIdleService) {
  }
  
////////////////////////////////  anomaly despacho //////////////////////////////////////////////////////////////////////////

Anomaly(ref,inv,descript){
  return this.http.post('/php/check-despacho/dialog/Anomaly.php',{ref: ref, inv: inv,descript: descript});
}
////////////////////////////////  anomaly despacho //////////////////////////////////////////////////////////////////////////

////////////////////////////////  LIST (BUDGET) //////////////////////////////////////////////////////////////////////////

BudgetStore(){
  return this.http.get('/php/budget/BudgetStore.php');
}

////////////////////////////////  LIST (BUDGET) //////////////////////////////////////////////////////////////////////////


////////////////////////////////  budget detail  //////////////////////////////////////////////////////////////////////////

BudgetSale(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSale.php',{co: co, month: month});
}

BudgetSale_Week(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSale_Week.php',{co: co, month: month});
}

BudgetSellerWeek(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSellerWeek.php',{co: co, month: month});
}

BudgetSeller(co,month){
  return this.http.post('/php/budget/budget-detail/BudgetSeller.php',{co: co, month: month});
}

////////////////////////////////  budget detail  //////////////////////////////////////////////////////////////////////////


////////////////////////////////  upload csv  //////////////////////////////////////////////////////////////////////////

UpdateBudget(budget){
  return this.http.post('/php/budget/upload-csv/UpdateBudget.php',budget);
}

////////////////////////////////  upload csv  //////////////////////////////////////////////////////////////////////////

  AuthLogin(){
    return localStorage.getItem('auth');
  }

  Search(nom){
    return this.http.post('/php/SearchId.php',{op: 'store', name: nom})
  }
  
  

///////////////////////////////// report store //////////////////////////////////////////////////////////

  ReportStore(co,tipo,price,Fact,date,init,state,Anomaly){
    return this.http.post('/php/report-store/ReportStore.php',{co: co, tipo: tipo, fact: Fact,date:date, price: JSON.stringify(price), init: init,state:state, anomaly:Anomaly });
  }

  LastDate(co,date){
    return this.http.post('/php/report-store/LastDate.php',{co: co, date:date});
  }

  List_vend(){
    return this.http.get('/php/report-store/scheduler/Vend.php');
  }

  Scheduler(co,date,arr){
    return this.http.post('/php/report-store/scheduler/scheduler.php',{co:co,date:date,arr:arr})
  }

  New_User(cod,cc,nom){
    return this.http.post('/php/report-store/scheduler/New_User/new_user.php',{id:cc,cod:cod,nom:nom})
  }

  View_scheduler(){
    return this.http.get('/php/report-store/scheduler/View_scheduler.php');
  }
 
  ///////////////////////////////// Roster  /////////////////////////////////////////////////////////////////////////  

  DateAvaliable(month){
    return this.http.post('/php/Roster/date_avaliable.php',{month:month});
  }

  ReportSchedules(date){
    console.log(date);
    return this.http.post('/php/Roster/schedules.php',{date: date});
  }

    ///////////////////////////////// Position  /////////////////////////////////////////////////////////////////////////  

  Position(co){
    return this.http.post('/php/position/position.php',{co:co});
  }

  UpdatePosition(seller){
    return this.http.post('/php/position/Updateposition.php',{seller: JSON.stringify(seller) });
  }

  view_week(month){
    return this.http.post('/php/position/view_week.php',{month: month });
  }

  UpdateWeek(co,semana,vend){
    return this.http.post('/php/position/week/UpdateWeek.php',{co: co, week: semana, position: JSON.stringify(vend)});
  }

  settlement(co,seller,position,month){
    return this.http.post('/php/settlement/settlement.php',{co: co, seller: seller, position: position,month: month});
  }

  weekSettlement(co,seller,position,month){
    return this.http.post('/php/settlement/weekSettlement.php',{co: co, seller: seller, position: position, month: month});
  }

  Cost(current,before){
    return this.http.post('/php/Cost-effectiveness/cost-effectiveness.php',{current: current, before: before});
  }

  sellerList(co,lapso){
    return this.http.post('/php/settlement/sellerList.php',{co:co, lapso: lapso});
  }
}

