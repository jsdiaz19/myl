import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewDespachoServiceService {

  constructor( private http: HttpClient ) { }

  Get_Despacho(store){
    return this.http.post('/php/View-despacho/Get_despacho.php',{store:store});
  }
  
  Cod_Store(){
    return this.http.get('/php/View-despacho/Cod_Store.php');
  }
}
