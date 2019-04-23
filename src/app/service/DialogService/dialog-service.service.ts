import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DialogServiceService {

  constructor( private http: HttpClient) { }

  Get_transport(){
    return this.http.get('/php/starter/dialog/Get_transport.php');
  }

  Update_state(id, state,company,guide){
    return this.http.post('/php/starter/dialog/Update.php',{id: id,state: state, company: company, guide: guide}).subscribe(result =>{
      console.log(result);
    })
  }
}
