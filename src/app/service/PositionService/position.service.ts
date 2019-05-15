import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor( private http: HttpClient ) { }

  Position(co){
    return this.http.post('/php/position/position.php',{co:co});
  }

  SetPosition(month,week,seller,co){
    return this.http.post('/php/position/Setposition.php',{month: month, week: week, seller: JSON.stringify(seller), co: co});
  }

///////////////////////////////////////////////////////////////////////////////////

  view_week(month){
    return this.http.post('/php/position/view_week.php',{month: month });
  }

  UpdateSeller(seller,co,month){
    return this.http.post('/php/position/UpdateSeller.php',{co: co, month: month,seller: JSON.stringify(seller)});
  }
}
