import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ViewReportService {

  constructor( private http: HttpClient ) { }

  Main_box(co,date){
    return this.http.post('/php/balance/Main_box.php',{co:co,date:date});
  }

  Contigencebox(co,date){
    return this.http.post('/php/balance/Contigencebox.php',{co:co,date:date});
  }
  Manuallybox(co,date){
    return this.http.post('/php/balance/Manuallybox.php',{co:co,date:date});
  }
  Abstract(co,date){
    return this.http.post('/php/balance/abstract.php',{co:co,date:date});
  }

  Anomally_view(co,date){
    return this.http.post('/php/balance/Anomally.php',{co:co,date:date});
  }
  
}
