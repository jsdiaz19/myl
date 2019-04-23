import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor( private http: HttpClient) { }

  ViewReport(){
    return this.http.get('/php/balance/View_report.php');
  }

  DeleteReport(co,fecha){
    return this.http.post('/php/balance/Delete_report.php',{co:co,fecha:fecha});
  }
}
